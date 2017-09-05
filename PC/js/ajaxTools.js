
//ajax请求
//url:请求的地址
//method：请求方式（get和post）
//data：请求参数（传递给服务器端的数据）,键值对的字符串
       
//isAsync：是否异步
//func：回调函数
function ajax1704(url,method,data,isAsync,func){
	let xhr = new XMLHttpRequest();
	let str=url;
	if(method.toLowerCase()=="get" && data!=""){
		str=url+"?"+data;
	}
	xhr.open(method,str,isAsync);
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(func!=null){
				func(xhr.responseText);
			}
		}
	}
	if(method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(data);
	}else if(method.toLowerCase()=="get"){
		xhr.send();
	}
}


//
//url,method,data,isAsync,func

//参数是对象
function ajax1704ByObj(obj){
	let xhr = new XMLHttpRequest();
	let str=obj.url;
	if(obj.method.toLowerCase()=="get" && obj.data!=""){
		str=obj.url+"?"+obj.data;
	}
	
	xhr.open(obj.method,str,obj.isAsync);
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(obj.func!=null){
				obj.func(xhr.responseText);
			}
		}
	}
	if(obj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(obj.data);
	}else if(obj.method.toLowerCase()=="get"){
		xhr.send();
	}
}

function ajax1704ByObjIncludeDefault(obj){
	//定义一个包括所有参数默认值的json对象。
	let defautObj={
		"url":"#",
		"method":"get",
		"data":"",
		"isAsync":true,
		"func":null	
	};
	
	for(let key in obj){
		defautObj[key]= obj[key];
	}
	
	let xhr = new XMLHttpRequest();
	let str=defautObj.url;
	if(defautObj.method.toLowerCase()=="get" && defautObj.data!=""){
		str=defautObj.url+"?"+defautObj.data;
	}
	xhr.open(defautObj.method,str,defautObj.isAsync);
	xhr.onreadystatechange = function(){
		if(xhr.readyState==4 && xhr.status==200){
			if(defautObj.func!=null){
				defautObj.func(xhr.responseText);
			}
		}
	}
	if(defautObj.method.toLowerCase()=="post"){
		xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xhr.send(defautObj.data);
	}else if(defautObj.method.toLowerCase()=="get"){
		xhr.send();
	}
}
