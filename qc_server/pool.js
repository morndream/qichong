//引入数据库mysql
const mysql=require('mysql');
//创建连接池并连接数据库
var pool=mysql.createPool({
	host:'127.0.0.1',
	port:'3306',
	user:'root',
	password:'',
	database:'pet',
	connectionLimit:'20'
});

module.exports=pool;
