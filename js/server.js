var sql = require('./usersql');
var mongo = new sql();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");//解析客户端请求的body中的内容
//post请求方式
app.use(bodyParser.urlencoded({ extended: true }));
//如果等于add就是注册
app.use("/add",function(req,res,next){
	res.setHeader("Access-Control-Allow-Origin","*");
//		找这个表里的用户名 如果没有注册成功
    mongo.select("table",{user:req.body.user},function(data){
    
       if(data.length == 0){
       
           mongo.insert("table",req.body,function(){
           
		      res.send({status:"注册成功",start:200})
		      
		   })
           
       }else{
       
            res.send({status:"账户已存在",start:404})
       }
   })

})
//如果等于add就是登录
app.use("/select",function(req,res,next){

	res.setHeader("Access-Control-Allow-Origin","*");
	
    mongo.select("table",{user:req.body.user},function(data){
//  	如果不等于0说明有这个用户就显示登陆成功
       if(data.length != 0){
           if(req.body.pass == data[0].pass){
                res.send({status:"登录成功",start:200})
           }else{
                res.send({status:"密码错误",start:404})
           }            
       }else{
       
            res.send({status:"账号未注册",start:404})
       }
   })

})
app.listen(8084);
