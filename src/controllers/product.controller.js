import path from "path";
import ProductModel from "../models/product.model.js";

export default class Controller {
  getView(req, res) {
    return res.sendFile(
      path.join(path.resolve(), "src", "views", "index.html")
    );
  }
  getProducts(req, res) {
    const products = ProductModel.getProducts();
    console.log(products);
    return res.status(200).send({ products: products });
  }
}
