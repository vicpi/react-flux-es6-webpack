'use strict';

import React from 'react';
import {Router} from 'react-router';
import routes from './routes.js';

React.render(
  <Router>{routes}</Router>,
  document.getElementById('productsapp')
);
