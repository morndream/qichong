//登录
 var type=document.getElementsByClassName("login_type")[0];
 var user=document.getElementsByClassName("login_info")[0];
 var phone=document.getElementsByClassName("login_info2")[0];
 // console.log(phone,user);
 var as=type.children;
 for(var a of as){
	 a.onclick=function(){
		 var a=this;

		if(a.innerHTML=="账号登录"){
			  phone.style.display="none";
				user.style.display="block";  
			 this.className="my_style"
			 a.previousElementSibling.className="";

	  }else{
				phone.style.display="block";
				user.style.display="none";
				this.className="my_style"
			 a.nextElementSibling.className="";
	  }
	 }

 }
//!--验证--
  //判断用户名是否为空
function uname_notnull(){
	    if(!uname.value){
				  uname_msg.innerHTML="用户名不能为空";
					uname_msg.style.color="red";
					
      }else{
			   uname_msg.innerHTML=""; 
			}
	}
//	判断密码是否为空
  function upwd_notnull(){
		    if(!upwd.value){
				  upwd_msg.innerHTML="密码不能为空";
					upwd_msg.style.color="red";

        }else{
				  upwd_msg.innerHTML="";
				}
	}
//ajax发送请求，连接数据库，验证账号登录模块
  var btn=document.getElementById("button");
  btn.onclick=function(){
	   //获取数据
		 var u_name=uname.value;
		 var u_pwd=upwd.value;
    //创建xhr对象
		 var xhr=new XMLHttpRequest();
    //绑定监听事件
		 xhr.onreadystatechange=function(){
       //判断readyState==4 status==200
			if(xhr.readyState==4 && xhr.status==200){
         //接收返回数据
			   var result=xhr.responseText;
//				 var obj=JSON.parse(result);
				   alert(result);
             if(result=="登录成功"){ 
						 window.location.href = './qc_index.html';
			   }
			}
		 }
     //设置请求主体
		 var formdata="uname="+u_name+"&upwd="+u_pwd;
     //打开连接
		 xhr.open("post","http://127.0.0.1:8080/user/login",true);
     //设置请求头
		 xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
     //发送请求
		 xhr.send(formdata);	 
	}




	// 手机号登录验证
//手机号非空判断
  function phone_notnull(){
     if(!phone2.value){
			  phone_msg.innerHTML="手机号不能为空";
				phone_msg.style.color="red";
		 
		 }else{
		    phone_msg.innerHTML="";
		 }
	}
//密码非空判断
 function upwd2_notnull(){
	      if(!upwd2.value){
	 		  upwd2_msg.innerHTML="密码不能为空";
        upwd2_msg.style.color="red";
		 
		 }else{
		   upwd2_msg.innerHTML="";
		 }
 }
//获取登录元素
	var btn2=document.getElementById("button2");
//创建元素的点击事件
  btn2.onclick=function(){
   //获取数据
		var p_hone=phone2.value;
		var u_pwd=upwd2.value;
    //创建异步对象
		var xhr=new XMLHttpRequest();
    //绑定监听事件
		xhr.onreadystatechange=function(){
		     //判断readyState==4 status==200
				 if(xhr.readyState==4 && xhr.status==200){
       //返回接收数据
			   var result=xhr.responseText;
				 alert(result);
         if(result=="登录成功"){ 
						 window.location.href = './qc_index.html';
			    }
		   	} 
		}
    //设置请求主体
		var formdata="phone="+p_hone+"&upwd="+u_pwd;
    //打开连接
		xhr.open("post","http://127.0.0.1:8080/user/login2",true);
    //设置请求头
		xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    //发送请求
		xhr.send(formdata);	 
	 }