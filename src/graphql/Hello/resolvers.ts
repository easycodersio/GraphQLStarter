import { IResolvers } from "apollo-server-express";

const resolvers = {
  Query: {
    hello: () => ({
      message: () => "Hello World!",
    }),
  },
};

const getResolvers = () =>
  ({
    ...resolvers,
  } as IResolvers);

export default getResolvers;
