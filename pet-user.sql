SET NAMES UTF8;
DROP DATABASE IF EXISTS pet;
CREATE DATABASE pet CHARSET=UTF8;
USE pet;
/**用户信息**/
CREATE TABLE user(
uid	INT PRIMARY KEY AUTO_INCREMENT,	
uname	VARCHAR(32),		
upwd	VARCHAR(32),		
email	VARCHAR(64),		
phone	VARCHAR(16)  UNIQUE,	#手机号码
user_name 	VARCHAR(32),		#用户名，如王小明
gender 	INT	                #性别  0-女  1-男
);
INSERT INTO user VALUES(null,'jerry','aaa123456','888888@qq.com',18112345678,'王新',0);
INSERT INTO user VALUES(null,'caty','aaa123456','666666@qq.com',18112345666,'朱小',0);
INSERT INTO user VALUES(null,'zhangs','aaa123456','666666@qq.com',18712345678,'张三',1);
INSERT INTO user VALUES(null,'lisi','aaa123456','888888@qq.com',18112345333,'李四',1);