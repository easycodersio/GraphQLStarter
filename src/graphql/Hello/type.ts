import { gql } from "apollo-server-express";

const Hello = gql`
  extend type Query {
    hello: Hello
  }

  type Hello {
    message: String
  }
`;

const getTypes = () => ({ Hello });

export default getTypes;
