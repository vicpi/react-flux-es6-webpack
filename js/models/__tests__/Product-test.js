'use strict';

jest.dontMock('../Product');

describe('Product', function () {
  it('', function() {
    let Product = require('../Product');
    let data = {
      id: 'id',
      brand: 'brand',
      name: 'name',
      price: 'price',
      category: 'category'
    };
    let product = new Product(data);

    expect(product.getName()).toBe('name');
  });
});