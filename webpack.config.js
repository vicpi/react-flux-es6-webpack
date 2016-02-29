var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: __dirname + '/js/app.js',
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /js\/.*.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
