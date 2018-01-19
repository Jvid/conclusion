var list = [
	{
		name: '一道光闪过',
		action: 'action1.html',
		guide: ''
	},
	{
		name: '加减题目',
		action: 'action2.html',
		guide: ''
	},
	{
		name: 'CSS3 loading',
		action: 'action3.html',
		guide: ''
	},
	{
		name: 'hover效果',
		action: 'action4.html',
		guide: ''
	},
	{
		name: '哈哈哈哈哈哈哈哈哈哈',
		action: 'index.html',
		guide: ''
	}
]
var addStr = function(name){
	var curLen = name.length;
	var len= (118-curLen) < 0 ? 0 : ((118-curLen) % 2 == 0 ? (118-curLen) : (118-curLen) - 1);
	var str = '';
	for(var i=0;i<len;i++){
	 str +=	(i % 2 == 0) ? ' ' : '-'
	}
	return str 
}
list.forEach(function(val,ind) {
	val.guide = addStr(val.name);
})

module.exports = list;