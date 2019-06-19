const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  module: {
    rules: [
      // JavaScript/JSX Files
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        plugins: [
          '@babel/plugin-proposal-class-properties',
        ],
        presets:[
          '@babel/preset-env',
          '@babel/preset-react'
        ],
      },
    },
      // CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // SCSS Files
      {
      test: /\.scss$/,
      exclude: /(node_modules|bower_components)/,
      use: ['style-loader', 
      'css-loader',
      {
        loader: 'postcss',
        options: {
          plugins: [autoprefixer({ overrideBroswerslist: ['> 1%', 'last 2 versions'] })],
        },
        },'sass-loader'],
      },
      // Image files
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: 'file-loader'
    },
  
    ],
  },
   // use a template to create a index.html for builds
   plugins: [
    new htmlWebpackPlugin(
      {
        template: 'index.html'
      }
    ),
    new webpack.HotModuleReplacementPlugin()
  ]
};
