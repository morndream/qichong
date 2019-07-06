//引入express模块
const express=require('express');
//引入body-parser模块
const bodyParser=require('body-parser');
//引入用户信息模块
const userRouter=require('./routes/user.js');
const cors=require('cors');
//创建服务器
var server=express();
//跨域
server.use(cors({origin:"*"
//,credentials:true  //每次访问验证
}));

//监听端口
server.listen(8080);
//托管静态资源到public下
server.use(express.static('public'));
//使用bodyParser中间件
server.use(bodyParser.urlencoded({
	extended:false
}));
//把路由器挂载到user前缀下
server.use('/user',userRouter);