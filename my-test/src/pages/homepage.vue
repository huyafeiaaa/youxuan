<template>
	<div class="wrap">
		<a id="t-goback" href="javascript:window.history.go(-1)">
			<span class="iconfont icon-fanhui"></span>
		</a>
		<ul>
			<img :src="del.image" class="big_tu">
			<div class="up">
				<span>
						<img src="https://img6.lukou.com/js/img/taobao.98caa5a.png">
						<img src="https://img6.lukou.com/js/img/baoyou.20f74bf.png">
						{{del.title}}
					</span>
			</div>
		</ul>
		<div>
			<div id="car">
				<div>
					<div>
						<p>￥原价{{del.originPrice}}</p>
						<p>{{del.couponValue}}</p>
					</div>
					<div>
						<div>
							<p>{{del.expireMsg}}</p>
							<p>月销量{{del.saleNum}}</p>
							<span style="color: red;">￥领卷价 {{del.price}}</span>
						</div>
					</div>
				</div>
				<div class="bottom">
					<button @click="shoppingcar()" class="btn"style="width: 100%;height:50px;background: #fdde4a;border: none;">加入购物车</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		computed: {
			del: function() {
				return this.$store.state.homepage
			}

		},methods:{
			shoppingcar:function () {
//				把现在的这个值放到仓库里
				this.$store.state.car.push(this.del)
			}
		}

	}
</script>

<style lang="scss">
	@function px2rem($px, $base-font-size: 75px) {
		@return ($px / $base-font-size) * 2rem;
	}
	
	.wrap {
		width: 100%;
		display: flex;
		flex-direction: column;
		width: 100%;
		#t-goback{
			width: 100%;
			height: px2rem(30px);
			line-height: px2rem(30px);
			background: #fdde4a;
			>span{
				font-size: px2rem(25px);
				color: darkgray;
			}
		}
		.big_tu {
			width: 100%;
			height: px2rem(300px);
		}
		.up {
			width: 95%;
			margin-top: 0.1rem;
			height: 1rem;
			span {
				font-size: px2rem(14px);
				color: #333;
				vertical-align: middle;
				padding: px2rem(20px) px2rem(10px);
				img:nth-child(1) {
					width: px2rem(22px);
					height: px2rem(15px);
					border-radius: 2px;
				}
				img:nth-child(2) {
					width: px2rem(18px);
					height: px2rem(12px);
					border-radius: 2px;
				}
			}
		}
		#car {
			box-sizing: border-box;
			padding: px2rem(8px) px2rem(10px);
			width: 100%;
			height: 3rem;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			>div:nth-of-type(1) {
				width: 100%;
				display: flex;
				justify-content: space-between;
				align-items: center;
				>div {
					margin-top: px2rem(10px);
					box-sizing: border-box;
					>p:nth-of-type(1) {
						color: darkgray;
						font-size: px2rem(25px);
					}
					>p:nth-of-type(2) {
						width: px2rem(40px);
						height: px2rem(20px);
						text-align: center;
						line-height: px2rem(25px);
						border-radius: 5px;
					}
				}
			}
		}
		.bottom {
			width: 100%;
			bottom:0;
			position: fixed;
			.btn {
				width: 300px;
				height: px2rem(30px);
			}
		}
	}
</style>