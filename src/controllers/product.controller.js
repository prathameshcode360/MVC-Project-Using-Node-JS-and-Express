import ProductModel from "../models/product.model.js";

export default class Controller {
  getProducts(req, res) {
    const products = ProductModel.getAll();
    return res.render("index", { products: products });
  }
}
