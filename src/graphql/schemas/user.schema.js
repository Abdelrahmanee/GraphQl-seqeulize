
export const userTypeDef = /* GraphQL */ `
  type User {
    id: ID!
    name: String!
    email: String!
    comments: [Comment]
  }

  extend type Query {
    users: [User]
    user(id: ID!): User
  }
`;
