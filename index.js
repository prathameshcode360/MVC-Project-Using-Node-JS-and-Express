import express from "express";
import Controller from "./src/controllers/product.controller.js";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";

const server = express();

const controller = new Controller();
// setting up static view
server.use(express.static("src/views"));

// setting ejs view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

// using ejs layout
server.use(expressEjsLayouts);

// getting product page
server.get("/", controller.getProducts);

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
