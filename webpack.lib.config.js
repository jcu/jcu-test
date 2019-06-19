const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');


const VENDER_LIBS = [
  'react', 'react-dom','react-router-dom'
]

function config(env) {
  const packageName = 'jcudate';

  return {
    entry: { 
      path: path.resolve(__dirname, `./packages/${packageName}/src/index.js`),
      vendor: VENDER_LIBS
    },
    output: {
      path: path.resolve(__dirname, `./packages/${packageName}/dist/`),
      filename: '[name].[hash].js',
    },
      optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
      },
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
    }
  };
}

module.exports = config;
