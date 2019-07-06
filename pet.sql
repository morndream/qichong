SET NAMES UTF8;
DROP DATABASE IF EXISTS pet;
CREATE DATABASE pet CHARSET=UTF8;
USE pet;

/**宠物家族-品种**/
CREATE TABLE pet_family(
  fid INT PRIMARY KEY AUTO_INCREMENT,  
  fname VARCHAR(32)  #类别名称
);

/**宠物表**/
CREATE TABLE pets(
lid 	INT 	PRIMARY KEY AUTO_INCREMENT,
family_id  	INT,		#所属型号家族编号
product_id  	INT,		#产品编号
title 	VARCHAR(128),		#主标题
subtitle 	VARCHAR(128),	#副标题
price 	DECIMAL(10,2),		#价格
promise 	VARCHAR(64),    #服务承诺
spec 	VARCHAR(64),           	#规格/颜色
name 	VARCHAR(32),           	#商品名称
category 	VARCHAR(32),    #所属分类
details 	VARCHAR(1024),  #产品详细说明
shelf_time 	BIGINT,         #上架时间
sold_count 	INT,            #已售出的数量
is_onsale 	BOOLEAN         #是否促销中
        
);

/**宠物图片**/
CREATE TABLE pet_pic(
pid 	INT    PRIMARY KEY AUTO_INCREMENT,	
pet_id	INT,		                        #宠物编号
sm      VARCHAR(128),            		#小图片路径
md 	VARCHAR(128),            		#中图片路径
lg 	VARCHAR(128)             		#大图片路径
);
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
/**收货地址信息**/
CREATE TABLE receiver_address(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,                #用户编号
  receiver VARCHAR(16),       #接收人姓名
  province VARCHAR(16),       #省
  city VARCHAR(16),           #市
  county VARCHAR(16),         #县
  address VARCHAR(128),       #详细地址
  cellphone VARCHAR(16),      #手机
  fixedphone VARCHAR(16),     #固定电话
  postcode CHAR(6),           #邮编
  tag VARCHAR(16),            #标签名
  is_default BOOLEAN          #是否为当前用户的默认收货地址
);
/**购物车条目**/
CREATE TABLE shoppingcart_item(
  iid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,      #用户编号
  product_id INT,   #商品编号
  count INT,        #购买数量
  is_checked BOOLEAN #是否已勾选，确定购买
);

/**用户订单**/
CREATE TABLE pet_order(
  aid INT PRIMARY KEY AUTO_INCREMENT,
  user_id INT,
  address_id INT,
  status INT,             #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
  order_time BIGINT,      #下单时间
  pay_time BIGINT,        #付款时间
  deliver_time BIGINT,    #发货时间
  received_time BIGINT    #签收时间
)AUTO_INCREMENT=10000000;

/**用户订单**/
CREATE TABLE order_detail(
  did INT PRIMARY KEY AUTO_INCREMENT,
  order_id INT,           #订单编号
  product_id INT,         #产品编号
  count INT               #购买数量
);

/****首页轮播广告商品****/
CREATE TABLE index_carousel(
  cid INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(64),
  href VARCHAR(128)
);

/****首页商品****/
CREATE TABLE index_product(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(64),
  details VARCHAR(128),
  pic VARCHAR(128),
  price DECIMAL(10,2),
  href VARCHAR(128),
  seq_recommended TINYINT,
  seq_new_arrival TINYINT,
  seq_top_sale TINYINT
);

