<template>
	<div id="max">
		<p id="top">
			<a id="t-goback" href="javascript:window.history.go(-1)">
				<span class="iconfont icon-fanhui"></span>
			</a>
		</p>
		
		<h1>注册</h1>
		<div class="inp">
			<div>
				<div>
					<span class="icon iconfont icon-shouji"></span>&nbsp;&nbsp;
					<input type="text" placeholder="请输入手机号" id="user" required/>
				</div>
				<div>
					<span class="icon iconfont icon-mima"></span>&nbsp;&nbsp;
					<input type="password" placeholder="请输入密码" id="pass"required/>
				</div>
				<div>
					<span class="icon iconfont icon-yanzhengma"></span>&nbsp;&nbsp;
					<input type="text" placeholder="请输入验证码" required/>
					<button id="gets">获取验证码</button>
				</div>
			</div>
		</div>
		<!--<div id="denglu">-->
		<!--<router-link to="./denglu">注册</router-link>-->
		<button id="denglu" @click="fun()">注册</button>
		<!--</div>-->

	</div>
</template>

<script>
	import $ from "jquery"
	export default {
		methods:{
			 fun:function(){
			   const self = this ;
			    var name = $("#user").val();
			    var pw = $("#pass").val();
			    $.ajax({
			       url:"http://127.0.0.1:8084/add",
			       type:"POST",
			       data:{user:name,pass:pw},
			       success:function(res){
			       	 alert(res.status)
                      if(res.start == 200){
                           self.$router.push({name:"err"}) 
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
	
	#max {
		width: 100%;
		>#top{
			width: 100%;
			height:px2rem(30px);
			background:#FFDE47;
			font-size: px2rem(30px);
			>a{
				font-size: px2rem(30px);
				color: white;
				>span{
					font-size: px2rem(30px);
				}
			}
		}
		>h1 {
			font-size: px2rem(45px);
			text-align: center;
			margin-top: px2rem(20px);
			box-sizing: border-box;
		}
		>div {
			padding: px2rem(20px) px2rem(5px);
			box-sizing: border-box;
			width: 100%;
			>div {
				width: 100%;
				/*text-align: center;*/
				padding: px2rem(10px) px2rem(30px);
				box-sizing: border-box;
				>div {
					border: 1px solid yellow;
					margin-top: 20px;
					box-sizing: border-box;
					align-items: center;
					>span {
						font-size: px2rem(30px);
					}
					>input {
						width: px2rem(192px);
						height: px2rem(30px);
						border: none;
					}
					>button {
						height: px2rem(56px);
						background: whitesmoke;
						border: none;
						border-radius: 10%;
					}
				}
			}
		}
		#denglu {
			width: 100%;
			height: px2rem(40px);
			border: none;
			background: whitesmoke;
			border-radius: 5%;
			border: 1px solid darkgray;
			text-align: center;
			>a {
				width: 100%;
				text-align: center;
				color: black;
				font-size: px2rem(20px);
				text-align: center;
				line-height: px2rem(20px);
				text-decoration: none;
			}
			.router-link-active {
				font-weight: 700;
			}
		}
	}
</style>