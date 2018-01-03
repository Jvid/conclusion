require('./index.scss');
require('page/common/code-block/index.js');
require('page/common/footer/index.js');
require('page/common/header/index.js');
var $ = require('jquery');
var _public = require('util/method/public.js')

var mdStr = require('./index.md');

var page = {
    init: function(){
        $('.code').html(_public.marked(mdStr));
        this.bindEvent();
    },
    bindEvent: function(){
        $('.code-title').on('click',function(){
            $('.code-wrap').hasClass('active') ? $('.code-wrap').removeClass('active').find('.code-show').height(0) : $('.code-wrap').addClass('active').find('.code-show').height($('.code-wrap').find('.code').height()+40);
        })
    }
}

page.init();