require('page/common/footer/index.js');
require('page/common/header/index.js');
require('./index.scss');
var $ = require('jquery');
var list = require('util/data/list.js');
var template = require('./list.string');
var _public = require('util/method/public');

var page = {
	init: function(){
		var listHtml =	_public.doTFn(template,list);
		$(".list").html(listHtml);
	}
}
page.init();