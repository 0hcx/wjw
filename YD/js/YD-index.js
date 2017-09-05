window.onload=function(){

	// 顶部栏开始
	window.onscroll = function(){
		var header_topIdI=document.getElementById("header_topId");
		var _scroll = document.body.scrollTop || document.documentElement.scrollTop;
		if(_scroll >= 215){
			// header_topIdI.style.position = "fixed";
			// header_topIdI.style.display="block";


			// header_topIdI.style.backgroundColor= "white";
			// header_topIdI.style.border= "1px solid #000";
		} else {
			// header_topIdI.style.position = "absolute";
			// header_topIdI.style.display="none";
		}
	}
	// 顶部栏结束
}





//类
function Slider(obj){
	this.boxDom = obj.boxDom;
	this.imgs = obj.imgs,
	this.width = obj.width;
	this.height = obj.height;
	
	this.timeSpace = obj.timeSpace;
	this.currOrd = obj.currOrd;
	this.incLeft = obj.incLeft;	
	this.timer = null;
	//轮播图按钮：
	this.btn={
		width:obj.btn.width,
		height:obj.btn.height,
		bgColor:obj.btn.bgColor,
		highColor:obj.btn.highColor,
		isCircle:obj.btn.isCircle,
		distance:obj.btn.distance,//按钮之间的间距
		direction:obj.btn.direction//按钮的位置，左上右下。
	};
	this.initUI();
	this.initEvent();
	this.go();
}

Slider.prototype={
	initUI:function(){
		//1、动态创建图片和按钮
		//1、创建所有的img标记
		let imgStr = "";
		let cssStr="";
		for(let i=0;i<this.imgs.length;i++){
			this.boxDom.append("<img>");			
		}
		
		for(let i=0;i<this.imgs.length;i++){
			this.boxDom.children()[i].src=this.imgs[i];
			cssStr="position:absolute;width:"+this.width+"px;height:"+this.height+"px;"
			cssStr+="left:-10000px;top:0px;";
			this.boxDom.children()[i].style.cssText =cssStr;
		}
		
		this.boxDom.children()[this.currOrd-1].style.left = "0px";
		
		//2、创建所有的按钮。
		
		cssStr="position:absolute;right:50px;bottom:10px;list-style:none;z-index:999;"
		let ulLiStr = "<ul style="+cssStr+">";
		
		for(let i=0;i<this.imgs.length;i++){
			let cssStr="float:left;margin:5px;width:"+this.btn.width+"px;height:"+this.btn.height+"px;";
			if(this.btn.isCircle){
				cssStr+="border-radius:50%;";
			}
			cssStr+="background-color:"+this.btn.bgColor+";"
			ulLiStr +="<li style="+cssStr+"></li>"
		}	
		ulLiStr += "</ul>";
		this.boxDom.append(ulLiStr);
		
		this.boxDom.find("li")[this.currOrd-1].style.backgroundColor=this.btn.highColor;
	},
	
	initEvent:function(){
		let that = this;
		let $lis = this.boxDom.find("li");
		for(let i=0;i<$lis.length;i++){
			$lis[i].ord = i;
			$lis[i].onclick = function(){
				that.goImg(this.ord+1);
			}
		}
		this.boxDom.mouseover(function(){
			that.stopChange();	
		});
		this.boxDom.mouseout(function(){
			that.go();
		});
	},
	
	go:function(){
		let that = this;
		this.timer = setInterval(function(){
			that.goStep();
		},this.timeSpace);
	},
	
	goStep:function(){
		let currOutOrd = this.currOrd;
		//1、改变当前图片序号
		this.currOrd++;//要进入的图片。
		if(this.currOrd>this.imgs.length){
			this.currOrd = 1;
		}
		
		//2、改变外观
		//1)、改变图片(滑动效果)
		this.boxDom.find("img").eq(this.currOrd-1).css("left",-1*this.width+"px");
		
		this.boxDom.find("img").eq(currOutOrd-1).animate({"left":this.width+"px"},1000);
		this.boxDom.find("img").eq(this.currOrd-1).animate({"left":"0px"},1000);
			
		//2)、改变按钮
		this.boxDom.find("li").css("backgroundColor",this.btn.bgColor);
		this.boxDom.find("li").eq(this.currOrd-1).css("backgroundColor",this.btn.highColor);
	},
	
	goImg:function(ord){
		let currOutOrd = this.currOrd;
		//1、改变当前图片序号
		this.currOrd=ord;//要进入的图片。
		
		//2、改变外观
		//1)、改变图片(滑动效果)
		this.boxDom.find("img").eq(this.currOrd-1).css("left",-1*this.width+"px");
		
		this.boxDom.find("img").eq(currOutOrd-1).animate({"left":this.width+"px"},1000);
		this.boxDom.find("img").eq(this.currOrd-1).animate({"left":"0px"},1000);
			
		//2)、改变按钮
		this.boxDom.find("li").css("backgroundColor",this.btn.bgColor);
		this.boxDom.find("li").eq(this.currOrd-1).css("backgroundColor",this.btn.highColor);
		
	},
	
	stopChange:function(){
		clearInterval(this.timer);
	}
	//切换效果
};

$(function(){
	new Slider({
		boxDom : $("#header_conId"),
		imgs : ["../img/img-YD/banner4.jpg","../img/img-YD/banner5.jpg","../img/img-YD/banner6.jpg","../img/img-YD/banner7.jpg","../img/img-YD/banner8.jpg","../img/img-YD/banner9.jpg"],
		width : 415,
		height : 173,
		timeSpace : 3000,
		incLeft : 1,
		currOrd:3,
		
		//轮播图按钮：
		btn:{
			width:20,
			height:20,
			bgColor:"#ccc",
			highColor:"pink",
			isCircle:true,
			distance:10,//按钮之间的间距
			direction:"下"//按钮的位置，左上右下。
		}
		
	});
	
	
	
});
