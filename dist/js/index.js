webpackJsonp([4],{16:function(n,i,t){n.exports=t(17)},17:function(n,i,t){t(6),t(7),t(20);var a=t(0),e=t(21),o=t(22),c=t(8);({init:function(){var n=c.doTFn(o,e);a(".list").html(n)}}).init()},20:function(n,i){},21:function(n,i){var t=[{name:"一道光闪过",action:"action1.html",guide:""},{name:"加减题目",action:"action2.html",guide:""},{name:"CSS3 loading",action:"action3.html",guide:""},{name:"hover效果",action:"action4.html",guide:""},{name:"哈哈哈哈哈哈哈哈哈哈",action:"index.html",guide:""}],a=function(n){for(var i=n.length,t=118-i<0?0:(118-i)%2==0?118-i:118-i-1,a="",e=0;e<t;e++)a+=e%2==0?" ":"-";return a};t.forEach(function(n,i){n.guide=a(n.name)}),n.exports=t},22:function(n,i){n.exports='{{~it:value:index}}\n\t<li class="list-item"><a href="./{{=value.action}}">{{=value.name}}&nbsp;<span class="right-guide">{{=value.guide}}&nbsp;&nbsp;{{=index+1}}<span/></a></li>\n\t<li></li>\n{{~}}'}},[16]);