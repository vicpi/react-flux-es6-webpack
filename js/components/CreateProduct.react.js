'use strict';

import React from 'react';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ProductStore from '../stores/ProductStore';
import ProductEvents from '../events/ProductEvents';
import ProductActions from '../actions/ProductActions';

class CreateProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {categoryList: []};
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    ProductActions.fetchCategoryList();
    ProductStore.addChangeListener(this.onChange);
  }

  componentWillUnmount () {
    ProductStore.removeChangeListener(this.onChange);
  }

  onChange () {
    this.setState({
      categoryList: ProductStore.getCategoryList()
    });
  }

  clickSaveButton () {
    let form = document.getElementById('form-product-create');
    let name = form.querySelector('#name').value;
    let brand = form.querySelector('#brand').value;
    let color = form.querySelector('#color').value;
    let size = form.querySelector('#size').value;
    let price = form.querySelector('#price').value;
    let category = form.querySelector('#category').value;
    let product = {
      name, brand, color, size, priceInCents: price, category
    };
    ProductActions.createProductOnServer(product);
  }

  renderCategorySelect () {
    let categoryList = this.state.categoryList;
    let categories = categoryList.map(function (category) {
      return (
        <option value={category}>{category}</option>
      );
    });

    return categories;
  }

  render () {
    return (
      <div className="thirteen columns content-area">
        <form id="form-product-create" className="note">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="brand">Brand</label>
          <input type="text" id="brand" />
          <label htmlFor="color">Color</label>
          <input type="text" id="color" />
          <label htmlFor="size">Size</label>
          <input type="text" id="size" />
          <label htmlFor="price">Price</label>
          <input type="text" id="price" />
          <label htmlFor="list">Category</label>
          <select id="category">
            {this.renderCategorySelect()}
          </select>
          <input type="button" onClick={this.clickSaveButton} value="Save" />
        </form>
      </div>
    );
  }
}

CreateProduct.state = {categoryList: []};

export default CreateProduct;