[loading1](#1)&nbsp;&nbsp;&nbsp;[loading2](#2)&nbsp;&nbsp;&nbsp;[loading3](#3)&nbsp;&nbsp;&nbsp;[loading4](#4)&nbsp;&nbsp;&nbsp;[loading5](#5)&nbsp;&nbsp;&nbsp;[loading6](#6)&nbsp;&nbsp;&nbsp;[loading7](#7)&nbsp;&nbsp;&nbsp;[loading8](#8)
<br/><br/>
## <a name="1">loading1</a>
___
### html
```html
	<div class="loading-item loading1">
		<div class="loading1-wrap"></div>
		<p class="loading1-text">Loading...</p>
	</div>
```
### css
```css
.loading1{
	position: relative;
}
.loading1-wrap{
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	width: 100px;
	height: 100px;
	border: 3px solid cyan;
	border-right-width: 5px;
	border-bottom-width: 7px;
	border-left-width: 9px;
	border-radius: 50%;
	box-sizing: border-box;
	animation: loading 2s linear infinite;
}
.loading1-text{
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	width: 100px;
	height: 100px;
	text-align: center;
	line-height: 100px;
}
@keyframes loading{
	from{
		transform: rotate(0deg);
	}
	to{
		transform: rotate(360deg);
	}
}
```
<br/><br/>
## <a name="2">loading2</a>
___
### html
```html
<div class="loading-item loading2">
	<div class="loading2-wrap">
		<span>Loading</span>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
		<i></i>
	</div>
</div>
```
```css
	.loading2-wrap{
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			margin: auto;
			width: 150px;
			height: 30px;
			/*text-align: center;*/
			/*line-height: 100px;*/
		}
		span{
			width: 100%;
			height: 100%
		}
		i{
			display: inline-block;
			width: 8px;
			height: 8px;
			border-radius: 50%;
			margin-top: 10px;
			position: absolute;
			left: 65px;
			top: 0;
		}
		i:nth-of-type(1){
			background: rgba(255,0,0,0.5);
			animation: first 1s linear infinite;
			left: 65px;
		}
		i:nth-of-type(2){
			background: rgba(0,255,0,0.5);
			animation: second 1s linear infinite;
			left: 80px;
			top:-5px;
		}
		i:nth-of-type(3){
			background: rgba(0,0,255,0.5);
			animation: third 1s linear infinite;
			left: 95px;
			top: -10px;
		}
		i:nth-of-type(4){
			background: rgba(255,0,0,0.5);
			animation: first 1s linear infinite;
			left: 110px;
		}
		i:nth-of-type(5){
			background: rgba(0,255,0,0.5);
			animation: second 1s linear infinite;
			left: 125px;
			top:-5px;
		}
		i:nth-of-type(6){
			background: rgba(0,0,255,0.5);
			animation: third 1s linear infinite;
			left: 140px;
			top: -10px;
		}
		@keyframes first{
			33%{
				background: rgba(0,0,255,0.5);
				/*transform: scale(1.2);*/
				top: -5px;
			}
			66%{
				background: rgba(0,255,0,0.5);
				/*transform: scale(1.5);*/
				top: -10px;
			}
			100%{
				background: rgba(255,0,0,0.5);
				/*transform: scale(1.2);*/
				top: 0px;
			}
		}
		@keyframes second{
			33%{
				background: rgba(0,255,0,0.5);
				/*transform: scale(1.2);*/
				top: -10px;
			}
			66%{
				background: rgba(255,0,0,0.5);
				/*transform: scale(1.5);*/
				top: 0px;
			}
			100%{
				background: rgba(0,0,255,0.5);
				/*transform: scale(1.2);*/
				top: -5px;
			}
		}
		@keyframes third{
			33%{
				background: rgba(255,0,0,0.5);
				/*transform: scale(1.2);*/
				top: -5px;
			}
			66%{
				background: rgba(0,255,0,0.5);
				/*transform: scale(1.5);*/
				top: 0px;
			}
			100%{
				background: rgba(0,0,255,0.5);
				/*transform: scale(1.2);*/
				top: -10px;
			}
		}
```
<br/><br/>
## <a name="3">loading3</a>
___
### html
```html
<div class="loading-item loading3">
	<div class="loading3-wrap">
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
		<span></span>
	</div>
</div>
```
### css
```css
.loading3-wrap{
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	top: 0;
	margin: auto;
	width: 120px;
	height: 30px;
	/*background: rgba(0,0,0,0.4)*/
}
span{
	display: inline-block;
	position: absolute;
	left: 0;
	top: 0;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background: rgba(255,255,255,.8);
	box-shadow: inset 0 0 7px 5px rgba(0,0,0,0.5);
}
span:nth-of-type(1){
	left: -40px;
	top:-20px;
	animation: firstBall ease-in 1s infinite;
}
span:nth-of-type(2){
	left: 20px;
}
span:nth-of-type(3){
	left: 40px;
}
span:nth-of-type(4){
	left: 60px;
}
span:nth-of-type(5){
	left: 80px;
}
span:nth-of-type(6){
	left: 100px;
	animation: lastBall ease-out 1s infinite;
}
@keyframes firstBall{
	10%{
		left: -24px;
		top: -10px;
	}
	20%{
		left: 0;
		top: 0;
	}
	50%{
		left: 0;
		top: 0;
	}
	75%{
		left: -24px;
		top: -10px;
	}
	100%{
		left: -40px;
		top: -20px;
	}
}
@keyframes lastBall{
	25%{
		left: 124px;
		top: -10px;
	}
	50%{
		left: 140px;
		top: -20px;
	}
	70%{
		left: 124px;
		top: -10px;
	}
	80%{
		left: 100px;
		top: 0;
	}
	100%{
		left: 100px;
		top: 0;
	}
}
```
<br/><br/>
## <a name="4">loading4</a>
___
### html
```html
<div class="loading4-wrap">
	<p><span></span></p>
	<p><span></span></p>
	<p><span></span></p>
	<p><span></span></p>
	<p><span></span></p>
	<p><span></span></p>
	<p><span></span></p>
	<p><span></span></p>
	<p><span></span></p>
	<p><span></span></p>
</div>
```
### css
```css
.loading4-wrap{
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	width: 150px;
	height: 20px;
	margin: auto;
}
p{
	position: absolute;
	width: 150px;
	height: 20px;
	left: 0;
	top: 0;
	/*transform-origin: 0 0;*/
}
span{
	display: block;
	position: absolute;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	/*background: red;*/
	background: rgba(0,0,0,0.4);
	/*box-shadow: */
	left: 0;
	bottom: 0;
	box-shadow: inset 0 0 8px 3px rgba(255,255,255,0.8);
}
p:nth-of-type(1){
	transform: rotate(36deg);
}
p:nth-of-type(1) span{
	transform:scale(.5);
	animation: turns linear 1s infinite;
}
p:nth-of-type(2){
	transform: rotate(72deg);
}
p:nth-of-type(2) span{
	transform:scale(.6);
	animation: turns linear 1s infinite .1s;
}
p:nth-of-type(3){
	transform: rotate(108deg);
}
p:nth-of-type(3) span{
	transform: scale(.7);
	animation: turns linear 1s infinite .2s;
}
p:nth-of-type(4){
	transform: rotate(144deg);
}
p:nth-of-type(4) span{
	transform:scale(.8);
	animation: turns linear 1s infinite .3s;
}
p:nth-of-type(5){
	transform: rotate(180deg);
}
p:nth-of-type(5) span{
	transform: scale(.9);
	animation: turns linear 1s infinite .4s;
}
p:nth-of-type(6){
	transform: rotate(216deg);
}
p:nth-of-type(6) span{
	transform:scale(1);
	animation: turns linear 1s infinite .5s;
}
p:nth-of-type(7){
	transform: rotate(252deg);
}
p:nth-of-type(7) span{
	transform:scale(1.1);
	animation: turns linear 1s infinite .6s;
}
p:nth-of-type(8){
	transform: rotate(288deg);
}
p:nth-of-type(8) span{
	transform:scale(1.2);
	animation: turns linear 1s infinite .7s;
}
p:nth-of-type(9){
	transform: rotate(324deg);
}
p:nth-of-type(9) span{
	transform:scale(1.4);
	animation: turns linear 1s infinite .8s;
}
p:nth-of-type(10) span{
	transform:scale(1.5);
	animation: turns linear 1s infinite .9s;
}
@keyframes turns{
	10%{
		transform: scale(.5);
	}
	20%{
		transform: scale(.6);
	}
	30%{
		transform: scale(.7);
	}
	40%{
		transform: scale(.8);
	}
	50%{
		transform: scale(.9);
	}
	60%{
		transform: scale(1);
	}
	70%{
		transform: scale(1.1);
	}
	80%{
		transform: scale(1.2);
	}
	90%{
		transform: scale(1.3);
	}
	100%{
		transform: scale(1.4);
	}
}
```
<br/><br/>
## <a name="5">loading5</a>
___
### html
```html
<div class="loading5-wrap">
	<span class="item"></span>
</div>
```
### css
```css
.loading5-wrap{
	position: absolute;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	margin: auto;
	width: 50px;
	height: 50px;
	/*box-sizing: border-box;*/
	border:4px solid #fff;
	border-radius: 50%;
}
.item{
	display: block;
	width: 50px;
	height: 50px;
	position: absolute;
	left: -4px;
	top: -4px;
	border-radius: 50%;
	/*box-sizing: border-box;*/
	border:4px solid transparent;
	border-top-color:#f00; 
	animation: turn cubic-bezier(0, 0, 0.42, 1.02) 1.2s infinite;
}
@keyframes turn{
	0%{
		transform:rotate(0deg)
	}
	100%{
		transform: rotate(360deg);
	}
}
```
<br/><br/>
## <a name="6">loading6</a>
___
### html
```html
<div class="loading6-wrap">
  <div class="inner"></div>
  <div class="inner2"></div>
  <div class="inner3"></div>
  <div class="inner4"></div>
</div>
```
```css
.loading6-wrap{
    width:200px;
    height:200px;
    box-sizing: border-box;
    position: absolute;
    background: #75f06d;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    border-radius: 50%;
    border:10px solid rgba(1, 143, 22, 0.97);
  }
  .inner{
    display: block;
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
    width:180px;
    height:180px;
    box-sizing: border-box;
    border-radius: 50%;
    border:10px solid transparent;
    border-top:10px solid red;
    animation: round 2s ease-out .3s infinite;
  }
  .inner2{
    display: block;
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
    width:160px;
    box-sizing: border-box;
    height:160px;
    border-radius: 50%;
    border:10px solid transparent;
    border-top:10px solid #ff00b7;
    animation: round 2s ease-out .2s infinite;
  }
  .inner3{
    display: block;
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
    width:140px;
    height:140px;
    box-sizing: border-box;
    border-radius: 50%;
    border:10px solid transparent;
    border-top:10px solid #582bff;
    animation: round 2s ease-out .1s infinite;
  }
  .inner4{
    display: block;
    position: absolute;
    left:0;
    top:0;
    right:0;
    bottom:0;
    margin:auto;
    width:120px;
    height:120px;
    box-sizing: border-box;
    border-radius: 50%;
    border:10px solid transparent;
    border-top:10px solid #0e1a2d;
    animation: round 2s ease-out infinite;
  }
@keyframes round {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
```
<br/><br/>
## <a name="7">loading7</a>
___
### html
```js
var str = '<div class="loading7-wrap"></div>'
//效果一
for(var i=1;i<34;i++){
    var stl = 'width:'+(200-i*2)+'px;height:'+(200-i*2)+'px;'+'border-top:3px solid rgba(0,0,0,'+  ((1-33*0.03)+i*0.03) +');animation: round 2s ease-out '+ ((0.015*33) - i*0.015) +'s infinite;'
    str += ' <div class="inner" style="'+  stl +'"></div>'
}
$('.loading7').html(str)
```
### css
```css
position: relative;
 .loading7-wrap{
  width:198px;
  height:198px;
  position: absolute;
  background: rgba(160,160,160,.8);
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  /*border:10px solid rgba(1, 143, 22, 0.97);*/
}
.inner{
  display: block;
  position: absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  margin:auto;
  border:2px solid transparent;
  border-radius: 50%;
}
@keyframes round {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
```
<br/><br/>
## <a name="8">loading8</a>
___
### js
```js
var str1 = '<div class="loading8-wrap"></div>'
 for(var i=1;i<34;i++){
    var stl1 = 'width:'+(200-i*2)+'px;height:'+(200-i*2)+'px;'+'border-top:3px solid rgba(0,0,0,'+  (1-i*0.03) +');animation: round 2s ease-out '+ (i*0.015) +'s infinite;'
    str1 += ' <div class="inner" style="'+  stl1 +'"></div>'
}
$('.loading8').html(str1)
```
### css
```css
position: relative;
.loading8-wrap{
  width:198px;
  height:198px;
  position: absolute;
  background: rgba(160,160,160,.8);
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
  border-radius: 50%;
  /*border:10px solid rgba(1, 143, 22, 0.97);*/
}
.inner{
  display: block;
  position: absolute;
  left:0;
  top:0;
  right:0;
  bottom:0;
  margin:auto;
  border:2px solid transparent;
  border-radius: 50%;
}
@keyframes round {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
```