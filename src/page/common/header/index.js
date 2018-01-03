require('./index.scss');
var $ = require('jquery')

var page = {
	init:function(){
		var a = $('title').text().substring(8);
		a !='目录' && $('.breadcrumbs').append($('<li>'+ a +'</li>'));
	}
}
page.init()
// module.exports = a