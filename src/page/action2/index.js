require('page/common/_common.js');
require('./index.scss');
var $ = require('jquery');
var _public = require('util/method/public.js')

var mdStr = require('./index.md');

var page = {
    init: function(){
        $('.code').html(_public.marked(mdStr));
        this.bindEvent();
    },
    bindEvent: function(){
        var maxNumDom = document.getElementById('maxNum');
				var questionNumDom = document.getElementById('questionNum');
				var btn = document.getElementById('btn');
				var displayWrap = document.getElementById('displayWrap');

				var symbols = ['+','-']
				var maxNum = 0;
				var questionNum = 0;
				var questionStr = '';
				
				var checkResult = function () {
					var liList = document.getElementsByClassName('questionWrap');
					var total = liList.length;
					var len = liList.length;
					var tempLi;
					for(var j=0;j<len;j++){
						tempLi = liList[j];
						//如果答案不正确  将正确答案显示出来
						if(tempLi.getElementsByClassName('res')[0].value != tempLi.dataset.res){
							// 给不正确的添加wrong类名
							tempLi.getElementsByClassName('qid')[0].classList.add('wrong')
							// 将正确答案显示出来
							tempLi.getElementsByClassName('rightRes')[0].style.display = 'inline-block'
						}
					}
					var totalWrong = document.getElementsByClassName('wrong').length;
					var totalRight = total - totalWrong;
					// 将正确的题目数 和错误的题目数 放入标签中
					document.getElementsByClassName('rightNum')[0].getElementsByTagName('i')[0].innerText = (totalRight);
					document.getElementsByClassName('wrongNum')[0].getElementsByTagName('i')[0].innerText = (totalWrong);
					// 让显示答案的部分 展现出来
					document.getElementsByClassName('_result')[0].style.display = 'block';
				}

				var createQuestion = function (maxNum,n) {
					var num1 = parseInt(Math.random()*maxNum+1)
					var num2 = parseInt(Math.random()*maxNum+1)
					var curSymbol = symbols[parseInt(Math.random()*2)]

					if(curSymbol == '-'){
						// 将正确答案保存在data-res中 为接下判断用
						// 如果第一个数小于第二个数执行后面的  三木运算   a ? 1 : 2; 如果a正确就是1 不正确就是 2 
						// 如果 num1 < num2 的话返回'<li data-res="'+ (num2 - num1) +'" class="questionWrap"><span class="qid">第'+ (n+1) +'题  </span>'+num2+curSymbol+num1+'= <input class="res" type="number"/><span class="rightRes">'+ (num2 - num1) +'</span></li>'
						// 如果 num1>num2 返回'<li data-res="'+ (num1 - num2) +'" class="questionWrap"><span class="qid">第'+ (n+1) +'题  </span>'+num1+curSymbol+num2+'= <input class="res" type="number"/><span class="rightRes">'+ (num1 - num2) +'</span></li>'
						return num1 < num2 ? '<li data-res="'+ (num2 - num1) +'" class="questionWrap"><span class="qid">第'+ (n+1) +'题  </span>'+num2+curSymbol+num1+'= <input class="res" type="number"/><span class="rightRes">'+ (num2 - num1) +'</span></li>' : '<li data-res="'+ (num1 - num2) +'" class="questionWrap"><span class="qid">第'+ (n+1) +'题  </span>'+num1+curSymbol+num2+'= <input class="res" type="number"/><span class="rightRes">'+ (num1 - num2) +'</span></li>';
					}else{
						return '<li data-res="'+ (num1 + num2) +'" class="questionWrap"><span class="qid">第'+ (n+1) +'题  </span>'+num1+curSymbol+num2+'= <input class="res" type="number"/><span class="rightRes">'+ (num1 + num2) +'</span></li>';
					}
				}

				btn.onclick = function() {
					//如果没有输入 默认给一个0
					maxNum = maxNumDom.value || 0;
					questionNum = questionNumDom.value || 0;
					// 如果没有输入范围 和 题目数 直接退出函数
					if(maxNum == 0 || questionNum == 0){
						return
					}

					displayWrap.innerHTML = '';
					questionStr = '<div class="_result"><span class="rightNum">答对<i>10</i>道</span><span class="wrongNum">答错<i>10</i>道</span></div><ul id="wrap">';
					for(var i=0;i<questionNum;i++){
						//判断 是否有重复的题目， indexOf 如果有一样的字符串返回当前的位置大于0 没有一样的字符串返回-1
						if(questionStr.indexOf(createQuestion(maxNum,i)) > 0){
							--i;
						}else{
							questionStr += createQuestion(maxNum,i);
						}
					}
					questionStr += '</ul><div class="submitBtn">提交</div>';
					//将生成的题目插入到标签中
					displayWrap.innerHTML = questionStr;
					// 将输入框的值设置为默认0
					maxNumDom.value = 0;
					questionNumDom.value = 0;
					// 获取提交答案的问卷
					var submitBtn = document.getElementsByClassName('submitBtn')[0];
					// 点击提交执行 判断答案的函数
					submitBtn.onclick = checkResult;
				}
    }
}

page.init();