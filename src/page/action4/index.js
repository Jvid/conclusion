require('page/common/_common.js');
require('./index.scss');

var mdStr = require('./index.md');
var $ = require('jquery');
var _public = require('util/method/public.js');

var page = {
	init: function() {
		$('.code').html(_public.marked(mdStr));
	}
}
page.init();
