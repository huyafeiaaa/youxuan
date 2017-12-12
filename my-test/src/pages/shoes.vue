<template>
	<div id="max">
		<!--<div  id="Loading" style="height:400px; width:100px">数据正在加载中</div>-->
		
		<div style="position: relative;" ref="recommendmax" class="recommendmax">
			<div class="top" style="position: absolute;">
				<!--轮播-->
				<div class="swiper-container swiper1">
					<ul class="swiper-wrapper">
						<li class="swiper-slide" v-for="t in datas.banners">
							<img :src="t.imageUrl">
						</li>
					</ul>
					<div class="swiper-pagination"></div>
				</div>
				<!--显示的内容-->
				<div class="wrap" :name="navbar">
					<ul>
						<li v-for="(m,index) in res">
							<!--那个显示商品的大图-->
							<img v-lazy="m.image" class="images" v-if="m.type==1">   
							<img v-lazy="m.image" class="images" v-if="m.type==2" style="height: 5rem;">
																				
							<div class="up" v-if="m.type==1">
								<span style="display: flex;">	<!--小图标-->
							<img src="https://img6.lukou.com/js/img/taobao.98caa5a.png">
							<img src="https://img6.lukou.com/js/img/baoyou.20f74bf.png">
							 <!-- 产品介绍-->   
							<button @click="send(index)"style="border: none;background: white;">{{m.title}} </button>
						</span>
								<div class="down">
									<!--<span><b>￥</b>{{m.price}}</span>-->
									<!--现价-->
									<!--<s><b>￥</b>{{m.originPrice}}</s>-->
									<!--原价-->

									<div class="right">
										<!--<span>{{m.couponValue}}</span>-->
										<!--多少钱的券-->
									</div>
								</div>

							</div>

						</li>
					</ul>
				</div>
				
				
			</div>
		</div>
		{{$route.params.id}}
		
		
	</div>
</template>
<script>
	import $ from "jquery"
	import Swiper from '../../static/swiper/swiper.min.js'
	import BScroll from 'better-scroll'
	import Vue from 'vue'
	
	let galleryTop
	let galleryThumbs
	export default {
		name: 'main',
		data() {
			return {
				datas: [],
				infor: '',
				data: [],
				routeId: "1"
			}
		},
		props: ['asd'],  // 从导航(传来的数据)中
		mounted() {   
			this.$ajax.get("https://quan.lukou.com/api/tab/1?start=0").then(res => {
				this.datas = res.data.data
				console.log(res.data);
				this.$nextTick(() => {
					this._initScroll();
				});
			})
			this.lunbo()

		},

		methods: {
			send: function(index) {
//				alert('跳过去了');
			this.$router.push({'path':'/homepage'})   //	点击跳到详情页
				this.$store.commit('gets',index)    // 触发状态 获得详情页的数据
			},
		_initScroll() {   	// better-scroll
				this.recommendmax = new BScroll(this.$refs.recommendmax, {
					probeType: 3
				})
				this.lunbo();
			},
			lunbo() {    //轮播
				setTimeout(function() {
					var swiper = new Swiper(".swiper1", {
						autoplay: "2000",
						loop: "true",
						pagination: ".swiper-pagination",
						paginationClickable: true
					})
				}, 1000)

			}
		},
		computed: {
		res(){        //	每页的数据
				return this.$store.state.res
			},
//			导航
			navbar: function() {
//				console.log("navbar===" + this.routeId)
				console.log(this.asd)
				var self = this;
//				this.routeId = this.$route.params.id;
				this.$ajax.get("https://quan.lukou.com/api/tab/" + this.asd + "?start=0").then(function(res) {
					console.log("数据+++++++" + res.data.data)
//					var obj = res.data.data;
//					self.data = obj.items.list;
//					把这些数据放到了仓库
					self.$store.state.res=res.data.data.items.list
					
				})
				return this.routeId;
			}
			
		}
	}
</script>

<style lang="scss" scoped="scoped">
	@function px2rem($px, $base-font-size: 75px) {
		@return ($px / $base-font-size) * 2rem;
	}
	/*最外层的盒子*/
	#max {
		height: 12rem;
		/*第一个父盒子*/
		.recommendmax {
			position: relative;
			overflow: hidden;
			height: 14rem;
			width: 100%;
			/*z-index: 1;*/
			/*第二个父级*/
			.top {
				width: 100%;
				position: absolute;
				/*轮播*/
				.swiper1 {
					width: 100%;
					/*margin-top: px2rem(10px);*/
					img {
						width: 100%;
						height: px2rem(160px);
					}
				}
			}
		}
	}
	
	/*显示的内容*/
	.wrap {
		width: 100%;
		margin-top: px2rem(5px);
		ul {
			width: 100%;
			display: flex;
			flex-wrap: wrap;
			li {
				width: 50%;
				/*padding: 0.1rem 0;*/
				box-sizing: border-box;
				/*text-align: center;*/
				.images {
					width: 95%;
					height: px2rem(120px);
					
				}
				.up {
					width: px2rem(180px);
					margin-top: px2rem(5px);
					height: px2rem(100px);
					span {
						font-size: px2rem(15px);
						color: #333;
						vertical-align: middle;
						img:nth-child(1) {
							width: 0.4rem;
							height: 0.4rem;
						}
						img:nth-child(2) {
							width: 0.55rem;
							height: 0.3rem;
						}
					}
					.down {
						width: 95%;
						display: flex;
						/*margin-top: px2rem(5px);*/
						position: relative;
						span:nth-child(1) {
							font-size: 0.4rem;
							/*padding: 0.1rem 0;*/
							box-sizing: border-box;
							color: #fa585a;
							b {
								font-size: px2rem(12px);
							}
						}
						s {
							font-size: px2rem(12px);
							/*padding: px2rem(5px) px2rem(6px);*/
							box-sizing: border-box;
						}
						.right {
							position: absolute;
							right: 0.3rem;
							padding: px2rem(8px) 0;
							box-sizing: border-box;
							span {
								font-size: px2rem(10px);
							}
						}
					}
				}
			}
		}
	}
</style>