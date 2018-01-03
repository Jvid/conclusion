var marked = require('marked');
var doT = require('doT');


var _public = {
	marked:function(mdStr){
		var rendererMD = new marked.Renderer();
	  marked.setOptions({
	    renderer: rendererMD,
	    gfm: true,
	    tables: true,
	    breaks: false,
	    pedantic: false,
	    sanitize: false,
	    smartLists: true,
	    smartypants: false
	  });//基本设置

		marked.setOptions({
			highlight: function (code) {
				return hljs.highlightAuto(code).value;
			}
		});
		return marked(mdStr)
	},
	doTFn: function(str,obj){
		var tfn =  doT.template(str);
		return tfn(obj);
	}
}
module.exports = _public