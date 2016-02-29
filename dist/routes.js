'use strict';

var React = require('react');
var RouterModule = require('react-router');
var Application = require('./components/Application.react');
var CategoryCreate = require('./components/CategoryCreate.react');
var ProductView = require('./components/ProductView.react');
var CreateProduct = require('./components/CreateProduct.react');
var ProductList = require('./components/ProductList.react');

var Route = RouterModule.Route;

var routes = React.createElement(
  Route,
  { component: Application },
  React.createElement(Route, { path: 'product-create', component: CreateProduct }),
  React.createElement(Route, { path: 'product-list', component: ProductList }),
  React.createElement(Route, { path: 'category-create', component: CategoryCreate }),
  React.createElement(Route, { path: 'product-view/:productId', component: ProductView }),
  React.createElement(Route, { path: '/', component: ProductList })
);

module.exports = routes;