const express = require("express");
const helmet = require("helmet");

const RecipeRouter = require("./routes/recipe-router");

const server = express();

const middleware = [helmet(), express.json()];
server.use("/data/recipes", middleware, RecipeRouter);

server.use("/api/cars", carsRouter);

module.exports = server;
