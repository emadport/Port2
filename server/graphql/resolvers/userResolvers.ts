import User from "server/mongoSchema/userSchema";
import bcrypt from "bcrypt";
import { ApolloError } from "apollo-server";
import { storeCookie, deleteCookie } from "lib/storeCookie";
import storeJwt from "lib/storeJwt";
import mongoose from "mongoose";
import JWT from "jsonwebtoken";

import { NextPageContext, NextApiResponse, NextApiRequest } from "next";
import { ResolversParentTypes } from "@/server/generated/graphql";

const userResolvers = {
  Query: {
    //Find the user by id
    async CurrentUser(
      _: any,
      parent: any,
      { userId }: { userId: string | null }
    ) {
      if (!userId) {
        return null;
      }

      const id = await new mongoose.Types.ObjectId(userId);

      const user = await User.findById(id).populate("restaurant");
      return user;
    },
  },
  User: {
    restaurant: (parent: any) => parent.restaurant,
  },
  Mutation: {
    async CreateUser(
      __: any,
      {
        email,
        password,
        username,
      }: { email: string; password: string; username: string }
    ) {
      try {
        const oldUser = await User.findOne({ email: email });
        //check if there is a user already
        if (oldUser) {
          throw new ApolloError(
            "There is a user match with this email, Please login"
          );
        }
        //Hash the password
        const hashedPass = await bcrypt.hash(password, 10);
        //Create a new user in DB
        if (!hashedPass) {
          throw new ApolloError("Error when hashing the password");
        }
        const user = await new User({
          email: email,
          password: hashedPass,
          name: username,
        });
        //Create the token
        let token = await storeJwt({
          user: user.email,
          id: user._id,
        });

        // //Set a token to cookie
        await storeCookie("token", token, res);

        user.token = token;
        //Save it
        const res = await user.save();

        //Get the user that we have created and return it
        return {
          id: res.id,
          ...res._doc,
        };
      } catch (err) {
        throw new ApolloError(err?.message ? err.message : err);
      }
    },

    async SignIn(
      _: any,
      { email, password }: { email: string; password: string },
      { res }: { res: NextApiResponse }
    ) {
      try {
        const lowerCaseEmail = email.toLowerCase();
        //check if there is any user with given email
        const existingUser = await User.findOne({
          email: lowerCaseEmail,
        });
        //check if there is not any user with this email
        if (!existingUser) {
          throw new ApolloError(
            "User could not be found.",
            "Please register first"
          );
        }

        //Compare the pssword with hashed password
        const doesPasswordMatch = await bcrypt.compareSync(
          password,
          existingUser.password
        );

        //if the passwords do not match
        if (!doesPasswordMatch) {
          throw new ApolloError("Password didnt match");
        }

        const token = await storeJwt({
          user: existingUser.email,
          id: existingUser._id,
        });

        if (!token) {
          return null;
        }
        await existingUser.set("token", token).save();
        // //Set a token to cookie
        await storeCookie({ token }, res, 60 * 60 * 60);
        //finally return the token
        return { token };
      } catch (err: any) {
        console.log(err);
        throw new ApolloError(err?.message ? err.message : err);
      }
    },
    //signOut user
    async SignOut(_, args, { res }) {
      try {
        await deleteCookie("token", res);
        return "User signed Out";
      } catch (err) {
        console.log(err);
      }
    },
    async SignInWithGoogle() {},

    async UpdateUser(
      __: any,
      { username }: { username: string },
      context: NextPageContext
    ) {
      const doc = await (
        await User.findById(args.id)
      ).$set({
        username,
      });
      doc.save();
      if (!context.user) return {};
      return doc;
    },

    async UpdatePassword(
      __: any,
      { email, password }: { password: string; email: string }
    ) {
      //Hash the password
      const hashedPass = await bcrypt.hash(password, 10);
      //Create a new user in DB
      if (!hashedPass) {
        throw new ApolloError("Error when hashing the password");
      }
      const doc = await User.findOne({ email }).set({
        password: hashedPass,
      });
      doc.save();
      return doc;
    },
    async AddAddress(__: any, args, context) {
      try {
        const doc = await User.findById(context.sub);
        await doc.$set({
          myArray: [{ name: args.address }],
        });
        await doc.save();
        return doc;
      } catch (err) {
        throw new ApolloError("Couldnt save the address");
      }
    },
  },
};

export default userResolvers;
