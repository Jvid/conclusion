[hover1](#1)&nbsp;&nbsp;[hover2](#2)&nbsp;&nbsp;[hover3](#3)&nbsp;&nbsp;[hover4](#4)&nbsp;&nbsp;[hover5](#5)
<br/><br/>
## <a name="1">hover1</a>
___
### html
```html
<div class="hover-item hover1">
	<p>鼠标放上来</p>
</div>
```
### scss
```scss
.hover1{
	p{
		width: 90%;
		margin: 80px auto;
		height: 30px;
		line-height: 30px;
		cursor: pointer;
		text-align: center;
		&:after{
			content: "";
			display: block;
			width: 0;
			height: 2px;
			margin: 0 auto;
			background: #00f;
			transition: all linear 0.3s;
		}
		&:hover:after{
			width: 100%;
		}
	}
}
```
## <a name="2">hover2</a>
___
### html
```html
<div class="hover-item hover2">
	<p>鼠标放上来</p>
</div>
```
### scss
```scss
.hover2{
	p{
		width: 90%;
		margin: 80px auto;
		height: 30px;
		line-height: 30px;
		cursor: pointer;
		text-align: center;
		background: #ccc;
		color: #333;
		position: relative;
		transition: all linear 0.3s;
		border: 1px solid transparent;
		&:after{
			content: "";
			display: block;
			width: 0;
			height: 2px;
			position: absolute;
			right: 0;
			top: 0;
			background: #00f;
			transition: all linear 0.3s;
		}
		&:before{
			content: "";
			display: block;
			width: 0;
			height: 2px;
			position: absolute;
			left: 0;
			top: 30px;
			background: #00f;
			transition: all linear 0.3s;
		}
		&:hover{
			background: #fff;
			border: 1px solid #ccc;
		}
		&:hover:before{
			width: 100%;
		}
		&:hover:after{
			width: 100%;
		}
	}
}
```
## <a name="3">hover3</a>
___
### html
```html
<div class="hover-item hover3">
	<p class="line-wrap">
		<span class="line-item"></span>
		<span class="line-item"></span>
		<span class="line-item"></span>
	</p>
</div>
```
### scss
```scss
.hover3{
	display: flex;
	justify-content: center;
	align-items:center;
	.line-wrap{
		width: 60px;
		height: 30px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		cursor: pointer;
		position: relative;
		.line-item{
			width: 100%;
			height: 3px;
			background: #000;
			display: inline-block;
			// opacity: 1;
			transition: all linear 0.3s;
		}
		&:hover{
			.line-item{
				position: absolute;
				left: 0;
				right: 0;
				top: 0;
				bottom: 0;
				margin: auto;
			}
			.line-item:nth-child(2){
				// opacity: 0;
				display: none;
			}
			.line-item:nth-child(1){
				transform: rotate(45deg);
			}
			.line-item:nth-child(3){
				transform: rotate(-45deg);
			}
		}
	}
}
```
## <a name="4">hover4</a>
___
### html
```html
<div class="hover-item hover4">
	<p class="hover4-wrap">
		鼠标放上来
	</p>
</div>
```
### scss
```scss
.hover4{
	background: url('../../image/hover.jpg');
	background-size: cover; 
	cursor: pointer;
}
.hover4-wrap{
	width: 100%;
	height: 100%;
	text-align: center;
	line-height: 200px;
	background: greenyellow;
	color: #333;
	opacity: 1;
	transition: all linear 0.3s;
	&:hover{
		opacity: 0
	}
}
```
## <a name="5">hover5</a>
___
### html
```html
<div class="hover-item hover5">
	<p class="hover5-wrap">
		鼠标放上来
	</p>
</div>
```
### scss
```scss
.hover5-wrap{
	width: 90%;
	margin: 80px auto;
	height: 30px;
	line-height: 30px;
	cursor: pointer;
	text-align: center;
	position: relative;
	overflow: hidden;
	background: #ccc;
	border-radius: 30px;
	transition: all linear 0.1s;
	color: #333;
	&:before{
		content: "";
		display: block;
		width: 0;
		height: 100%;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		border-radius:30px;
		margin: auto;
		background: rgba(0,0,255,0.2);
		// background: #fff;
		transition: all linear 0.1s;
	}
	&:hover{
		color: #fff;
	}
	&:hover:before{
		width: 100%;
	}
}
```