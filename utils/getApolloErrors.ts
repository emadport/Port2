import { ApolloError } from "@apollo/client";
import React from "react";

export default function getApolloErrors(errors: ApolloError) {
  let error = null;
  errors.graphQLErrors.map((res) => {
    error = res.extensions.originalError.message;
  });
  return error;
}
