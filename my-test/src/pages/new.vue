<template>
	<div id="max">
		<!--今日上新头部-->
		<header>
			<div id="newheader">
				<ul>
					<li class="icon iconfont icon-message" @click="chat()"></li>
					<li><input type="text" placeholder="毛衣女" @click="inp()" /></li>
					<li class="icon iconfont icon-sousuo1"></li>
				</ul>
			</div>
		</header>
		<!--导航条-->
		<article>
			<div class="view">
				<ul>
					<li v-for="(a,index) in navdata">
						<span @click="send(a,index)">
							<!--name是绑定index.js里shoes   params是绑定每个id-->
							<router-link :to="{name:'shoes',params:{id:a.id}}">{{a.name}}</router-link>
						</span>
					</li>
				</ul>
			</div>

			<div>
				<router-view :asd="tag"></router-view>
			</div>
			<!--显示的详情页-->
			<!--<home-shoes></home-shoes>-->

		</article>

	</div>
</template>
<script>
	import $ from "jquery"
	import Swiper from '../../static/swiper/swiper.min.js'
	import HomeShoes from '../pages/shoes'

	let galleryTop
	let galleryThumbs
	export default {
		name: 'main',
		data() {
			return {
				data: [],
				navdata: [],
				tag: ''
			}
		},
		created: function() {
			const self = this;
			self.$ajax.get("https://quan.lukou.com/api/tab/1?start=0")
				.then(function(res) {
					self.data = res.data.data;
					console.log(self.data)
				})

			self.$ajax.get("https://quan.lukou.com/api/tabs")
				.then(function(res) {
					self.navdata = res.data.data.list;
					console.log(res.data.data.list)
				})
		},
		methods: {
			send: function(data, index) {
				console.log(data.id + "111111")
				this.tag = data.id
			},
			inp: function() {
				this.$router.push({ //搜索框
					'path': '/inp'
				})

			},
			chat: function() { //聊天
				this.$router.push({
					'path': '/chat'
				})

			}
		},
		components: {
			HomeShoes
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@function px2rem($px, $base-font-size: 75px) {
		@return ($px / $base-font-size) * 2rem;
	}
	/*滚动条隐藏*/
	
	.view::-webkit-scrollbar {
		width: 0px
	}
	/*今日上新头部*/
	
	#max {
		/*background: url(../assets/82.jpg);*/
		background-size: 100%;
		/*今日上新头部*/
		#newheader {
			width: 100%;
			/*width: 280%;*/
			display: flex;
			padding-bottom: px2rem(10px);
			background: #FFDE48;
			>ul {
				width: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin-top: 10px;
				>li {
					/*width: 50px;*/
					font-size: px2rem(20px);
					input {
						width: px2rem(250px);
						height: px2rem(27px);
						border: 1px solid lightgray;
					}
				}
			}
		}
		/*路由部分*/
		article {
			.view {
				width: 100%;
				overflow: auto;
				background: #FFDE48;
				>ul {
					width: px2rem(1000px);
					overflow: auto;
					display: flex;
					>li {
						width: px2rem(120px);
						height: px2rem(30px);
						line-height: px2rem(40px);
						/*border: 1px solid red;*/
						text-align: center;
						color: black;
						span {
							>a {
								color: black;
								font-size: px2rem(15px);
								text-align: center;
								text-decoration: none;
							}
						}
						.router-link-active {
							color: black;
							font-weight: 900;
							/*text-decoration: none;*/
							border-bottom: 7px solid black;
						}
					}
				}
			}
		}
	}
</style>