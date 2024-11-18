import { createYoga } from "graphql-yoga";
import { schema } from "./graphql/schema.js";
import { sequelize } from "./config/database.js";

const yoga = createYoga({
  schema,
  context: async () => {
    return { models: { User: sequelize.models.User, Comment: sequelize.models.Comment } };
  },
});

const startServer = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    console.log("Database connected successfully");

    yoga.start(() => {
      console.log("GraphQL server is running on http://localhost:4000");
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
};

startServer();
