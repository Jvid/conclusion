require('page/common/_common.js');
require('./index.scss');
var $ = require('jquery');
var _public = require('util/method/public.js')

var mdStr = require('./index.md');

var page = {
    init: function() {
        $('.code').html(_public.marked(mdStr));
    }
}

page.init();