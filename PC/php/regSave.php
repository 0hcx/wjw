<?php
	header("Content-type: text/html; charset=utf-8");

	$userName = $_POST['userName'];
	$userPass = $_POST['userPass'];

	$conn = mysql_connect("localhost","root","123456");
	
	if(!$conn){
		die("connect fail");
	}else{
		echo "connect success";
	}

	mysql_select_db("mydbwjw",$conn);

	$sqlStr="insert into userInfo(userName,userPass)
     values('".$userName."','".$userPass."')";
    mysql_query($sqlStr,$conn);

    mysql_close($conn); 
	

?>