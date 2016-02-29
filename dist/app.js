'use strict';

var React = require('react');
var RouterModule = require('react-router');
var routes = require('./routes.js');
var Router = RouterModule.Router;

React.render(React.createElement(
  Router,
  null,
  routes
), document.getElementById('productsapp'));