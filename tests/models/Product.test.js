var expect = require('expect');
var Product = require('../../js/models/Product.js');

describe('Product', function() {
  describe('Product create', function() {
    it('should create Product object with specified data', function() {
      var data = {
        id: 'id',
        brand: 'brand',
        name: 'name',
        price: 'price',
        category: 'category'
      };
      var product = new Product(data);
      expect(product.name).toBe('name');
      expect(product.id).toBe('id');
      expect(product.brand).toBe('brand');
      expect(product.price).toBe('price');
      expect(product.category).toBe('category');
    });

    //it('should not create Product object without data', function() {
    //  var product = new Product();
    //  expect(product).toBe('name'); // todo catch Error
    //});
  });
});