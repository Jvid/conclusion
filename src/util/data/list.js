var list = [
	{
		name: '一道光闪过',
		action: 'action1.html'
	},
	{
		name: '哈哈哈哈哈哈哈哈哈哈',
		action: 'index.html'
	}
]
var addStr = function(name){
	var curLen = name.length;
	var len= (108-curLen) < 0 ? 0 : ((108-curLen) % 2 == 0 ? (108-curLen) : (108-curLen) - 1);
	console.log(len)
	var str = '';
	for(var i=0;i<len;i++){
	 str +=	(i % 2 == 0) ? ' ' : '-'
	}
	return name + str 
}
list.forEach(function(val,ind) {
	val.name = addStr(val.name);
})

module.exports = list;