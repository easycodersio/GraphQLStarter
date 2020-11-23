import { gql } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
import Hello from "graphql/Hello";

import { merge } from "lodash";

const Query = gql`
  type Query {
    _empty: String
  }
`;

const Mutation = gql`
  type Mutation {
    _empty: String
  }
`;

const getTypes = () =>
  Object.values({
    Query,
    Mutation,
    ...Hello.getTypes(),
  });

const getResolvers = () => merge(Hello.getResolvers());

const schema = makeExecutableSchema({
  typeDefs: getTypes(),
  resolvers: getResolvers(),
});

export default schema;
