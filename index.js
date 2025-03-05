import express from "express";
import Controller from "./src/controllers/product.controller.js";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";

const server = express();

const controller = new Controller();
// setting up static view
server.use(express.static("src/views"));

// server.get("/view", controller.getView);

// setting ejs view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

// using ejs layout
server.use(expressEjsLayouts);

server.get("/", controller.getProducts);

// server.get("/", (req, res) => {
//   res.send("Welcome to node JS server");
// });

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
