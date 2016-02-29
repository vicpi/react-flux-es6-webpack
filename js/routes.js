'use strict';

import React from 'react';
import {Route} from 'react-router';
import Application from './components/Application.react';
import CategoryCreate from './components/CategoryCreate.react';
import ProductView from './components/ProductView.react';
import CreateProduct from './components/CreateProduct.react';
import ProductList from './components/ProductList.react';

//var Route = RouterModule.Route;

var routes = (
  <Route  component={Application}>
    <Route path="product-create" component={CreateProduct} />
    <Route path="product-list" component={ProductList} />
    <Route path="category-create" component={CategoryCreate} />
    <Route path="product-view/:productId" component={ProductView} />
    <Route path="/" component={ProductList} />
  </Route>
);

export default routes;
