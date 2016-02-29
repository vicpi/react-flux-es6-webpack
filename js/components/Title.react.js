'use strict';

import React from 'react';
import {Link} from 'react-router';

class Title extends React.Component {
  render () {
    return (
      <div className="sixteen columns">
        <h1 className="bold-header"><Link className="header" to="product-list">products</Link> </h1>
      </div>
    );
  }
}

export default Title;