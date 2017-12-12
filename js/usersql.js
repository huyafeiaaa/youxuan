//引入mongo客户端
var MongoClient = require("mongodb").MongoClient;
 

//创建对象
var mongoCtl = function(){};

//连接数据库
mongoCtl.prototype = {
	//数据库地址
	url:"mongodb://localhost:27017/student",
	

	//连接数据库
	/*!!!! 每次操作数据库前 先连接数据库  操作完成 关闭数据库  !!!!*/
	/*  
		callback 连接成功后执行 能保证获取到数据库db
		*/
	connect:function(callback){
       
       //连接数据库
  		MongoClient.connect(this.url, function(err, db){   		
  		   if(err){
	  		   
  		       console.log("连接失败！");
  		       return;
  		   }
  		   
  		   console.log("连接成功！");
          
          mongoCtl.db = db;

  		   callback(db)
  		
  		});

    },
    
    /*关闭数据库*/
    close:function(){
	    
	    mongoCtl.db.close()
    },
	
	
	
	
	//插入数据
	/*
	   name 表名
	   data 删除的数据
	   callback  删除成功后的回调
	   
	 */
 insert:function(name,data,callback){
	
	 //先连接数据库
	 
	var self  = this; 
	self.connect(function(db){
		  
//	   console.log(name)
     //连接到表 site
     	 var collection = db.collection(name);
     	 
    //插入
        collection.insert(data, function(err, result) { 
        if(err)
		 {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
        
       //关闭数据库

       });
   

	   
	})
	     
 
 },
   
   //删除 
   /*
	   name 表名
	   data 删除的数据
	   callback  删除成功后的回调
	   
	 */
   del:function(name,data,callback){
	 
    var self = this;
	 //先连接数据库
	self.connect(function(db){
		 
		//链接到表
    var collection = db.collection(name);
    //要删除的数据  
    
     //执行删除
	  collection.remove(data,function(err,result){
		  
		  console.log("删除 === " + self)
        
    	 if(err)
        {
            console.log('Error:'+ err);
            return;
        }     
        callback(result);
        
         //关闭数据库
         self.close()
        
       
      })

		
     })


		
   },
   
   
    //删除 
   /*
	   name 表名
	   data 查询的数据
	   callback  查询成功后的回调
	   
	 */

   //查询
    select:function(name,data,callback){
	
	 var self = this;
	 
	  //先连接数据库 
	self.connect(function(db){
		    
      //连接到表  
    var collection = db.collection(name);
     //查询数据  
     collection.find(data).toArray(function(err, result) {
     if(err)
     {
      console.log('Error:'+ err);
      return;
     }     
      callback(result);
    
     //关闭数据库
 
     });

		    
	    })
	},
    
    
   //更新
   /*
	   name 表名
	   whereStr  要更新的数据
	   updateStr 更新的值
	   callback  删除成功后的回调
	   
	 */

   update:function(name,whereStr,updateStr,callback){
	   
	   
	 var self = this;
	 
	  //先连接数据库 
	 self.connect(function(db){
		    

	   //连接到表  
    var collection = db.collection(name);
    //更新数据

//     updateStr = {$set: updateStr};

   console.log("旧值"+whereStr)
      console.log("新值"+updateStr)
      /* !!!!! 注意  可选项
//      {upsert:true} 存在就更新 不存在就添加
//         {multi:true} 更新所有匹配项 否则只更新第一个
//  collection.update(whereStr,updateStr,{upsert:true},{multi:true}

*/

    collection.update(whereStr,updateStr, function(err, result) {
        if(err)
        {
            console.log('Error:'+ err);
            return;
        }  
        
        //回调 返回结果   
        callback(result);
        //关闭数据库
        self.close()
    });
    
    })
    
   } 


}


 //将数据库操作对象导出
 module.exports = mongoCtl;
 
 


