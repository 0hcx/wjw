define(function(require,exports,module){
//	放大镜开始
	document.getElementById("jingzi").style.display = "none";
	document.getElementById("showBox").style.display = "none";
	document.getElementById("box").onmousemove = function(event){
		document.getElementById("jingzi").style.display = "block";
		document.getElementById("showBox").style.display = "block";
		var evt = event || window.event;
		var scroll=document.body.scrollTop ||document.documentElement.scrollTop;
//		var x = evt.clientX-this.offsetLeft-80;
//		var y = evt.clientY-this.offsetTop-80;
		var x = evt.clientX-this.offsetLeft-130;
		var y = evt.clientY-this.offsetTop+scroll-280;
//		console.log(x+"="+y)
		
		if(x<0){
			x=0;
		}else if(x>this.offsetWidth-123){
			x=this.offsetWidth-123;
		}
		
		if(y<0){
			y=0;
		}else if(y>this.offsetHeight-122){
			y=this.offsetHeight-122;
		}
		
		document.getElementById("jingzi").style.left = x+"px";
		document.getElementById("jingzi").style.top = y+"px";
		
		document.getElementById("ImgBox").style.left = -3*x+"px";
		document.getElementById("ImgBox").style.top = -3*y+"px";
	}
	
	document.getElementById("jingzi").onmouseout = function(){
		document.getElementById("jingzi").style.display="none";
		document.getElementById("showBox").style.display = "none";
	}

	//	放大镜结束
}