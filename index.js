import express from "express";
import Controller from "./src/controllers/product.controller.js";

const server = express();

const controller = new Controller();

server.use(express.static("src/views"));

server.get("/view", controller.getView);
server.get("/products", controller.getProducts);

server.get("/", (req, res) => {
  res.send("Welcome to node JS server");
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
