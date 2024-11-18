
import { makeExecutableSchema } from "@graphql-tools/schema";
import { typeDefs } from "./schemas/index.js";
import { resolvers } from "./resolvers/index.js";

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
