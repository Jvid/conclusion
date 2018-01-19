require('./index.scss');
var $ = require('jquery');

var page = {
	init: function() {
		$(document).on('scroll',function(){
			$('html,body').scrollTop() > 300 ? $('.goTop').addClass('active') : $('.goTop').removeClass('active');
		})
		this.bindEvent()
	},
	bindEvent: function() {
		$('.goTop').on('click',function(){
			$('html,body').animate({scrollTop: '0px'}, 500)
		})
	}
}
page.init()
