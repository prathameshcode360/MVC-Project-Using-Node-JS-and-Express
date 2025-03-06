import express from "express";
import Controller from "./src/controllers/product.controller.js";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import Validation from "./src/middlewares/validation.middleware.js";

const server = express();

const controller = new Controller();

// setting url encoded
server.use(express.urlencoded({ extended: true }));

// setting up static view
server.use(express.static("src/views"));

// setting ejs view engine
server.set("view engine", "ejs");
server.set("views", path.join(path.resolve(), "src", "views"));

// using ejs layout
server.use(expressEjsLayouts);

// getting product page
server.get("/", controller.getProducts);

//getting add product page
server.get("/addProduct", controller.getAddProduct);

//posting new product
server.post("/", Validation, controller.postProduct);

//get update product page
server.get("/update/:id", controller.getUpdateProduct);

//posting update product
server.post("/update", controller.postUpdateProduct);

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
