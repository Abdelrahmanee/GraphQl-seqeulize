import User from "../../models/user.model.js";

export const userResolvers = {
  Query: {
    users: async () => User.findAll(),
    user: async (_, { id }) => User.findByPk(id),
  },
  User: {
    comments: (user) => user.getComments(),
  },
};
