import { Comment, User } from "../../models/index.js";

export const commentResolvers = {
  Query: {
    comments: async () => Comment.findAll(),
    comment: async (_, { id }) => Comment.findByPk(id),
  },
  Mutation: {
    createComment: async (_, { text, email, userId }) => {
      return await Comment.create({ text, email, userId });
    },
    deleteComment: async (_, { id }) => {
      const result = await Comment.destroy({ where: { id } });
      return result > 0;
    },
    updateComment: async (_, { id, text }) => {
      await Comment.update({ text }, { where: { id } });
      return Comment.findByPk(id);
    },
  },
  Comment: {
    user: (comment) => User.findByPk(comment.userId),
  },
};
