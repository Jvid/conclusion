require('page/common/_common.js');
require('./index.scss');

var mdStr = require('./index.md');
var $ = require('jquery');
var _public = require('util/method/public.js');

var page = {
	init: function() {
    $('.code').html(_public.marked(mdStr));
    this.createLoading();
  },
  createLoading: function() {
  	var str = '<div class="loading7-wrap"></div>'
    //效果一
    for(var i=1;i<34;i++){
        var stl = 'width:'+(200-i*2)+'px;height:'+(200-i*2)+'px;'+'border-top:3px solid rgba(0,0,0,'+  ((1-33*0.03)+i*0.03) +');animation: round 2s ease-out '+ ((0.015*33) - i*0.015) +'s infinite;'
        str += ' <div class="inner" style="'+  stl +'"></div>'
    }
    $('.loading7').html(str)

    var str1 = '<div class="loading8-wrap"></div>'
     for(var j=1;j<34;j++){
        var stl1 = 'width:'+(200-j*2)+'px;height:'+(200-j*2)+'px;'+'border-top:3px solid rgba(0,0,0,'+  (1-j*0.03) +');animation: round 2s ease-out '+ (j*0.015) +'s infinite;'
        str1 += ' <div class="inner" style="'+  stl1 +'"></div>'
    }
    $('.loading8').html(str1)
  }
}

page.init();
