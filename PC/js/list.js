window.onload=function(){
	// 菜单滑过开始
	var navAll = document.getElementById("shoppingMall");
	var level01 = document.getElementById("menu_leftId");//一级菜单
	var level02 = document.getElementById("ErJiCaiDan");//二级菜单
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
	
	// 大家都在买开始
    var lis = document.getElementById("tltId").getElementsByTagName("li");
	var left02Left = document.getElementsByClassName("left02");
	
	for(var i=0;i<lis.length;i++){
		lis[i].num = i;
		lis[i].onclick = function(){
			//去掉其他lis的样式
			for(var j=0; j<lis.length; j++){
				lis[j].className = "";
			}
			this.className = "active";
			//隐藏其他DIV
			for(var j=0; j<left02Left.length; j++){
				left02Left[j].style.display = "none";
			}
			// console.log(this.num);
			left02Left[this.num].style.display = "block";
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
	

//	document.getElementById("right01").onclick(){
//		document.getElementById("left02Id").style.left = "-1070px";
//	}


	// var currOrd=1;
	// document.getElementById("right01").onclick=function () {
	// 	var outOrd=currOrd;
	// 	currOrd++;
	// 	if (currOrd>2) {
	// 		currOrd=1;
	// 	}
	// 	showImg(currOrd,outOrd);
	// }








	
	// 大家都在买结束
	// 顶部栏开始
	window.onscroll = function(){
		var floatSearchS=document.getElementById("floatSearch");
		var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
		if(_scroll >= 109){
			floatSearchS.style.position = "fixed";
			floatSearchS.style.display="block";
		} else {
			floatSearchS.style.position = "absolute";
			floatSearchS.style.display="none";
		}
	}
	// 顶部栏结束
	
	/*// 大家都在买右键开始
	// startChange();
	var lis=$("left02Id").getElementsByTagName("li");
	$("right01").onclick=function () {
		// if (myTimer!=null) {
		// 	clearInterval(myTimer);
		// 	myTimer=null;
		// }
		rightR();
	}
	// 大家都在买右键结束*/

}
/*// 大家都在买右键开始
var Li = document.getElementsByTagName("li")[0].offsetWidth;//获取单个图片li的宽
var obannerimg = document.getElementById("left02Id").children;//获取li
var cbannerimg = obannerimg[0].cloneNode(true)//克隆
$("left02Id").appendChild(cbannerimg);
$("left02Id").style.width = Li*obannerimg.length+"px";
var num = 0;
   
$("right").onclick = function(){
	num++;
	  
	if(num>=obannerimg.length){
		num=1;
		$("left02Id").style.left = 0+"px";
   	}
    // console.log(num);
	move($("left02Id"),"left",-Li*num);
// 大家都在买右键结束*/

// function showImg(inOrd,outOrd) {
// 	document.getElementById("left02Id").children[inOrd-1].style.left = "-400px";
// 	document.getElementById("left02Id").children[inOrd-1].style.top = "0px";
// 	// moveH(document.getElementById("left02Id").children[inOrd-1],{x:-400,y:0},{x:0,y:0},8,20);
// 	// moveH(document.getElementById("left02Id").children[outOrd-1],{x:0,y:0},{x:400,y:0},8,20);

// 	$("#left02Id").find("li").eq(currOutOrd-1).animate({"left":this.width+"px"},1000);
// 	$("#left02Id").find("li").eq(this.currOrd-1).animate({"left":"0px"},1000);
// }


//$(function(){
//	$("#right01").click(function(){
//		$("#left02Id").animate({left: '+1070px'}, "slow");
//	});
////	$("#right01").click(function(){
////		$("#left02Id").animate({left: '+50px'}, "slow");
////	});
//});


























// function move(DOM,attr,target){
//   clearInterval(DOM.timer)
//   DOM.timer=setInterval(function(){
//     if(attr=='opacity'){
//       var cur=Math.round(parseFloat(getStyle(DOM,attr))*100)
//     }else{
//       var cur=parseInt(getStyle(DOM,attr));
//     }
//     var speed=(target-cur)/8;
//     speed=speed>0?Math.ceil(speed):Math.floor(speed);
//     if(cur==target){
//       clearInterval(DOM.timer)
//     }else{
//       if(attr=='opacity'){
//         DOM.style.filter='alpha(opacity:'+(cur+speed)+')'
//         DOM.style.opacity=(cur+speed)/100
//       }else{
//         DOM.style[attr]=cur+speed+'px';
//       }
//     }
//   },30)
// }


