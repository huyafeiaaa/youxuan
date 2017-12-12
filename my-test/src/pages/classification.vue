<template ondragstart="return false">
	<div id="max">
		<!--今日上新头部-->
		<header>
			<div id="newheader">
				<ul>
					<li class="icon iconfont icon-message"></li>
					<li><input type="text" placeholder="毛衣女" /></li>
					<li class="icon iconfont icon-sousuo1"></li>
				</ul>
			</div>
		</header>
		<!--下面显示区域-->
		<div class="connect">
			<!--左边-->
			<div class="eachon" ref="eachon">
				<ul>															<!--遍历的时候就会有一个index值  如果index和当前相等的话就会有高亮-->
					<li v-for="(b,$index) in datas.list" class="menu-item":class="{'current':currentIndex===$index}">
						<span @click="send()">
							<router-link :to="{name:'connect',params:{id:b.id}}">{{b.name}}</router-link>
						</span>
					</li>
				</ul>
			</div>
			<!--右边-->
			<div class="viewon">
				<router-view :cont="con"></router-view>
			</div>
				
			<!--分类-->
			<!--<home-connect></home-connect>-->
		</div>

	</div>
</template>

<script>
	import Axios from 'axios'
	import BScroll from 'better-scroll'
	import HomeConnect from '@/components/connect'
	export default {
		data() {
			return {
				datas: [],
				con: '',
				listHeight:[],
				scrollY:0
			}
		},
		components: {
			HomeConnect
		},computed:{
//			当scrollY变化的时候currentindex就会跟着他发生变化
			currentIndex(){
				for(let i = 0;i < this.listHeight.length; i++){
//					获取当前索引值的高度
					let height1 = this.listHeight[i];
//					获取下一个高度
					let height2 = this.listHeight[i + 1];
					if(!height2 || (this.scrollY > height1 && this.scrollY < height2)){
						return i;
					}	
				}
				return 0;
			}
		},
		created() {
			const self = this;
			console.log(this+"aaaa")
			self.$ajax.get("https://quan.lukou.com/api/tabs").then(function(res) {
						console.log(self+"bbbb")

					self.datas = res.data.data;
					console.log("list===="+ res.data.data.list)
					self.$nextTick(() => {
						console.log(123)
						self.initScroll();
						self._calculateHeight();
					});
				})
		},
		methods: {
			send: function() {
				console.log( "111111")
//				this.con = data.id
			},
			initScroll() {
				console.log("shuju=="+this.datas.list)
				this.eachon = new BScroll(this.$refs.eachon, {
					probeType:3, // 一个探针的效果 希望scroll能实时获取滚动的位置
					click:true
				})
				this.viewon = new BScroll(this.$refs.viewon, {
					probeType:3, // 一个探针的效果
					click:true
				})
//				foodscroll.on是绑定scroll事件 里面传的一个参数 pos是位置
				this.foodsScroll.on('scroll',(pos)=>{
//					返回 double 值的绝对值
					this.scrollY = Math.abs(Math.round(pos.y));
				})
			},
			_calculateHeight(){
				let foodList = this.$refs.viewon.getElementsByClassName('food-list-hook');
				let height = 0;
				//先把第一个高度push进去
				this.listHeight.push(height);
//				辨识每个区间对应的高度
				for(let i=0;i<foodList.length;i++){
					let item = foodList[i];
//					累加获取每一个foodList高度
					height+=item.clientHeight;
					//把这个高度push到listheight中
					this.listHeight.push(height);
				}
			}
		}

	}
</script>

<style lang="scss" scoped="scoped">
	@function px2rem($px, $base-font-size: 75px) {
		@return ($px / $base-font-size) * 2rem;
	}
	/*最大的*/
	#max {
		width: 100%;
		/*头部*/
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
		/*下面显示区域*/
		.connect {
			display: flex;
			width: 100%;
			overflow: hidden;
			/*左边*/
			.eachon {
				width: 20%;
				/*border: 1px solid;*/
				height:px2rem(550px);
				position: relative;
				overflow: hidden;
				>ul {
					position: absolute;
					>li {
						text-align: center;
						font-size:px2rem(17px);
						color: black;
						font-weight: 700;
						width:px2rem(80px);
						height:px2rem(55px);
						line-height:px2rem(55px);
						text-overflow: ellipsis;
						/*background: #f3f5f7;*/
						>span{
							color: black;
							>a{
								color: black;
							}
						}
						
						.router-link-active{
							color:orange;
						}
							
					}
					/*.current {
						position: relative;
						margin-top: -1px;
						z-index: 10;
						font-weight:700;
						/*background:red;*/
					/*}*/
				}
			}
			/*右边*/
			.viewon{
				width: 80%;
			}
			
		}
	}
</style>