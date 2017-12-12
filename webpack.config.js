var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var htmlWebpackPlugin = require("html-webpack-plugin")

//环境变量的配置   online / dev
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev'

var getHtmlConfig = function (name, title) {
  return {
    template: './src/view/' + name + '.html',
    filename: 'view/' + name + '.html',
    title: title,
    inject: true,
    hash: true,
    chunks: ['common', name]
  }
}

var config = {
  entry: {
    'common': ['./src/page/common/index.js'],
    'index': ['./src/page/index/index.js'],

  },
  output: {
    path: './dist',
    publicPath: '/dist',
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.string$/,
        loader: "html-loader"
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style", 'css!sass')
      },
      {
        test: /\.(gif|png|jpg|woff|svg|ttf|eot)\??.*$/,
        loader: 'url-loader?limit=1000&name=resource/[name].[ext]'
      }
    ]
  },
  resolve: {
    alias: {
      node_modules: __dirname + '/node_modules',
      util: __dirname + '/src/util',
      page: __dirname + '/src/page',
      service: __dirname + '/src/service',
      image: __dirname + '/src/image',
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/base.js'
    }),
    new ExtractTextPlugin("css/[name].css"),
    new htmlWebpackPlugin(getHtmlConfig('index', '目录')),

  ],
}
if ('dev' === WEBPACK_ENV) {
  config.entry.common.push('webpack-dev-server/client?http://localhost:8082/')
}

module.exports = config
