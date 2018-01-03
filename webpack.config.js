var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var htmlWebpackPlugin = require("html-webpack-plugin")

var extractCSS = new ExtractTextPlugin('css/[name].css');
var extractSCSS = new ExtractTextPlugin('css/[name].css');

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
    'action1': ['./src/page/action1/index.js'],

  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist',
    filename: 'js/[name].js'
  },
  module: {
    loaders: [
      // {
      //   test: /\.string$/,
      //   loader: "html-loader"
      // },
      // { test: /\.js$/,loader: "babel-loader" },
      {
        test: /\.css$/,
        use: extractCSS.extract([ 'css-loader', 'postcss-loader' ])
      },
      {
        test: /\.scss$/i,
        use: extractSCSS.extract([ 'css-loader', 'sass-loader' ])
      },
      {
        test: /\.(gif|png|jpg|woff|svg|ttf|eot)\??.*$/,
        loader: 'url-loader?limit=1000&name=resource/[name].[ext]'
      },
      {
        test: /\.(md|string)$/i,
        loader: 'raw-loader'
      }
    ]
  },
  resolve: {
    alias: {
      node_modules: __dirname + '/node_modules',
      util: __dirname + '/src/util',
      page: __dirname + '/src/page',
      image: __dirname + '/src/image',
    }
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
      filename: 'js/base.js'
    }),
    extractCSS,
    extractSCSS,
    new htmlWebpackPlugin(getHtmlConfig('index', '目录')),
    new htmlWebpackPlugin(getHtmlConfig('action1', '一道光闪过')),
  ],
}
if ('dev' === WEBPACK_ENV) {
  config.entry.common.push('webpack-dev-server/client?http://localhost:8082/')
}

module.exports = config
