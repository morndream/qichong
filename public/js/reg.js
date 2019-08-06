
 //用户名获取焦点时事件
function show_namemsg(){
   	  uname_msg.innerHTML="中文、英文、数字包括下划线"; 

}
//正则表达式判断是否符合规则
function uname_notnull(){
    //正则表达式用户名：数字、字母、下划线
		var reg=/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
	    if(!uname.value){
				  uname_msg.innerHTML="用户名不能为空";
					uname_msg.style.color="red";
					
      }else if(!reg.test(uname.value)){
				 		  uname_msg.innerHTML="用户名格式不正确";
				     	uname_msg.style.color="red";
			}else{
     //	 uname_msg.innerHTML="输入格式正确"; 
     //  uname_msg.style.color="blue";
           var u_name=uname.value;
           //创建异步对象   
					 var xhr=new XMLHttpRequest();
           //监听并接收响应
				   xhr.onreadystatechange=function(){
					   if(xhr.readyState==4 && xhr.status==200){
							 	var result=xhr.responseText;
						   if(result==1){
						      uname_msg.innerHTML="用户名已被使用"
							     uname_msg.style.color="red";
									 alert("该用户名已被使用");

						    }else{
						      uname_msg.innerHTML="输入格式正确"
									 uname_msg.style.color="blue";
						    }
						 }				 
					 }
					 //打开连接并创建请求
			  	xhr.open("get","http://127.0.0.1:8080/user/reg_check?uname="+u_name,true);
				  //发送请求
				  xhr.send();

		  }
}

//密码获取焦点时事件
function show_wdmsg(){
 upwd_msg.innerHTML="长度在6~12位之间的数字和字母";
}

//	用正则表达式判断密码是否符合规则
  function upwd_notnull(){
		var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
		    if(!upwd.value){
				  upwd_msg.innerHTML="密码不能为空";
					upwd_msg.style.color="red";

        }else  if(!reg.test(upwd.value)){
				 	  upwd_msg.innerHTML="密码格式不正确";
					  upwd_msg.style.color="red";
				}else{
				    upwd_msg.innerHTML="输入格式正确";
						upwd_msg.style.color="blue";
				}
				
	}
//确认密码获取焦点时事件
function show_cpmsg(){
   cpwd_msg.innerHTML="长度在6~12位之间的数字和字母";
}
//判断密码前后是否一致
function cpwd_notnull(){
	    if(!cpwd.value){
				  cpwd_msg.innerHTML="密码不能为空";
					cpwd_msg.style.color="red";

        }else if(cpwd.value!==upwd.value){
					  cpwd_msg.innerHTML="密码不一致,请确认";
					  cpwd_msg.style.color="red";
					
				}else{
				    cpwd_msg.innerHTML="输入格式正确";
					  cpwd_msg.style.color="blue";

				}	
	}
 //邮箱获取焦点时事件
function show_emailmsg(){
    email_msg.innerHTML="用户名@域名"
}

//用正则表达式判断邮箱是否符合规则
function email_notnull(){
	 var reg=/^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
     if(!email.value){
				   email_msg.innerHTML="邮箱不能为空";
					email_msg.style.color="red";

        }else if(!reg.test(email.value)){
					  email_msg.innerHTML="邮箱格式不正确";
					  email_msg.style.color="red";
					
				}else{
				    email_msg.innerHTML="输入格式正确";
					 email_msg.style.color="blue";

	}	

}
var btn=document.getElementById("button");
 btn.onclick=function(){
  //获取数据
  var u_name=uname.value;
  var u_pwd=upwd.value;
  var e_mail=email.value;
	var c_pwd=cpwd.value;
	if(uname_msg.innerHTML=="用户名已被使用"){
		alert("用户名已被使用");
	}else{
  //创建异步对象
		var xhr=new XMLHttpRequest();
    //监听并接收响应
		xhr.onreadystatechange=function(){
	 //判断readyState==4 status==200
			if(xhr.readyState==4 && xhr.status==200){
			  var result=xhr.responseText;
	          alert(result);
			  if(result=="注册成功"){
			    window.location.href="http://127.0.0.1:8080/qc_login.html";		  
			  }
			}	
		}
   //设置请求主体
	  var formdata="uname="+u_name+"&upwd="+u_pwd+"&email="+e_mail+"&cpwd="+c_pwd;
   //打开连接并创建请求
		xhr.open("post","http://127.0.0.1:8080/user/reg",true);
		//设置请求头
    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		//发送请求
		 xhr.send(formdata);	  
 }
}