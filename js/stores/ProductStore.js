'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import {EventEmitter} from 'events';
import Product from '../models/Product';
import ProductEvents from '../events/ProductEvents';
import HttpRequest from '../services/HttpRequest';
import assign from 'object-assign';
import _ from 'lodash';

let CHANGE_EVENT = 'change';

let ProductStore = assign({}, EventEmitter.prototype, {
  _productList: [],
  productCache: {},
  categoryList: [],

  getProductList () {
    return this._productList;
  },

  fetchProductList () {
    HttpRequest.get('/api/products')
    .done(function (response) {
      let productArrayJson = JSON.parse(response);
      for (let productJson of productArrayJson) {
        let product = new Product(productJson);
        this._productList.push(product);
      }
      this.emitChange();
    }.bind(this))
    .fail(function () {
      console.log(response);
    });
  },

  fetchCategoryList () {
    HttpRequest.get('/api/products')
    .done(function (response) {
      let productList = JSON.parse(response);
      let categoryList = productList.map(function (item) {
        return item.category;
      });
      categoryList = _.uniq(categoryList);
      this.categoryList = categoryList;
      this.emitChange();
    }.bind(this));
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  createProduct: function (product) {
    HttpRequest.post('api/products', product).done(function () {
      document.location = '';
    });
    // todo nice redirect using route
  },

  fetchProduct: function (productId) {
    HttpRequest.get('/api/products/' + productId)
    .done(function (product) {
      product = JSON.parse(product);
      this.productCache[productId] = product;
      ProductStore.emitChange();
    }.bind(this));
  },

  getProductById: function (productId) {
    if (productId in this.productCache) {
      return this.productCache[productId];
    }
  },

  getCategoryList: function () {
    return this.categoryList;
  }
});

AppDispatcher.register(function(action) {
  switch(action.actionType) {
    case ProductEvents.PRODUCT_LIST_FETCH:
      ProductStore.fetchProductList();
      ProductStore.emitChange();
      break;
    case ProductEvents.PRODUCT_NEW:
      ProductStore.createProduct(action.product);
      ProductStore.emitChange();
      break;
    case ProductEvents.PRODUCT_FETCH:
      ProductStore.fetchProduct(action.productId);
      ProductStore.emitChange();
      break;
    case ProductEvents.CATEGORY_LIST_FETCH:
      ProductStore.fetchCategoryList();
      ProductStore.emitChange();
      break;
    default:
  }
});


 export default ProductStore;
