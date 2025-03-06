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

    const errors = [];
    if (!name || name.trim() === "") {
      errors.push("Please Enter Name");
    }

    if (!price || parseFloat(price) <= 0) {
      errors.push("Please Enter Valid Price");
    }

    try {
      const validUrl = new URL(image);
    } catch (error) {
      errors.push("Invalid URL");
    }

    if (errors.length > 0) {
      return res.render("addProduct", { errorMessage: errors[0] });
    }
    ProductModel.add(name, desc, price, image);
    const products = ProductModel.getAll();
    return res.render("index", { products: products });
  }
}
