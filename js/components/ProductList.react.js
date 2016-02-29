'use strict';

import React from 'react';
import HttpRequest from '../services/HttpRequest';
import ProductEvents from '../events/ProductEvents';
import AppDispatcher from '../dispatcher/AppDispatcher';
import Product from '../models/Product.js';
import ProductStore from '../stores/ProductStore';
import ProductActions from '../actions/ProductActions';
import {Link} from 'react-router';

class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {productCollection: []};
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    ProductStore.addChangeListener(this.onChange);
    ProductActions.fetchProductList();
  }

  componentWillUnmount () {
    console.log('ProductList ComponentWillUnmount');
  }

  componentWillReceiveProps () {
    console.log('ProductList ComponentWillReceiveProps');
  }

  renderProducts () {
    var uiProductCollection = [];
    for (let product of this.state.productCollection) {
      uiProductCollection.push(
        <tr key={product.id} data-key={product.id}>
          <td><Link to={'product-view/' + product.id}>{product.name}</Link></td>
          <td className="category"><a href="#">{product.category}</a></td>
          <td className="hidden-text date">{product.price}</td>
        </tr>
      );
    }

    return (
      <table className="notes">
        <tbody>
          <tr>
            <th className="note">Product <a href="#" className="sort_arrow" >&uarr;</a><a href="#" className="sort_arrow" >&darr;</a></th>
            <th>Category</th>
            <th className="date">Price <a href="#" className="sort_arrow" >&uarr;</a><a href="#" className="sort_arrow" >&darr;</a></th>
          </tr>
          {uiProductCollection}
        </tbody>
      </table>
    );
  }

  onChange () {
      this.setState({
        productCollection: ProductStore.getProductList()
      });
  }

  render () {
    return (
      <div className="thirteen columns content-area">
        {this.renderProducts()}
        <Link to="product-create" className="button">New product</Link>
      </div>
    );
  }
}

ProductList.state = {productCollection: []};

export default ProductList;
