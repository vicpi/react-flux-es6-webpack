'use strict';

var React = require('react');
var RouterModule = require('react-router');
var ProductStore = require('../stores/ProductStore');
var ProductEvents = require('../events/ProductEvents');
var ProductActions = require('../actions/ProductActions');
var Link = RouterModule.Link;
var AppDispatcher = require('../dispatcher/AppDispatcher');

var Categories = React.createClass({
  displayName: 'Categories',
  getInitialState: function getInitialState() {
    return {
      categoryCollection: []
    };
  },
  componentDidMount: function componentDidMount() {
    ProductStore.addChangeListener(this.onChange);
    ProductActions.fetchCategoryList();
  },
  componentWillUnmount: function componentWillUnmount() {
    ProductStore.removeChangeListener(this.onChange);
  },
  onChange: function onChange() {
    if (this.isMounted()) {
      this.setState({
        categoryCollection: ProductStore.getCategoryList()
      });
    }
  },
  renderLi: function renderLi() {
    var liList = this.state.categoryCollection.map(function (item) {
      return React.createElement(
        'li',
        null,
        React.createElement(
          'a',
          { href: '/' },
          item
        )
      );
    });

    return liList;
  },
  render: function render() {
    return React.createElement(
      'div',
      { className: 'three columns' },
      React.createElement(
        'h4',
        { id: 'logo' },
        'My categories'
      ),
      React.createElement(
        'nav',
        null,
        React.createElement(
          'ul',
          null,
          this.renderLi()
        ),
        React.createElement('hr', null),
        React.createElement(
          Link,
          { to: 'category-create' },
          'New category'
        )
      )
    );
  }
});

module.exports = Categories;