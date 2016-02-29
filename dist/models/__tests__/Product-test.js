'use strict';

jest.dontMock('../Product');

describe('Product', function () {
  it('', function () {
    var Product = require('../Product');
    var data = {
      id: 'id',
      brand: 'brand',
      name: 'name',
      price: 'price',
      category: 'category'
    };
    var product = new Product(data);

    expect(product.getName()).toBe('name');
  });
});