const { ApolloServer } = require("apollo-server");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT;
const server = new ApolloServer({ typeDefs, resolvers });

mongoose
  .connect(process.env.ATLAS_URI, { useNewUrlParser: true })
  .then(() => {
    console.log("MongoDB connection sucessful!");
    return server.listen({ port: PORT });
  })
  .then((res) => {
    console.log(`Server running at ${res.url}`);
  });
