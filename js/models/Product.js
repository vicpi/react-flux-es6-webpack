'use strict';

class Product {
  constructor(options) {
    this.id = options.id;
    this.brand = options.brand;
    this.name = options.name;
    this.price = options.price;
    this.category = options.category;
  }
}
export default Product;