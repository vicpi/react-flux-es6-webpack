'use strict';

import React from 'react';

class CategoryCreate extends React.Component {
  render () {
    return (
      <div className="thirteen columns content-area">
        <form className="pad">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default CategoryCreate;
