'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Product = function Product(options) {
  _classCallCheck(this, Product);

  this.id = options.id;
  this.brand = options.brand;
  this.name = options.name;
  this.price = options.price;
  this.category = options.category;
};

module.exports = Product;