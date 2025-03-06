import ProductModel from "../models/product.model.js";

export default class Controller {
  getProducts(req, res) {
    const products = ProductModel.getAll();
    return res.render("index", { products: products });
  }
  getAddProduct(req, res) {
    return res.render("addProduct", { errorMessage: null });
  }
  postProduct(req, res) {
    const { name, desc, price, image } = req.body;

    ProductModel.add(name, desc, price, image);
    const products = ProductModel.getAll();
    return res.render("index", { products: products });
  }
  getUpdateProduct(req, res) {
    const id = req.params.id;
    const product = ProductModel.getById(id);
    if (product) {
      return res.render("updateProduct", {
        product: product,
        errorMessage: null,
      });
    } else {
      return res.send({ msg: "prodcut not found" });
    }
  }
  postUpdateProduct(req, res) {
    ProductModel.updateProduct(req.body);
    const products = ProductModel.getAll();
    return res.render("index", { products: products });
  }
  deleteProduct(req, res) {
    const id = req.params.id;
    ProductModel.delete(id);
    const products = ProductModel.getAll();
    return res.render("index", { products: products });
  }
}
