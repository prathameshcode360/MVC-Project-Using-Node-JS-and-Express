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
}

const products = [
  {
    id: 1,
    name: "product-1",
    desc: "description for product 1",
    price: 100,
    image:
      "https://www.bing.com/th?id=OIP.mdRGPBq8xeMz984elhfyZQHaHa&w=204&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    id: 2,
    name: "product-2",
    desc: "description for product 2",
    price: 200,
    image:
      "https://www.bing.com/th?id=OIP.mdRGPBq8xeMz984elhfyZQHaHa&w=204&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
  {
    id: 3,
    name: "product-3",
    desc: "description for product 3",
    price: 100,
    image:
      "https://www.bing.com/th?id=OIP.mdRGPBq8xeMz984elhfyZQHaHa&w=204&h=211&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
  },
];
