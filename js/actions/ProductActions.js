'use strict';

import AppDispatcher from '../dispatcher/AppDispatcher';
import ProductEvents from '../events/ProductEvents';

let ProductActions = {
  fetchCategoryList () {
    AppDispatcher.dispatch({
      actionType: ProductEvents.CATEGORY_LIST_FETCH
    });
  },

  fetchProductById (productId) {
    AppDispatcher.dispatch({
      actionType: ProductEvents.PRODUCT_FETCH,
      productId: productId
    });
  },

  createProductOnServer (product) {
    AppDispatcher.dispatch({
      actionType: ProductEvents.PRODUCT_NEW,
      product: product
    });
  },

  fetchProductList () {
    AppDispatcher.dispatch({
      actionType: ProductEvents.PRODUCT_LIST_FETCH
    });
  }
};

export default ProductActions;