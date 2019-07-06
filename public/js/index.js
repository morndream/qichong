/*实现“宠物种类”和“宠物”的级联下拉列表*/
    var pet_type=[
	    [{"name":'加菲猫',"value":01},
       {"name":'布偶猫',"value":02},
       {"name":'波斯猫',"value":03},
       {"name":'暹罗猫',"value":04},
			 {"name":'金吉拉',"value":05},
			 	 {"name":'其他',"value":06}],
      [{"name":'泰迪犬',"value":01},
       {"name":'金毛犬',"value":02},
       {"name":'博美犬',"value":03},
       {"name":'拉布拉多犬',"value":04},
			 {"name":'其他',"value":05}],
      [{"name":'龙猫',"value":01},
       {"name":'仓鼠',"value":02},
       {"name":'豚鼠',"value":03},
       {"name":'松鼠',"value":04},
			 {"name":'其他',"value":05}],
      [{"name":'猫粮',"value":01},
			 {"name":'狗粮',"value":02},
       {"name":'宠物笼子',"value":03},
       {"name":'宠物玩具',"value":04},
       {"name":'其他',"value":05}]
	 
	  ]
    /*在前一个select中选择省份，自动查找省份包含的城市/区列表，填充到第二个select中*/
    //DOM 4步:
    //1. 查找触发事件的元素
   var pChoose=
     document.getElementsByName("pet_choose")[0]
   var pType=
    document.getElementsByName("pet_type")[0]
   //2. 绑定事件处理函数
   //只有当selProvs中的选中项改变时才自动触发
    pChoose.onchange=function(){
    //获得当前select元素中选中项的下标位置i
    var i=this.selectedIndex;
    //只有选择的不是第一项"请选择"时
    if(i>0){//才执行查找操作
    //去cities数组中找到i-1位置的子数组
    var types=pet_type[i-1];
    //创建托盘frag
    var frag=
      document.createDocumentFragment()
    //先创建-请选择-option,添加到frag中
    var option=
    document.createElement("option");
    option.innerHTML="-请选择-";
    frag.appendChild(option);
    //遍历cts中每个城市对象
    for(var t of types){
      //没遍历一个城市就创建一个<option>元素
      var option=
        document.createElement("option");
      //将option元素添加到frag中
      frag.appendChild(option)
      //设置option的内容为当前城市名
      option.innerHTML=t.name;
    }
    //清空selCts的内容
    pType.innerHTML="";
    //将frag托盘一次性添加到selCts中
    pType.appendChild(frag); 
    //将selCts显示出来
    pType.className="";
  }else{//否则，如果选的是请选择
    //就隐藏selCts
    pType.innerHTML="";
  }
}

   /*实现“省”和“市”的级联下拉列表*/
	var cities=[
      [{"name":'东城区',"value":101},
       {"name":'西城区',"value":102},
       {"name":'海淀区',"value":103},
       {"name":'朝阳区',"value":104}],
      [{"name":'河东区',"value":201},
       {"name":'河西区',"value":202},
       {"name":'南开区',"value":203}],
      [{"name":'黄浦区',"value":301},
       {"name":'徐汇区',"value":302},
       {"name":'长宁区',"value":303},
       {"name":'普陀区',"value":304},
       {"name":'静安区',"value":305}]
	];
/*在前一个select中选择省份，自动查找省份包含的城市/区列表，填充到第二个select中*/
//DOM 4步:
//1. 查找触发事件的元素
var selProvs=
  document.getElementsByName("Province")[0]
var selCts=
  document.getElementsByName("cities")[0]
//2. 绑定事件处理函数
//只有当selProvs中的选中项改变时才自动触发
selProvs.onchange=function(){
  //获得当前select元素中选中项的下标位置i
  var i=this.selectedIndex;
  //只有选择的不是第一项"请选择"时
  if(i>0){//才执行查找操作
    //去cities数组中找到i-1位置的子数组
    var cts=cities[i-1];
    //创建托盘frag
    var frag=
      document.createDocumentFragment()
    //先创建-请选择-option,添加到frag中
    var option=
      document.createElement("option");
    option.innerHTML="-请选择-";
    frag.appendChild(option);
    //遍历cts中每个城市对象
    for(var c of cts){
      //没遍历一个城市就创建一个<option>元素
      var option=
        document.createElement("option");
      //将option元素添加到frag中
      frag.appendChild(option)
      //设置option的内容为当前城市名
      option.innerHTML=c.name;
    }
    //清空selCts的内容
    selCts.innerHTML="";
    //将frag托盘一次性添加到selCts中
    selCts.appendChild(frag); 
    //将selCts显示出来
    selCts.className="";
  }else{//否则，如果选的是请选择
    //就隐藏selCts
    selCts.innerHTML="";
  }
}
//热搜宠物JS
 function pet_change(num1){
 // 获取对象
  var Qc_Pets=document.getElementById('right_content_title').getElementsByTagName('h6');
  var Qc_ranking=document.getElementById('right_content_details').getElementsByTagName('ul');
  //遍历h6 绑定事件
  for(var i=0;i<Qc_Pets.length;i++){
  //如果num1=0/1/2 对应的ul模块就显示
  if(num1==i){
    Qc_ranking[num1].style.display = 'block';
    Qc_Pets[num1].style.background = '#806565';
    Qc_Pets[num1].style.color = '#fff';

   }else{
    //不符合的隐藏
    Qc_ranking[i].style.display = 'none';
    Qc_Pets[i].style.background = '#e9e7e8';
    Qc_Pets[i].style.color = '#806565';
  }
  }
  }
 // 收藏 添加购物车JS动态
 var shoucs=document.getElementsByClassName("shouc");
 var gouwc=document.getElementsByClassName("gouwc");
 function my_h(txt){ //鼠标悬停时样式
      txt.style.background="#f5a3a3";
      txt.style.color="#fff";
 }
 function my_out(txt){ //鼠标悬停时样式
    txt.style.background="#fff";
    txt.style.color="#666";
}
 for(var sc of shoucs){
     sc.onmouseover=function(){
         var sc=this;
         my_h(sc);
     }
     sc.onmouseout=function(){
        var sc=this;
        my_out(sc);
     }
 }
 for(var gwc of gouwc){
    gwc.onmouseover=function(){
        var gwc=this;
        my_h(gwc);
    }
    gwc.onmouseout=function(){
       var gwc=this;
       my_out(gwc);
    }
}
//推荐宠物JS动态切图
var imgs=document.getElementsByClassName("p-show");
for(var img of imgs){

     img.onmouseenter=function(){
       var img=this;
    //    获取data-toggle属性中的数据
       var src=img.getAttribute("data-toggle");
    //    将数据放入到前一个图片中
       img.parentNode.previousElementSibling.setAttribute("src",src);
     }
     img.onmouseleave=function(){
        var img=this;
         var src=img.parentNode.previousElementSibling.getAttribute("data-toggle");
        var img_prev=img.parentNode.previousElementSibling.setAttribute("src",src);
     }
}
// var img_lgs=document.querySelectorAll(".pet_module>div>div>img");
// for(var img of img_lgs){
//     img.onmouseover=function(){
//         var img=this;
//         img.nextElementSibling.style.display="block";
//     }
//     img.onmouseout=function(){
//         var img=this;
//         img.nextElementSibling.style.display="none";
//     }

// }
