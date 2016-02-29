'use strict';

var React = require('react');
var ProductStore = require('../stores/ProductStore');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var ProductEvents = require('../events/ProductEvents');
var ProductActions = require('../actions/ProductActions');

var ProductView = React.createClass({
  displayName: 'ProductView',
  getInitialState: function getInitialState() {
    return {
      product: {}
    };
  },
  componentDidMount: function componentDidMount() {
    ProductStore.addChangeListener(this.onChange);
    ProductActions.fetchProductById(this.props.params.productId);
  },
  componentWillUnmount: function componentWillUnmount() {
    ProductStore.removeChangeListener(this.onChange);
  },
  onChange: function onChange() {
    this.setState({ product: ProductStore.getProductById(this.props.params.productId) });
    console.log(ProductStore.getProductById(this.props.params.productId));
  },
  render: function render() {
    if (!this.state.product) {
      return React.createElement('div', null);
    }
    return React.createElement(
      'div',
      { className: 'thirteen columns content-area' },
      React.createElement(
        'form',
        { id: 'form-product-create', className: 'note' },
        React.createElement(
          'label',
          { htmlFor: 'name' },
          'Name'
        ),
        React.createElement('input', { type: 'text', value: this.state.product.name, id: 'name' }),
        React.createElement(
          'label',
          { htmlFor: 'brand' },
          'Brand'
        ),
        React.createElement('input', { type: 'text', value: this.state.product.brand, id: 'brand' }),
        React.createElement(
          'label',
          { htmlFor: 'color' },
          'Color'
        ),
        React.createElement('input', { type: 'text', value: this.state.product.color, id: 'color' }),
        React.createElement(
          'label',
          { htmlFor: 'size' },
          'Size'
        ),
        React.createElement('input', { type: 'text', value: this.state.product.size, id: 'size' }),
        React.createElement(
          'label',
          { htmlFor: 'price' },
          'Price'
        ),
        React.createElement('input', { type: 'text', value: this.state.product.price, id: 'price' }),
        React.createElement(
          'label',
          { htmlFor: 'category' },
          'Category'
        ),
        React.createElement('input', { type: 'text', value: this.state.product.category, id: 'category' })
      )
    );
  }
});

module.exports = ProductView;