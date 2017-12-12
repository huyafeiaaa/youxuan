<template>
	<div class="wrap">
		<div class="tou">
			<a href="javascript:window.history.go(-1)"><span class="icon iconfont icon-fanhui"></span></a>
			<div class="inp">
				<span class="icon iconfont icon-sousuo"></span>
				<input type="text" placeholder="搜索商品，发现更多优选" v-model="word"  @keydown.13="enter()">
			</div>
			<button>搜索</button>
		</div>
		<p>热门搜索</p>
		<div class="hot">
			<ul>
				<li v-if="ind<=7" v-for="(m,ind) in hot">{{m}}</li>
			</ul>
		</div>
		<p style="margin-top: 0.2rem;">商品分类</p>

		<div class="shang">
			<ul>
				<li v-for="(a,index) in shang.list">
					<!--name是绑定gir公共组件；params是绑定id的-->
					<router-link :to="{name:'gir',params:{id:a.id}}">{{a.name}}</router-link>
				</li>
			</ul>
		</div>

		<div class="panda">
			<span>去熊猫优选APP,找更多优惠</span>
		</div>
		<div>
			<img src="http://static.anquan.org/static/outer/image/aqkx_83x30.png?id=quan.lukou.com?t=80">
		</div>

		
	</div>
</template>

<script>
	import $ from "jquery"
	export default {
		data() {
			return {
				hot: [],
				shang: [],
				word:"",
				dow:""
			}
		},
		created: function() {
			const self = this;
			self.$ajax.get("https://quan.lukou.com/api/hotWords")
				.then(function(res) {
					self.hot = res.data.data;
				})
			self.$ajax.get("https://quan.lukou.com/api/tabs")
				.then(function(res) {
					self.shang = res.data.data;
					console.log(self.data)
				})
		},
		methods:{
			enter:function(index){
				const self = this;
				self.$ajax.get("https://quan.lukou.com/api/search?word="+this.word+"&start=0&sort=0")
				.then(function(res){
					self.dow = res.data.data.list;
					console.log (self.dow)
					self.$router.push({'path':'/page'}) 
				})
				
			}
		}
	}
</script>

<style lang="scss" scoped>
	@function px2rem($px, $base-font-size: 75px) {
		@return ($px / $base-font-size) * 2rem;
	}
	
	.wrap {
		.tou {
			width: 100%;
			background: #fdde4a;
			display: flex;
			justify-content: space-between;
			padding: px2rem(10px);
			box-sizing: border-box;
			font-size: px2rem(20px);
			button {
				font-size: px2rem(20px);
				color: #3E3E3E;
				border: none;
				background: #fdde4a;
			}
			.inp {
				width: 60%;
				border: 1px solid black;
				height: 0.5rem;
				background: white;
				border-radius: 2px;
				display: flex;
				align-items: center;
				font-size: px2rem(14px);
				>span {
					font-size: px2rem(10px);
				}
				>a {
					font-size: px2rem(10px);
				}
				border: none;
				/*margin: 0 auto;*/
				height: 0.6rem;
				img {
					width: 0.4rem;
					height: 0.4rem;
					position: absolute;
					top: 0.3rem;
					left: 1.7rem;
				}
				input {
					width: 80%;
					height: 0.54rem;
					/*background: #E9E9E9;*/
					line-height: 0.34rem;
					border: none;
					font-size: 0.3rem;
					margin-left: 0.6rem;
					margin-top: 0;
				}
			}
			.sou {
				padding: 0 0.1rem;
				box-sizing: border-box;
				background: none;
				border: none;
			}
		}
		p {
			font-size: 0.35rem;
			padding: 0.2rem 0.3rem;
			box-sizing: border-box;
			color: #9D9D9D;
		}
		.hot {
			width: 100%;
			ul {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				justify-content: space-around;
				li {
					width: 21%;
					padding: 0.1rem 0;
					box-sizing: border-box;
					margin: 0.1rem 0;
					text-align: center;
					background: #F9F9F9;
				}
			}
		}
		.shang {
			width: 100%;
			ul {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				li {
					width: 25%;
					text-align: center;
					padding: 0.1rem 0;
					box-sizing: border-box;
					a {
						font-size: 0.3rem;
						color: #333;
					}
				}
			}
		}
		.panda {
			width: 100%;
			margin-top: 0.3rem;
			text-align: center;
			span {
				display: inline-block;
				padding: 0.1rem 0.1rem;
				box-sizing: border-box;
				border: 2px solid #fdde4a;
				border-radius: 2rem;
			}
		}
		div:nth-last-child(1) {
			width: 100%;
			margin-top: 2.7rem;
			text-align: center;
		}
	}
</style>