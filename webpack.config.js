var path = require('path')
var webpack = require('webpack')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var htmlWebpackPlugin = require("html-webpack-plugin")

var extractCSS = new ExtractTextPlugin('css/[name].css');
var extractSCSS = new ExtractTextPlugin('css/[name].css');

//环境变量的配置   online / dev
var WEBPACK_ENV = process.env.WEBPACK_ENV || 'dev';
//开发和打包时候不同的根目录
var _publicPath = WEBPACK_ENV == 'dev' ? '/dist/':'../'

var getHtmlConfig = function (name, title) {
  return {
    template: path.resolve(__dirname,'./src/view/' + name + '.html'),
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
    'action2': ['./src/page/action2/index.js'],
    'action3': ['./src/page/action3/index.js'],
    'action4': ['./src/page/action4/index.js'],

  },
  output: {
    path: path.resolve(__dirname + '/dist'),
    publicPath: _publicPath,
    filename: 'js/[name].js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.web.js', '.js', '.jsx', '.json']
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
      node_modules: path.resolve(__dirname + '/node_modules'),
      util: path.resolve(__dirname + '/src/util'),
      page: path.resolve(__dirname + '/src/page'),
      image: path.resolve(__dirname + '/src/image'),
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
    new htmlWebpackPlugin(getHtmlConfig('action2', '加减题目')),
    new htmlWebpackPlugin(getHtmlConfig('action3', 'CSS3 loading')),
    new htmlWebpackPlugin(getHtmlConfig('action4', 'hover效果')),

  ],
}
if ('dev' === WEBPACK_ENV) {
  config.entry.common.push('webpack-dev-server/client?http://localhost:8082/')
}

module.exports = config
