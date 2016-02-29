'use strict';

var React = require('react');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var ProductStore = require('../stores/ProductStore');
var ProductEvents = require('../events/ProductEvents');
var ProductActions = require('../actions/ProductActions');

var CreateProduct = React.createClass({
  displayName: 'CreateProduct',
  getInitialState: function getInitialState() {
    return {
      categoryList: []
    };
  },
  componentDidMount: function componentDidMount() {
    ProductActions.fetchCategoryList();
    ProductStore.addChangeListener(this.onChange);
  },
  componentWillUnmount: function componentWillUnmount() {
    ProductStore.removeChangeListener(this.onChange);
  },
  onChange: function onChange() {
    this.setState({
      categoryList: ProductStore.getCategoryList()
    });
  },
  clickSaveButton: function clickSaveButton() {
    var form = document.getElementById('form-product-create');
    var name = form.querySelector('#name').value;
    var brand = form.querySelector('#brand').value;
    var color = form.querySelector('#color').value;
    var size = form.querySelector('#size').value;
    var price = form.querySelector('#price').value;
    var category = form.querySelector('#category').value;
    var product = {
      name: name, brand: brand, color: color, size: size, priceInCents: price, category: category
    };
    ProductActions.createProductOnServer(product);
  },
  renderCategorySelect: function renderCategorySelect() {
    var categoryList = this.state.categoryList;
    var categories = categoryList.map(function (category) {
      return React.createElement(
        'option',
        { value: category },
        category
      );
    });

    return categories;
  },
  render: function render() {
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
        React.createElement('input', { type: 'text', id: 'name' }),
        React.createElement(
          'label',
          { htmlFor: 'brand' },
          'Brand'
        ),
        React.createElement('input', { type: 'text', id: 'brand' }),
        React.createElement(
          'label',
          { htmlFor: 'color' },
          'Color'
        ),
        React.createElement('input', { type: 'text', id: 'color' }),
        React.createElement(
          'label',
          { htmlFor: 'size' },
          'Size'
        ),
        React.createElement('input', { type: 'text', id: 'size' }),
        React.createElement(
          'label',
          { htmlFor: 'price' },
          'Price'
        ),
        React.createElement('input', { type: 'text', id: 'price' }),
        React.createElement(
          'label',
          { htmlFor: 'list' },
          'Category'
        ),
        React.createElement(
          'select',
          { id: 'category' },
          this.renderCategorySelect()
        ),
        React.createElement('input', { type: 'button', onClick: this.clickSaveButton, value: 'Save' })
      )
    );
  }
});

module.exports = CreateProduct;