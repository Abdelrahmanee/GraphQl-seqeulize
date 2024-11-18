import { userResolvers } from "./user.resolver.js";
import { commentResolvers } from "./comment.resolver.js";

export const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...commentResolvers.Query,
  },
  Mutation: {
    ...commentResolvers.Mutation,
  },
  User: userResolvers.User,
  Comment: commentResolvers.Comment,
};
