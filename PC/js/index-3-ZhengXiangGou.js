//function $(id){
//	return document.getElementById(id);
//}
//window.onload=function(){
	// 菜单滑过开始
//	var navAll = $("shoppingMall");
//	var level01 = $("menu_leftId");//一级菜单
//	var level02 = $("ErJiCaiDan");//二级菜单
//	var lis = level01.children;
//	var divs = level02.children;
//	level01.style.display = "none";
//	level01.onmouseover = function(){
//		level02.style.display = "block";
//	}
//	level02.onmouseover = function(){
//		level02.style.display = "block";
//		level01.style.display = "block";
//	}
//	
//	navAll.onmouseover = function(){
//		level01.style.display = "block";
//	}
//
//	for(var i=0; i<lis.length; i++){
//		lis[i].index = i;
//		lis[i].onmouseover = function(){
//			level02.style.display = "block";
//			for(var j=0; j<divs.length; j++){
//				divs[j].style.display = "none";
//			}
//			divs[this.index].style.display = "block";
//		}
//	}
//	
//	for(var i=0; i<divs.length; i++){
//		divs[i].onmouseout = function(){
//			// level01.style.display = "none";
//			level02.style.display = "none";
//		}
//	}
//	
	// level01.style.display = "none";
	// 菜单滑过结束
//}

//菜单滑过开始
//var arr=["../img/sorticon_xuan_01.png","../img/sorticon_putao_01.png","../img/sorticon_yang_01.png","../img/sorticon_beer_01.png","../img/sorticon_round_01.png","../img/sorticon_enm_01.png","../img/sorticon_rupin_01.png"];
//var index = null;

$("#shoppingMall").mouseenter(function(){
	$(".menu_left").css({"display":"block"});
});
//$(".list").mouseenter(function(){
// 	var index=$(this).index();
//	$(".list").find(".iterm").css({"background-image": "url(../img/sorticon_xuan.png)"});
//	$(this).find(".iterm").css({"background-image":"url(../img/sorticon_xuan_01.png)"});
// 	$("#ErJiCaiDan > menu_cn").eq(index).show().siblings().hide(); 
// 	$("#ErJiCaiDan").find(".menu_cn").css("display","block");
//});
//$(".list").mouseleave(function(){
//	$(".list").find(".iterm").css({"background-image": "url(../img/sorticon_xuan.png)"});
//});
//$("#ErJiCaiDan").mouseleave(function(){
//	$("#ErJiCaiDan").find(".menu_cn").css("display","none");
//	$(".list").find(".iterm").css({"background-image": "url(../img/sorticon_xuan.png)"});
//});
//菜单滑过结束