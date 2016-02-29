'use strict';

import React from 'react';
import Header from '../components/Header.react';
import Categories from '../components/Categories.react';
import ProductList from '../components/ProductList.react';
import CreateProduct from '../components/CreateProduct.react';
import Footer from '../components/Footer.react';
import Title from '../components/Title.react';

class Application extends React.Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  /**
   * Event handler for 'change' events coming from the ProductStore
   */
  onChange() {
    this.setState({});
  }

  /**
   * @return {object}
   */
  render() {
    return (
    <div>
      <Header />
      <Title />
      <Categories />
      {this.props.children}
      <Footer />
    </div>
    );
  }
}

Application.state = {};
export default Application;
