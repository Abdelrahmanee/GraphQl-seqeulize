
export const commentTypeDef = /* GraphQL */ `
  type Comment {
    id: ID!
    text: String!
    email: String!
    user: User
  }

  extend type Query {
    comments: [Comment]
    comment(id: ID!): Comment
  }

  extend type Mutation {
    createComment(text: String!, email: String!, userId: ID!): Comment
    deleteComment(id: ID!): Boolean
    updateComment(id: ID!, text: String!): Comment
  }
`;
