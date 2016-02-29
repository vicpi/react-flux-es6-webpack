'use strict';

var React = require('react');
var RouterModule = require('react-router');
var Link = RouterModule.Link;

var Title = React.createClass({
  displayName: 'Title',
  render: function render() {
    return React.createElement(
      'div',
      { className: 'sixteen columns' },
      React.createElement(
        'h1',
        { className: 'bold-header' },
        React.createElement(
          Link,
          { className: 'header', to: 'product-list' },
          'products'
        ),
        ' '
      )
    );
  }
});

module.exports = Title;