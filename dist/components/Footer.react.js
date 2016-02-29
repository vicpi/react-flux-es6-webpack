'use strict';

var React = require('react');

var Footer = React.createClass({
  displayName: 'Footer',
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement('hr', { className: 'footer' }),
      React.createElement(
        'div',
        { className: 'footer' },
        React.createElement(
          'div',
          null,
          'Products: ',
          React.createElement(
            'strong',
            null,
            'React'
          ),
          ' application'
        )
      )
    );
  }
});

module.exports = Footer;