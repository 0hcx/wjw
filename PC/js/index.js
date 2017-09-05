// window.onload=function(){
// 		var menu_left = document.getElementById("menu_leftId");//一级菜单
// 		var level02 = document.getElementById("cn_list_dan");//二级菜单
// 		var lis = level01.children;
// 		var divs = level02.children;
		
// 		level01.onmouseover = function(){
// 			this.style.display = "block";
// 		}
		
// 		navAll.onmouseover = function(){
// 			level01.style.display = "block";
// 		}

// 		for(var i=0; i<lis.length; i++){
// 			lis[i].index = i;
// 			lis[i].onmouseover = function(){
// 				level02.style.display = "block";
// 				for(var j=0; j<divs.length; j++){
// 					divs[j].style.display = "none";
// 				}
// 				divs[this.index].style.display = "block";
// 			}
// 		}
		
// 		for(var i=0; i<divs.length; i++){
// 			divs[i].onmouseout = function(){
// 				level01.style.display = "none";
// 				level02.style.display = "none";
// 			}
// 		}
// 	}
// function $(id){
// 	return document.getElementById(id);
// }







window.onload=function(){
//	// 菜单滑过开始
//	var navAll = document.getElementById("shoppingMall");
//	var level01 = document.getElementById("menu_leftId");//一级菜单
//	var level02 = document.getElementById("ErJiCaiDan");//二级菜单
//	var lis = level01.children;
//	var divs = level02.children;
//	level01.style.display = "none";
//	level01.onmouseover = function(){
//		level01.style.display = "block";
//		level02.style.display = "block";
//
//	}
//	
//	level01.onmouseleave = function(){
//		level01.style.display = "none";
//		level02.style.display = "none";
//	}
//	level02.onmouseleave = function(){
//		level01.style.display = "none";
//		level02.style.display = "none";
//	
//	}
//	level02.onmouseover = function(){
//		level02.style.display = "block";
//		level01.style.display = "block";
//	}
//	
//	navAll.onmouseover = function(){
//		level01.style.display = "block";
//	}
//	navAll.onmouseleave = function(){
//		level01.style.display = "none";
//	}
//	for(let i=0; i<lis.length; i++){
//		lis[i].index = i;
//		lis[i].onmouseover = function(){
//			level02.style.display = "block";
//			for(var j=0; j<divs.length; j++){
//				divs[j].style.display = "none";
//			}
//			divs[this.index].style.display = "block";
//		}
//
//	}
//
//	// 菜单滑过结束
	// 乐享盛宴开始
    var lis = document.getElementById("menu_label J_menuTitleId").getElementsByTagName("li");
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
	// 乐享盛宴结束

//	// 最新热卖开始
//	var olLis = document.getElementById("s_countId").getElementsByTagName("li");
//	var recommendImgss = document.getElementsByClassName("J_recommendImgs");
//	
//	for(var i=0;i<olLis.length;i++){
//		olLis[i].num = i;
//		olLis[i].onclick = function(){
//			//去掉其他lis的样式
//			for(var j=0; j<olLis.length; j++){
//				olLis[j].className = "";
//			}
//			this.className = "active";
//			//隐藏其他DIV
//			for(var j=0; j<recommendImgss.length; j++){
//				recommendImgss[j].style.display = "none";
//			}
//			// console.log(this.num);
//			recommendImgss[this.num].style.display = "block";
//		}
//	}
//	//attachEvent
//	document.addEventListener("keypress",function(event){
//
//		if((event.keyCode || event.which) == 9) {
//			for(var i=0; i<olLis.length; i++){
//				if(olLis[i].className == "active"){
//					if(i < olLis.length-1) {
//						olLis[i+1].onclick();
//					} else if(i == olLis.length-1){
//						olLis[0].onclick();
//					}
//					break;
//				}
//			}
//		}
//	}, false);
//	// 最新热卖结束


	// 顶部栏开始
	window.onscroll = function(){
		var floatSearchS=document.getElementById("floatSearch");
	 	var row_btnIds=document.getElementById("row_btnId");

		var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
		
		if(_scroll >= 109){
			floatSearchS.style.position = "fixed";
			floatSearchS.style.display="block";
		} else {
			floatSearchS.style.position = "absolute";
			floatSearchS.style.display="none";
		}
		

		if(_scroll >= 2000){
	 		row_btnIds.style.display="block";
	 	} else {
	 		row_btnIds.style.display="none";
	 	}
	}
	// 顶部栏结束


	// 左侧边栏开始
	// window.onscroll = function(){
	// 	var row_btnId=document.getElementById("row_btnId");

	// 	var _scrollS = document.body.scrollTop || document.documentElement.scrollTop;
			
	// 	if(_scrollS >= 2000){
	// 		row_btnId.style.display="block";
	// 	} else {
	// 		row_btnId.style.display="none";
	// 	}
	// }
	// 左侧边栏结束
	
};

// 右侧边栏回到顶部开始
var num = 0;
	window.onscroll = function(){
		var up = document.getElementById("J_backtop");
		//当前页面滚动的距离
		var _top = document.body.scrollTop || document.documentElement.scrollTop;
	}
	function goTop(){
		document.body.scrollTop = document.documentElement.scrollTop = 0;
	}
// 右侧边栏回到顶部结束

var list=["<div>葡萄<br>酒区</div>","<div>白酒<br>专区</div>","<div>烈酒<br>酒区</div>","<div>啤酒<br>专区</div>","<div>酒具<br>周边</div>","<div>生态<br>世界</div>"];
var list01=["url(../img/row.png) no-repeat 0 0px","url(../img/row.png) no-repeat 0 -40px","url(../img/row.png) no-repeat 0 -80px","url(../img/row.png) no-repeat 0 -120px","url(../img/row.png) no-repeat 0 -158px","url(../img/row.png) no-repeat 0 -197px","url(../img/row.png) no-repeat 0 -23px",];
//$(function(){
//	// 左侧边栏开始
//	$(".row_btn").on("click","a",function(event){
//		
//		$(this).css({background:"#a21459",borderLeft:"1px solid #a21459",borderRight:"1px solid #a21459",});		
//	});
//	var row = $(".row");
//	for (let i = 0; i < row.length; i++) {
//		row[i].onclick = function () {
////			$(row[j]).css({paddingTop:"3px",color:"white",background:"url("+list01[i]+")"});
//			$(this).css({paddingTop:"3px",color:"white",background:"white"});	
//			for (let j = 0; j < row.length; j++) {
////				$(row[j]).css({paddingTop:"3px",color:"white",background:"white"});
////				$(row[j]).css({paddingTop:"3px",color:"white",background:"url("+list01[i]+")"});
//				$(row[j]).css({paddingTop:"3px",color:"white",background:"list01[i]"});
//			}
//			//row.css({paddingTop:"3px",color:"white",background:"white",backgroundImage:"list01["});
			 // row.each(funciton(i){
			 // 		console.log(i);
			 // 	// row.css({paddingTop:"3px",color:"white",background:"white",borderLeft:"1px solid #a21459",borderRight:"1px solid #a21459"});
			 // });
//			$(this).css({paddingTop:"3px",color:"white",background:"#a21459"});
//			$(this).html(list[i]);
//		}
//	}                         
	
	// $("#floorClose").click=function () {
	// 	$("#row_btnId").display="none";
	// }
	// 左侧边栏结束


	// var menu_leftId = $("#menu_leftId");
	// for (var i = 0; i < menu_leftId.length; i++) {
	// 	menu_leftId[i].onmouseover=function () {
	// 		$(this).css({backgroundImage:"arr[i]"});
	// 	}
	// }




	// $("#menu_leftId").mouseenter = function(){
		// $(this).css({backgroundImage:"arr[i]"});
	// }

	// 最新热卖开始

	// 最新热卖结束
//});



//左侧锚点跟随滚动和变化

//var mlis = $("#row_btnId").find("li");
//	mlis.click(function(){
//		mlis.find("a").css({paddingTop:"3px",color:"white",background:"list01[i]"});
//		$(this).find("a").css({paddingTop:"3px",color:"white",background:"list[i]"});
//	});
//	


//$("#s_countId2").on("click","a",function(event){
//	$(this).css({background:"#a21459"});		
//});







$("#s_countId2 li").click(function(){
 	//$(this).addClass("m").siblings().removeClass("m"); //切换选中的按钮高亮状态
 	var index=$(this).index();
// 	$(this).$("em").css({background: "#a21459"});
 	$(this).css({color:"#a21459",borderBottom: "1px solid #a21459"});
 	$("#recommend2ul > li").eq(index).show().siblings().hide(); 
});







$("#s_countId3 li").click(function(){
 	var index=$(this).index();
 	$("#s_countId3 li").css({color:"#000",borderBottom: "1px solid transparent"});
 	$("#s_countId3 li").find("em").css({background:"#ccc"});
 	$(this).find("em").css({background:"#a21459"});
 	$(this).css({color:"#a21459",borderBottom: "1px solid #a21459"});
 	$("#recommend3ul > li").eq(index).show().siblings().hide(); 
});












//左侧边栏开始
var index = null;
$(".row").mouseenter(function(){
	$(this).find("p").css({
		"height":"40px",
		"width":"30px",
		"background":"#a21459", 
		"vertical-align":"middle", 
		"color":"#fff", 
		"display":"block"
	});
});
$(".row").mouseleave(function(){
	$(".row").find("p").css("display","none");
	$(".row").eq(index).find("p").css({
			"height":"40px",
			"background":"#a21459", 
			"vertical-align":"middle", 
			"color":"#fff", 
			"display":"block"
	});
});
$(".row").click(function(){
	$(".row").css("background-image","url(../img/row.png)")
	$(".row").find("p").css("display","none");
	$(this).find("p").css({
			"height":"40px",
			"background":"#a21459", 
			"vertical-align":"middle", 
			"color":"#fff", 
			"display":"block"
	});
	index = $(".row").index(this);
});
//左侧边栏结束







//菜单滑过开始

var arr=["../img/sorticon_xuan_01.png","../img/sorticon_putao_01.png","../img/sorticon_yang_01.png","../img/sorticon_beer_01.png","../img/sorticon_round_01.png","../img/sorticon_enm_01.png","../img/sorticon_rupin_01.png"];
//var index = null;
$(".list").mouseenter(function(){
 	var index=$(this).index();
// 	$(this).find("a").css({"color":"black"});
	$(".list").find(".iterm").css({"background-image": "url(../img/sorticon_xuan.png)"});
	$(this).find(".iterm").css({"background-image":"url(../img/sorticon_xuan_01.png)"});
	$(this).find("a").css({"color":"white"});
	
 	$("#ErJiCaiDan > menu_cn").eq(index).show().siblings().hide(); 
 	$("#ErJiCaiDan").find(".menu_cn").css("display","block");
});
//$(".list").mouseleave(function(){
//	$(".list").find(".iterm").css({"background-image": "url(../img/sorticon_xuan.png)"});
//});
$("#ErJiCaiDan").mouseleave(function(){
	$("#ErJiCaiDan").find(".menu_cn").css("display","none");
	$(".list").find(".iterm").css({"background-image": "url(../img/sorticon_xuan.png)"});
	$(".list").find("a").css({"color":"black"});
});
//菜单滑过结束










