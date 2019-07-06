//引入express模块
const express=require('express');
//引入连接池
const pool=require('../pool.js');
//创建空路由器
var router=express.Router();

//添加用户注册路由
router.post('/reg',function(req,res){
	var obj=req.body;
	console.log(obj);
    for(var key in obj){
		if(!obj[key]){
			res.send("存在空字段，请确认！");
			return;
		}
    }
	if(obj.cpwd!=obj.upwd){
	   res.send("密码不一致，请确认！");
	   return;
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

//验证注册名重复路由
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

//添加用户登录路由(账号)
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
//添加用户登录路由(手机登录)
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



//添加更改用户信息路由
router.get('/update',function(req,res){
	var obj=req.query;
	console.log(obj);
	/*
	var n=400;
	for(var key in obj){
		n++;
		if(!obj[key]){
			res.send({code:n,msg:key+'  required'});
			return;
		}
	}
    pool.query('UPDATE user SET uid=?,email=?,user_name=?,gender=?  WHERE uid=?',[
		obj.uid,obj.email,obj.user_name,obj.gender,obj.uid],function(err,result){
			if(err) throw err;
			if(result.affectedRows>0){
				res.send({code:200,msg:'update suc'});
			}else{
				  res.send({code:301,msg:'update err'})
				};
	});
	*/
});

//导出路由器
module.exports=router;


