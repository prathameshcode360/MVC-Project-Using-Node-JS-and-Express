import ProductModel from "../models/product.model.js";

export default class Controller {
  getProducts(req, res) {
    const products = ProductModel.getAll();
    return res.render("index", { products: products });
  }
  getAddProduct(req, res) {
    return res.render("addProduct");
  }
  postProduct(req, res) {
    const { name, desc, price, image } = req.body;
    ProductModel.add(name, desc, price, image);
    const products = ProductModel.getAll();
    return res.render("index", { products: products });
  }
}
