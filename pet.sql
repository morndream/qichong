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
phone	VARCHAR(16) NOT NULL UNIQUE,	#手机号码
avatar 	VARCHAR(128),	                #头像图片路径
user_name 	VARCHAR(32),		#用户名，如王小明
gender 	INT	                #性别  0-女  1-男
)

INSERT INTO user VALUES(NULL,"久爱成瘾","demo1234","452788531@qq.com",18123456789,NULL,"陈曦",1);