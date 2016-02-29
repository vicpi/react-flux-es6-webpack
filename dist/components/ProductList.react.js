'use strict';

var React = require('react');
var HttpRequest = require('../services/HttpRequest');
var ProductEvents = require('../events/ProductEvents');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var Product = require('../models/Product.js');
var ProductStore = require('../stores/ProductStore');
var ProductActions = require('../actions/ProductActions');
var RouterModule = require('react-router');
var Link = RouterModule.Link;

var ProductList = React.createClass({
  displayName: 'ProductList',
  getInitialState: function getInitialState() {
    return {
      productCollection: []
    };
  },
  componentDidMount: function componentDidMount() {
    ProductStore.addChangeListener(this.onChange);
    ProductActions.fetchProductList();
  },
  componentWillUnmount: function componentWillUnmount() {
    console.log('ProductList ComponentWillUnmount');
  },
  componentWillReceiveProps: function componentWillReceiveProps() {
    console.log('ProductList ComponentWillReceiveProps');
  },
  renderProducts: function renderProducts() {
    var uiProductCollection = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = this.state.productCollection[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var product = _step.value;

        uiProductCollection.push(React.createElement(
          'tr',
          { key: product.id, 'data-key': product.id },
          React.createElement(
            'td',
            null,
            React.createElement(
              Link,
              { to: 'product-view/' + product.id },
              product.name
            )
          ),
          React.createElement(
            'td',
            { className: 'category' },
            React.createElement(
              'a',
              { href: '#' },
              product.category
            )
          ),
          React.createElement(
            'td',
            { className: 'hidden-text date' },
            product.price
          )
        ));
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

    return React.createElement(
      'table',
      { className: 'notes' },
      React.createElement(
        'tbody',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            { className: 'note' },
            'Product ',
            React.createElement(
              'a',
              { href: '#', className: 'sort_arrow' },
              '↑'
            ),
            React.createElement(
              'a',
              { href: '#', className: 'sort_arrow' },
              '↓'
            )
          ),
          React.createElement(
            'th',
            null,
            'Category'
          ),
          React.createElement(
            'th',
            { className: 'date' },
            'Price ',
            React.createElement(
              'a',
              { href: '#', className: 'sort_arrow' },
              '↑'
            ),
            React.createElement(
              'a',
              { href: '#', className: 'sort_arrow' },
              '↓'
            )
          )
        ),
        uiProductCollection
      )
    );
  },
  onChange: function onChange() {
    if (this.isMounted()) {
      this.setState({
        productCollection: ProductStore.getProductList()
      });
    }
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'thirteen columns content-area' },
      this.renderProducts(),
      React.createElement(
        Link,
        { to: 'product-create', className: 'button' },
        'New product'
      )
    );
  }
});

module.exports = ProductList;