var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractCSS = new ExtractTextPlugin('[name].bundle.css');
var DashboardPlugin = require('webpack-dashboard/plugin');

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
    rules: [
      {
        test: /\.scss$/,
        include: __dirname + '/src',
        loader: ExtractCSS.extract(['css-loader','sass-loader'])
      }, 
      {
        test: /\.js$/,
        include: __dirname + '/src',
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015'] }
        }]
      }
    ]
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new DashboardPlugin(),
    ExtractCSS
  ]
}

module.exports = config;
