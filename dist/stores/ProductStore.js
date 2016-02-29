'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Product = require('../models/Product');
var ProductEvents = require('../events/ProductEvents');
var HttpRequest = require('../services/HttpRequest');
var assign = require('object-assign');
var _ = require('lodash');

var CHANGE_EVENT = 'change';

var ProductStore = assign({}, EventEmitter.prototype, {
  _productList: [],
  productCache: {},
  categoryList: [],

  getProductList: function getProductList() {
    return this._productList;
  },
  fetchProductList: function fetchProductList() {
    HttpRequest.get('/api/products').done(function (response) {
      var productArrayJson = JSON.parse(response);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = productArrayJson[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var productJson = _step.value;

          var product = new Product(productJson);
          this._productList.push(product);
          debugger;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.emitChange();
    }.bind(this)).fail(function () {
      console.log(response);
    });
  },
  fetchCategoryList: function fetchCategoryList() {
    HttpRequest.get('/api/products').done(function (response) {
      var productList = JSON.parse(response);
      var categoryList = productList.map(function (item) {
        return item.category;
      });
      categoryList = _.uniq(categoryList);
      this.categoryList = categoryList;
      this.emitChange();
    }.bind(this));
  },

  emitChange: function emitChange() {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  createProduct: function createProduct(product) {
    HttpRequest.post('api/products', product).done(function () {
      document.location = '';
    });
    // todo nice redirect using route
  },

  fetchProduct: function fetchProduct(productId) {
    HttpRequest.get('/api/products/' + productId).done(function (product) {
      product = JSON.parse(product);
      this.productCache[productId] = product;
      ProductStore.emitChange();
    }.bind(this));
  },

  getProductById: function getProductById(productId) {
    if (productId in this.productCache) {
      return this.productCache[productId];
    }
  },

  getCategoryList: function getCategoryList() {
    return this.categoryList;
  }
});

AppDispatcher.register(function (action) {
  switch (action.actionType) {
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

module.exports = ProductStore;