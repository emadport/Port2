import PrimaryLayout from "@/components/Primary-layout";
import React from "react";
import styles from "./styles.module.scss";
type Props = {};

export default function about({}: Props) {
  return (
    <div className={styles.about}>
      <h1 className={styles.about__header}>About Beställät App</h1>
      <div className={styles.about__paragraph}>
        Welcome to our React-based food ordering app! We are passionate about
        food and technology, and we have combined these two passions to create a
        user-friendly platform that allows you to order your favorite meals with
        ease. This app is about just testing purposes. The app uses Nextjs,
        Scss, Typescript and Graphql.The app is 70% done and there is lots of
        error handling still left in this project to be done. is right now just
        for testing purposes and is not in commercial level. Our app is designed
        to make the food ordering process simple and enjoyable, so that you can
        focus on the most important thing: enjoying delicious food. Our team
        consists of experienced developers and food enthusiasts who have come
        together to build a platform that meets the needs of modern consumers.
        We understand that in today's fast-paced world, time is a precious
        commodity, and that's why we have made it our mission to create an app
        that streamlines the food ordering process and makes it as convenient as
        possible. Our app features a wide variety of cuisines from different
        regions of the world, allowing you to explore new flavors and satisfy
        your cravings. We work with local restaurants and food vendors to bring
        you the best possible dining experience, and we are constantly adding
        new options to our menu to keep things fresh and exciting. At our core,
        we are committed to providing exceptional customer service and ensuring
        that our users have a seamless experience from start to finish. Whether
        you are ordering food for yourself or for a group of friends, our app
        makes it easy to customize your order, track your delivery, and stay
        up-to-date on the status of your food. Thank you for choosing our
        React-based food ordering app. We hope that you enjoy using our platform
        as much as we have enjoyed building it. If you have any feedback or
        suggestions, please don't hesitate to reach out to us. We are always
        looking for ways to improve and provide the best possible experience for
        our users.
      </div>
    </div>
  );
}
about.Layout = PrimaryLayout;
