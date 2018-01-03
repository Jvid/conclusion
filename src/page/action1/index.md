
### html

```HTML
<div class="img">
	<img src="<%= require('../image/sky.jpg') %>" alt="">
</div>
```

### css
```css
.img { 
	display:block; 
	position: relative; 
	width:800px; 
	height:450px; 
	margin:0 auto;
	overflow: hidden;
}
.img:before{ 
	content: ""; 
	position: absolute; 
	width:200px; 
	height: 100%; 
	top: 0; 
	left: -250px; 
	overflow: hidden;background: -webkit-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.2) 50%, rgba(255,255,255,0) 100%);
	background: -o-linear-gradient(left, rgba(255,255,255,0) 0%, rgba(255,255,255,.2) 50%, rgba(255,255,255,0) 100%);
	background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,.2) 50%, rgba(255,255,255,0) 100%);
	-webkit-transform: skewX(-25deg);
	-moz-transform: skewX(-25deg)
	
}
.img:hover:before { 
	left: 150%; 
	transition: left 1s ease 0s; 
}
img{
	width: 100%;
	height: 100%;
}
```
