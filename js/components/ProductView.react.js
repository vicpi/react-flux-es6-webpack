'use strict';

import React from 'react';
import ProductStore from '../stores/ProductStore';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ProductEvents from '../events/ProductEvents';
import ProductActions from '../actions/ProductActions';

class ProductView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {product: {}};
    this.onChange = this.onChange.bind(this);
  }
  componentDidMount () {
    ProductStore.addChangeListener(this.onChange);
    ProductActions.fetchProductById(this.props.params.productId);
  }

  componentWillUnmount () {
    ProductStore.removeChangeListener(this.onChange);
  }

  onChange () {
    this.setState({product: ProductStore.getProductById(this.props.params.productId)});
    console.log(ProductStore.getProductById(this.props.params.productId))
  }

  render () {
    if (!this.state.product) {
      return (<div></div>);
    }
    return (
      <div className="thirteen columns content-area">
        <form id="form-product-create" className="note">
          <label htmlFor="name">Name</label>
          <input type="text" value={this.state.product.name} id="name" />
          <label htmlFor="brand">Brand</label>
          <input type="text" value={this.state.product.brand} id="brand" />
          <label htmlFor="color">Color</label>
          <input type="text" value={this.state.product.color} id="color" />
          <label htmlFor="size">Size</label>
          <input type="text" value={this.state.product.size} id="size" />
          <label htmlFor="price">Price</label>
          <input type="text" value={this.state.product.price} id="price" />
          <label htmlFor="category">Category</label>
          <input type="text" value={this.state.product.category} id="category" />
        </form>
      </div>
    );
  }
}

ProductView.state = {product: {}};

export default ProductView;