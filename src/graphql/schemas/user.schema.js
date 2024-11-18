
export const typeDefs = /* GraphQL */ `
type Query {
  users: [User!]!
  user(id: ID!): User
}

type Mutation {
  createUser(input: NewUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
  deleteUser(id: ID!): Boolean!
}

type User {
  id: ID!
  name: String!
  email: String!
}

input NewUserInput {
  name: String!
  email: String!
}

input UpdateUserInput {
  name: String
  email: String
}
`;
