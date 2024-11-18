import User from "../../models/user.model.js";

export const userResolvers = {
  Query: {
    users: async () => {
      try {
        return await User.findAll();
      } catch (error) {
        throw new Error("Error fetching users: " + error.message);
      }
    },
    user: async (parent, { id }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) throw new Error("User not found");
        return user;
      } catch (error) {
        throw new Error("Error fetching user: " + error.message);
      }
    },
  },
  Mutation: {
    createUser: async (parent, { input }) => {
      try {
        return await User.create(input);
      } catch (error) {
        throw new Error("Error creating user: " + error.message);
      }
    },
    updateUser: async (parent, { id, input }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) throw new Error("User not found");
        await user.update(input);
        return user;
      } catch (error) {
        throw new Error("Error updating user: " + error.message);
      }
    },
    deleteUser: async (parent, { id }) => {
      try {
        const user = await User.findByPk(id);
        if (!user) throw new Error("User not found");
        await user.destroy();
        return true;
      } catch (error) {
        throw new Error("Error deleting user: " + error.message);
      }
    },
  },
};
