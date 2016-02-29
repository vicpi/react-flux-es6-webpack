'use strict';

import React from 'react';
import {Link} from 'react-router';
import ProductStore from '../stores/ProductStore';
import ProductEvents from '../events/ProductEvents';
import ProductActions from '../actions/ProductActions';
import AppDispatcher from '../dispatcher/AppDispatcher';

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {categoryCollection: []};
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount () {
    ProductStore.addChangeListener(this.onChange);
    ProductActions.fetchCategoryList();
  }

  componentWillUnmount () {
    ProductStore.removeChangeListener(this.onChange);
  }

  onChange () {
      this.setState({
        categoryCollection: ProductStore.getCategoryList()
      });
  }

  renderLi () {
    var liList = this.state.categoryCollection.map(function (item) {
      return (
        <li key="item"><a href="/">{item}</a></li>
      );
    });

    return liList;
  }

  render () {
    return (
      <div className="three columns">
        <h4 id="logo">My categories</h4>
        <nav>
          <ul>
            {this.renderLi()}
          </ul>
          <hr />
          <Link to="category-create">New category</Link>
        </nav>
      </div>
    );
  }
}

Categories.state = {categoryCollection: []};

export default Categories;
