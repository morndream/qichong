//引入express模块
const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建空路由器
var router=express.Router();

//QC添加用户注册路由
router.post('/reg',function(req,res){
	var obj=req.body;
	console.log(obj);
	if(!obj.cpwd||!obj.upwd){
	     res.send("密码不能为空，请确认！");
         return;
	   
	}else if(obj.cpwd!=obj.upwd){
		 res.send("密码不一致，请确认！");
         return;
	}else{
		var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
		if(!reg.test(obj.upwd)){
			res.send("密码格式不正确");
			return;
		}
	}
   
    if(!obj.uname){
 		res.send("用户名不能为空，请确认！");
		return;
    }else{
		var reg=/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
       if(!reg.test(obj.uname)){
			res.send("用户名格式不正确");
			return;
		}
    }
 
    if(!obj.email){
 		res.send("邮箱不能为空，请确认！");
		return;
    }else{
		var reg=/^\w+@[a-z0-9]+\.[a-z]{2,4}$/;
       if(!reg.test(obj.email)){
			res.send("邮箱格式不正确");
			return;
		}
    }
 

   pool.query('INSERT INTO user SET uname=?,upwd=?,email=?',
	  [ obj.uname,obj.upwd,obj.email],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("注册成功");
		}else{
			res.send("注册失败，格式不符合要求");
		}
	  }
	  );

});





//QC&SHOP验证注册名重复路由
router.get('/reg_check',(req,res)=>{
	var uname=req.query.uname;
	if(!uname){
		res.send("用户名不能用空");
		return;
	}
    pool.query('SELECT * FROM user WHERE uname=?',[uname],(err,result)=>{
	  if(err) throw err;
	  if(result.length>0){
	     res.send("1");
	  }else{
	     res.send("0");
	  }
	});
});

//QC&SHOP验证注册名重复路由
router.get('/reg_checkp',(req,res)=>{
	var phone=req.query.phone;
	console.log(phone)
	if(!phone){
		res.send("手机号不能用空");
		return;
	}
    pool.query('SELECT * FROM user WHERE phone=?',[phone],(err,result)=>{
	  if(err) throw err;
	  if(result.length>0){
	     res.send("1");
	  }else{
	     res.send("0");
	  }
	});
});

//QC添加用户登录路由(账号)
router.post('/login',(req,res)=>{
  var $uname=req.body.uname;
  var $upwd=req.body.upwd;
  if(!$uname){
     res.send('用户名不能为空');
	 return;
  }
  if(!$upwd){
    res.send('密码不能为空');
    return;
  }
  pool.query('SELECT * FROM user WHERE uname=? AND upwd=?',[$uname,$upwd],(err,result)=>{
    if(err) throw err;
	if(result.length>0){
	    res.send('登录成功');
	}else{
	    res.send('登录失败，用户名或密码错误');
	}
  });
});
//QC添加用户登录路由(手机登录)
router.post('/login2',(req,res)=>{
  var $phone=req.body.phone;
  var $upwd=req.body.upwd;
  if(!$phone){
     res.send('手机号不能为空');
	 return;
  }
  if(!$upwd){
    res.send('密码不能为空');
    return;
  }
  pool.query('SELECT * FROM user WHERE phone=? AND upwd=?',[$phone,$upwd],(err,result)=>{
    if(err) throw err;
	if(result.length>0){
	    res.send('登录成功');
	}else{
	    res.send('登录失败，用户名或密码错误');
	}
  });
});






//petshop添加用户注册路由
router.post('/regist',function(req,res){
	var obj=req.body;
	console.log(obj);
	if(!obj.cpwd||!obj.upwd){
	     res.send("密码不能为空，请确认！");
         return;
	   
	}else if(obj.cpwd!=obj.upwd){
		 res.send("密码不一致，请确认！");
         return;
	}else{
		var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
		if(!reg.test(obj.upwd)){
			res.send("密码格式不正确");
			return;
		}
	}
   
    if(!obj.uname){
 		res.send("用户名不能为空，请确认！");
		return;
    }else{
		var reg=/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/;
       if(!reg.test(obj.uname)){
			res.send("用户名格式不正确");
			return;
		}
    }
 
    if(!obj.phone){
 		res.send("手机号不能为空，请确认！");
		return;
    }else{
		  var reg=/^1(3|4|5|6|7|8|9)\d{9}$/;
       if(!reg.test(obj.phone)){
			res.send("手机格式不正确");
			return;
		}
    }


   pool.query('INSERT INTO user SET uname=?,upwd=?,phone=?',
	  [ obj.uname,obj.upwd,obj.phone],function(err,result){
		if(err) throw err;
		if(result.affectedRows>0){
			res.send("注册成功");
		}else{
			res.send("注册失败，格式不符合要求");
		}
	  }
	  );

});

//petshop添加用户登录路由(手机登录)
router.post('/login3',(req,res)=>{
  var $phone=req.body.phone;
  var $upwd=req.body.upwd;
  if(!$phone){
     res.send('手机号不能为空');
	 return;
  }
  if(!$upwd){
    res.send('密码不能为空');
    return;
  }
  pool.query('SELECT * FROM user WHERE phone=? AND upwd=?',[$phone,$upwd],(err,result)=>{
    if(err) throw err;
	if(result.length>0){
	    res.send('登录成功');
	}else{
	    res.send('登录失败，用户名或密码错误');
	}
  });
});

//导出路由器
module.exports=router;


