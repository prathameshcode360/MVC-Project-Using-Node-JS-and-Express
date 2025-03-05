import ProductModel from "../models/product.model.js";

export default class Controller {
  // getView(req, res) {
  //   return res.sendFile(
  //     path.join(path.resolve(), "src", "views", "index.html")
  //   );
  // }
  getProducts(req, res) {
    const products = ProductModel.getProducts();
    return res.render("index", { products: products });
  }
}
