'use strict';

var AppDispatcher = require('../dispatcher/AppDispatcher');
var ProductEvents = require('../events/ProductEvents');

var ProductActions = {
  fetchCategoryList: function fetchCategoryList() {
    AppDispatcher.dispatch({
      actionType: ProductEvents.CATEGORY_LIST_FETCH
    });
  },
  fetchProductById: function fetchProductById(productId) {
    AppDispatcher.dispatch({
      actionType: ProductEvents.PRODUCT_FETCH,
      productId: productId
    });
  },
  createProductOnServer: function createProductOnServer(product) {
    AppDispatcher.dispatch({
      actionType: ProductEvents.PRODUCT_NEW,
      product: product
    });
  },
  fetchProductList: function fetchProductList() {
    AppDispatcher.dispatch({
      actionType: ProductEvents.PRODUCT_LIST_FETCH
    });
  }
};

module.exports = ProductActions;