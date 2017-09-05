function $(id){
	return document.getElementById(id);	
}
window.onload=function(){
	// 菜单滑过开始
	var navAll = $("shoppingMall");
	var level01 = $("menu_leftId");//一级菜单
	var level02 = $("ErJiCaiDan");//二级菜单
	var lis = level01.children;
	var divs = level02.children;
	level01.style.display = "none";
	level01.onmouseover = function(){
		level02.style.display = "block";
	}

	level02.onmouseover = function(){
		level02.style.display = "block";
		level01.style.display = "block";
	}
	
	navAll.onmouseover = function(){
		level01.style.display = "block";
	}

	for(var i=0; i<lis.length; i++){
		lis[i].index = i;
		lis[i].onmouseover = function(){
			level02.style.display = "block";
			for(var j=0; j<divs.length; j++){
				divs[j].style.display = "none";
			}
			divs[this.index].style.display = "block";
		}
	}
	
	for(var i=0; i<divs.length; i++){
		divs[i].onmouseout = function(){
			level01.style.display = "none";
			level02.style.display = "none";
		}
	}
	
	// level01.style.display = "none";
	// 菜单滑过结束
	// 服务保障开始
	var lis = $("cn-titleId").getElementsByTagName("li");
	var menu_counts = document.getElementsByClassName("menu_count");
	
	for(var i=0;i<lis.length;i++){
		lis[i].num = i;
		lis[i].onclick = function(){
			//去掉其他lis的样式
			for(var j=0; j<lis.length; j++){
				lis[j].className = "";
			}
			this.className = "active";
			//隐藏其他DIV
			for(var j=0; j<menu_counts.length; j++){
				menu_counts[j].style.display = "none";
			}
			// console.log(this.num);
			menu_counts[this.num].style.display = "block";
		}
	}
	//attachEvent
	document.addEventListener("keypress",function(event){

		if((event.keyCode || event.which) == 9) {
			for(var i=0; i<lis.length; i++){
				if(lis[i].className == "active"){
					if(i < lis.length-1) {
						lis[i+1].onclick();
					} else if(i == lis.length-1){
						lis[0].onclick();
					}
					break;
				}
			}
		}
	}, false);
	// 服务保障结束
	
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

// 顶部栏开始
	window.onscroll = function(){
		var tab=document.getElementById("tabs");

		var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
		
		if(_scroll >= 877){
			tab.style.position = "fixed";
			tab.style.display="block";
		} else {
			tab.style.position = "absolute";
			tab.style.display="none";
		}
		

//		if(_scroll >= 2000){
//	 		row_btnIds.style.display="block";
//	 	} else {
//	 		row_btnIds.style.display="none";
//	 	}
	}
	// 顶部栏结束




//放大镜开始

//放大镜结束


//$(".photo-small-label photo-small-array").click(function(){
// 	var index=$(this).index();
// 	$(this).css({"background": "url(../img/img-Xiang/p_img.png")});
// 	
//});

//$("#s_countId3 li").click(function(){
// 	var index=$(this).index();
// 	$("#s_countId3 li").css({color:"#000",borderBottom: "1px solid transparent"});
// 	$("#s_countId3 li").find("em").css({background:"#ccc"});
// 	$(this).find("em").css({background:"#a21459"});
// 	$(this).css({color:"#a21459",borderBottom: "1px solid #a21459"});
// 	$("#recommend3ul > li").eq(index).show().siblings().hide(); 
//});