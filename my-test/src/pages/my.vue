<template>
	<div id="max">
		<header>
			<!--我的头部-->
			<div id="top" >
				<!--<img src="../assets/imgs/background.png">-->
				<!--<img src="../assets/imgs/background.png">-->
				<!--个人中心-->
				<div class="personal">
					<a id="t-goback" href="javascript:window.history.go(-1)">
						<span class="iconfont icon-fanhui"></span>
					</a>
					<span>个人中心</span>
					<router-link to="/shezhi">
						<span class="icon iconfont icon-shezhi"></span>
					</router-link>
						
					
				</div>
				<!--登录注册-->
				<div class="headerpaging">
					<div>
						<router-link to="./denglu">登录</router-link>
					</div>
					<div>|</div>
					<div>
						<!--<a href="shoppingcart.vue"></a>-->
						<router-link to="./zhuce">注册</router-link>
						<!--<router-view></router-view>-->
					</div>
				</div>
			</div>
		</header>
		<!--导航-->
		<div style="position: relative;overflow: hidden;height:14rem;width: 100%;" ref="nav">
			<div style="position: absolute;width: 100%;">
				<nav>
					<div class="nav">
						<div>我的订单</div>
						<div>全部订单</div>
					</div>
				</nav>
				<!--内容-->
				<article>
					<!--代付款部分-->
					<ul class="customerservice">
						<li>
							<a href="#">
								<p class="icon iconfont icon-daifukuan"></p>
								<p>代付款</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p class="icon iconfont icon-tuangou"></p>
								<p>待成团</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p class="icon iconfont icon-daishouhuo"></p>
								<p>待收货</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p class="icon iconfont icon-shouhou"></p>
								<p>售后</p>
							</a>
						</li>
					</ul>
					<!--我的优惠-->
					<ul class="service">
						<li>
							<a href="#">我的优惠券</a>
						</li>
						<li>
							<a href="#">我的收藏</a>
						</li>
						<li>
							<a href="#">我的拼团</a>
						</li>
						<li>
							<a href="#">
								<p>vip钻石卡</p>
								<p>首次开卡,立曾199元大礼包</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p>我的免单券</p>
								<p>0张</p>
							</a>
						</li>
						<li>
							<a href="#">
								<p>借钱</p>
								<p>新用户免费领1000元</p>
							</a>
						</li>
						<li>
							<a href="#" style="border-bottom: 8px solid lightgray;">客服中心</a>
						</li>
					</ul>
					<!--活动-->
						<ul class="interaction">
								<a href="#">
									<p class="icon iconfont icon-mansongyouhuiquan" style="color: orange;"></p>
									<p>推荐送券</p>
								</a>
								<a href="#">
									<p class="icon iconfont icon-yijian" style="color:mediumseagreen;"></p>
									<p>意见反馈</p>
								</a>
								<a href="#">
									<p class="icon iconfont icon-wenhao"style="color:orangered;"></p>
									<p>问大家</p>
								</a>
								<a href="#">
									<p class="icon iconfont icon-juan"style="color:red;"></p>
									<p>关于我们</p>
								</a>
								<a href="#">
									<p class="icon iconfont icon-qiandao1"style="color:lawngreen;"></p>
									<p>签到领钱</p>
								</a>
								<a href="#">
									<p class="icon iconfont icon-xingyundazhuanpan"style="color:dodgerblue;"></p>
									<p>幸运大转盘</p>
								</a>
								<a href="#">
									<p class="icon iconfont icon-1"style="color:red;"></p>
									<p>一分抽奖</p>
								</a>
								<a href="#">
									<p class="icon iconfont icon-zhaoshang"style="color:red;"></p>
									<p>开放招商</p>
								</a>
						</ul>
					
				</article>
			</div>
		</div>
	</div>
	
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		
		created() {
			this.$nextTick(() => {
				this._initScroll();

			});
		},
		methods: {
			_initScroll() {
				this.nav = new BScroll(this.$refs.nav, {
					probeType: 3
				})
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@function px2rem($px, $base-font-size: 75px) {
		@return ($px / $base-font-size) * 2rem;
	}
	
	@mixin dec {
		text-decoration: none;
	}
	
	@mixin dis {
		display: flex;
		justify-content: space-around;
	}
	
	@mixin displays {
		display: flex;
		justify-content: space-between;
	}
	
	#max {
		header {
			/*头部*/
			#top {
				width: 100%;
				height: px2rem(120px);
				background: url(../assets/imgs/background.png);
				.personal {
					width: 100%;
					display: flex;
					justify-content: space-around;
					padding-top: px2rem(9px);
					font-size: px2rem(28px);
					color: white;
					a {
						color: white;
						span {
							font-size: px2rem(25px);
							color: white;
						}
					}
				}
				/*登录注册*/
				.headerpaging {
					width: 100%;
					display: flex;
					justify-content: space-around;
					padding-top: px2rem(20px);
					padding-bottom: px2rem(30px);
					font-size: px2rem(20px);
					color: white;
					>div {
						>a {
							color: white;
							text-decoration: none;
						}
						>div:nth-of-type(1) {
							width: px2rem(100px);
							text-align: right;
							color: white;
							/*border: 1px solid red;*/
						}
						>div:nth-of-type(3) {
							width: px2rem(80px);
							text-align: left;
							color: white;
							/*border: 1px solid red;*/
						}
					}
				}
			}
		}
		/*小导航*/
		.nav {
			width: 100%;
			display: flex;
			justify-content: space-between;
			padding: px2rem(15px);
			box-sizing: border-box;
			border-bottom: 1px solid darkgray;
			font-size: px2rem(15px);
			>div:nth-of-type(2) {
				color: gray;
			}
		}
		/*代付款*/
		.customerservice {
			width: 100%;
			display: flex;
			justify-content: space-around;
			text-align: center;
			/*padding-top: px2rem(10px);*/
			padding: px2rem(10px) 0;
			color: gray;
			border-bottom: 10px solid #F5F4F7;
			>li {
				>a {
					color: gray;
					text-decoration: none;
					>p:nth-of-type(1) {
						font-size: px2rem(30px);
					}
					>p:nth-of-type(2) {
						font-size: px2rem(15px);
					}
				}
			}
		}/*我的优惠*/
		.service {
			width: 100%;
			padding: px2rem(10px);
			box-sizing: border-box;
			>li {
				border-bottom: 1px solid darkgray;
				height: px2rem(50px);
				line-height: px2rem(50px);
				align-items: center;
				>a {
					width: 100%;
					@include dec;
					color: darkgray;
					font-size: px2rem(15px);
					@include displays;
					align-items: center;
					text-align: center;
				}
			}
		}
		.interaction{
			width: 100%;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			>a{
				width: 25%;
				height: px2rem(60px);
				/*line-height: px2rem(30px);*/
				text-align: center;
				@include dec;
				font-size: px2rem(15px);
				color: black;
				font-family:courier;
				>p:nth-of-type(1){
					font-size: px2rem(30px);
				}
				
			}
		}
	}
</style>