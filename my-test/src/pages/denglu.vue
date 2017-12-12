<template>
	<div id="max">
		<p id="top">
			<a id="t-goback" href="javascript:window.history.go(-1)">
				<span class="iconfont icon-fanhui"></span>
			</a>
		</p>
		<h1>登录</h1>
		<div class="inp">
			<div>
				<div>
					<span class="icon iconfont icon-shouji"></span>&nbsp;&nbsp;
					<input type="text" placeholder="请输入手机号" id="user"/>
				</div>
				<div>
					<span class="icon iconfont icon-mima"></span>&nbsp;&nbsp;
					<input type="password" placeholder="请输入密码" id="pass"/>
				</div>
			</div>
		</div>
		<!--<button id="denglu">登录</button>-->
		<!--<div id="denglu">-->
			<!--<router-link to="./new">登录</router-link>-->
			<button @click="fun" id="denglu">登录</button>
		<!--</div>-->
		<ul class="footer_ul">
			<li>
				<p class="icon iconfont icon-zhifubao" style="color: dodgerblue;"></p>
				<p>支付宝</p>
			</li>
			<li>
				<p class="icon iconfont icon-weixin" style="color: limegreen;"></p>
				<p>微信</p>
			</li>
			<li>
				<p class="icon iconfont icon-weibo1" style="color: red;"></p>
				<p>微博</p>
			</li>
			<li>
				<p class="icon iconfont icon-QQ" style="color: dodgerblue;"></p>
				<p>QQ</p>
			</li>
		</ul>
	</div>
</template>

<script>
	import $ from "jquery"
	export default{
		methods:{
			 fun:function(){
			    const self =this ;
			    var name = $("#user").val();
			    var pw = $("#pass").val();
			    $.ajax({
			       url:"http://127.0.0.1:8084/select",
			       type:"POST",
			       data:{user:name,pass:pw},
			       success:function(res){
			          alert(res.status)
                      if(res.start == 200){
                           self.$router.push({name:"success"}) 
                      }
			       }
			    })
			 }
		}
		
	}
</script>

<style lang="scss" scoped="scoped">
	@function px2rem($px, $base-font-size: 75px) {
		@return ($px / $base-font-size) * 2rem;
	}
	#max{
		width: 100%;
				>#top{
			width: 100%;
			height:px2rem(30px);
			background:#FFDE47;
			font-size: px2rem(20px);
			color: white;
			>a{
				font-size: px2rem(30px);
				color: white;
				>span{
					font-size: px2rem(30px);
				}
			}
		}
		>h1{
			font-size: px2rem(45px);
			text-align: center;
			margin-top: px2rem(20px);
			box-sizing: border-box;
		}
		>div{
			padding: px2rem(20px) px2rem(5px);
			box-sizing: border-box;
			width: 100%;
			>div{
				width: 100%;
				/*text-align: center;*/
				padding:px2rem(10px) px2rem(30px);
				box-sizing: border-box;
				>div{
					border: 1px solid yellow;
					margin-top: 20px;
					box-sizing: border-box;
					align-items: center;
					>span{
						font-size: px2rem(30px);
					}
					>input{
						width: px2rem(192px);
						height: px2rem(30px);
						border: none;
					}
				}
			}
		}
		.footer_ul{
			width: 100%;
			display: flex;
			text-align: center;
			justify-content: space-around;
			padding:px2rem(40px) 0;
			font-size: px2rem(23px);
			box-sizing: border-box;
			color:gray;
			>li{
				>p:nth-of-type(1){
					font-size: px2rem(30px);
				}
			}
		}
		#denglu{
			width: 100%;
			height: px2rem(40px);
			border: none;
			background:whitesmoke;
			border-radius: 5%;
			border: 1px solid darkgray;
			/*>a{
				width: 100%;
				text-align: center;
				color: black;
				font-size: px2rem(20px);
				text-align: center;
				line-height: px2rem(20px);
				text-decoration: none;
			}
			.router-link-active{
				font-weight: 700;
			}*/
		}
	}
</style>
