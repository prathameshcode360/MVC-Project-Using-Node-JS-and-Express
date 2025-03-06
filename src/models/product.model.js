export default class ProductModel {
  constructor(id, name, desc, price, image) {
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.image = image;
  }
  static getAll() {
    return products;
  }
  static add(name, desc, price, image) {
    const newProduct = new ProductModel(
      products.length + 1,
      name,
      desc,
      price,
      image
    );
    return products.push(newProduct);
  }
  static getById(id) {
    return products.find((product) => product.id == id);
  }
  static updateProduct(productObj) {
    const index = products.findIndex((p) => p.id == productObj.id);
    console.log(index);
    if (index !== -1) {
      products[index] = new ProductModel(
        productObj.id,
        productObj.name,
        productObj.desc,
        productObj.price,
        productObj.image
      );
    }
  }
  static delete(id) {
    const index = products.findIndex((p) => p.id == id);
    if (index !== -1) {
      products.splice(index, 1);
    }
  }
}

let products = [
  new ProductModel(
    1,
    "Product 1",
    "Description for Product 1",
    100,
    "https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    2,
    "Product 2",
    "Description for Product 2",
    200,
    "https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg"
  ),
  new ProductModel(
    3,
    "Product 3",
    "Description for Product 3",
    300,
    "https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg"
  ),
];
