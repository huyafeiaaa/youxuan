<template>
	<div>
		<div class="top">购物车</div>
		<ul>
			<li v-for="(val,ind) in shoppingcar">
				<div><img :src="val.image"/></div>
				<div>
					<p>{{val.title}}</p>
					<div>
						<p>单价:{{val.price}}</p>
						<p><button @click="jian(ind)">-</button><input type="text" v-model="val.itemType" /><button @click="add(ind)">+</button></p>
					</div>
				</div>
				
			</li>
			<div style="margin-top: 100px;">
				<h1 style="font-size: 30px;">总价：{{totalplice | quzheng}}</h1>
			</div>
		</ul>
	</div>
</template>

<script>
	export default{
		computed:{
			shoppingcar:function () {
				return this.$store.state.car
			},
			totalplice:function () {
				return this.$store.getters.totalplice
			}
		},methods:{
			jian:function (ind) {
				this.$store.commit('jian',ind)
			},
			add:function (ind) {
				this.$store.commit('add',ind)
			}
		},filters:{
			quzheng:function (val) {
				return Number(val.toFixed(2))
			}
		}
	}
</script>

<style lang="scss" scoped="scoped">
@function px2rem($px, $base-font-size: 75px) {
		@return ($px / $base-font-size) * 2rem;
	}
	.top{
		width: 100%;
		text-align: center;
		font-size: px2rem(30px);
		background: #fdde4a;
	}
	ul{
		margin-top:px2rem(30px);
		box-sizing: border-box;
		width: 100%;
		height: 100%;
		li{
			width:100%;
			box-sizing: border-box;
			padding: 0.08rem;
			display: flex;
			align-items: center;
			margin-top: px2rem(20px);
			box-sizing: border-box;
			>div:nth-child(1){
				margin-right: 0.2rem;
				width: 25%;
				img{
					width: 80%;
				}
			}
			>div:nth-child(2){
				width: 45%;
				display: flex;
				flex-direction: column;
				align-content: space-around;
				>p{
					width: 80%;
					font-size: 0.12rem;
				}
				>div:nth-child(2){
					>p:nth-child(1){
						font-size: 0.12rem;
					}
					>p:nth-child(2){
						width: 100%;
						display: flex;
						button{
							width: 20%;
							border: none;
							background: #fdde4a;
							
						}
						input{
							width: 100%;
							height: px2rem(25px);
							border: none;
							background:whitesmoke;
						}
					}
				}
			}
		}
	}
</style>
