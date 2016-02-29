'use strict';

var React = require('react');

var Header = React.createClass({
  displayName: 'Header',
  render: function render() {
    return React.createElement('div', { className: 'sixteen columns' });
  }
});

module.exports = Header;