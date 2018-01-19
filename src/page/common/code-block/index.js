require('./index.scss')
var $ = require('jquery')

var page = {
	init: function() {
		$('.code-title').on('click',function(){
        $('.code-wrap').hasClass('active') ? $('.code-wrap').removeClass('active').find('.code-show').height(0) : $('.code-wrap').addClass('active').find('.code-show').height($('.code-wrap').find('.code').height()+40);
    })
	}
}

page.init()