var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var ExtractCSS = new ExtractTextPlugin('[name].bundle.css')
var WebpackCleanupPlugin = require('webpack-cleanup-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
      loader: ExtractCSS.extract(['css-loader','sass-loader'])
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
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    ExtractCSS,
    new HtmlWebpackPlugin({
      template: './index.html'
    }),
    new webpack.optimize.DedupePlugin()
  ]
}

module.exports = config;
