'use strict';

var React = require('react');
var Header = require('../components/Header.react');
var Categories = require('../components/Categories.react');
var ProductList = require('../components/ProductList.react');
var CreateProduct = require('../components/CreateProduct.react');
var Footer = require('../components/Footer.react');
var Title = require('../components/Title.react');

var Application = React.createClass({
  displayName: 'Application',

  getInitialState: function getInitialState() {
    return {};
  },

  componentDidMount: function componentDidMount() {},

  componentWillUnmount: function componentWillUnmount() {},

  /**
   * Event handler for 'change' events coming from the ProductStore
   */
  _onChange: function _onChange() {
    this.setState({});
  },

  /**
   * @return {object}
   */
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(Header, null),
      React.createElement(Title, null),
      React.createElement(Categories, null),
      this.props.children,
      React.createElement(Footer, null)
    );
  }
});

module.exports = Application;