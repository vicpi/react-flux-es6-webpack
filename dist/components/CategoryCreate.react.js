'use strict';

var React = require('react');

var CategoryCreate = React.createClass({
  displayName: 'CategoryCreate',
  render: function render() {
    return React.createElement(
      'div',
      { className: 'thirteen columns content-area' },
      React.createElement(
        'form',
        { className: 'pad' },
        React.createElement(
          'label',
          { htmlFor: 'name' },
          'Name'
        ),
        React.createElement('input', { type: 'text', id: 'name' }),
        React.createElement('input', { type: 'submit', value: 'Save' })
      )
    );
  }
});

module.exports = CategoryCreate;