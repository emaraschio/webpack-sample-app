const webpack = require('webpack')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS = new ExtractTextPlugin('[name].bundle.css')

const config = {
  context: __dirname + '/src',
  entry: {
    app: './app.js',
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      include: __dirname + '/src',
      loader: extractCSS.extract(['css-loader','sass-loader'])
    }, {
      test: /\.js$/,
      include: __dirname + '/src',
      use: [{
        loader: 'babel-loader',
        options: { presets: ['es2015'] }
      }]
    }]
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    extractCSS
  ]
}

module.exports = config;
