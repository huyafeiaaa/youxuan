<template>
	<div id="max">
		<div>
			<router-view></router-view>
		</div>
		<div class="view">
			<router-link to="new"><p class="icon iconfont icon-house"></p><p>今日上新</p></router-link>
			<router-link to="classification"><p class="icon iconfont icon-leimupinleifenleileibie--1"></p><p>分类</p></router-link>
			<router-link to="shoppingcart"><p class="icon iconfont icon-aixin4"></p><p>购物车</p></router-link>
			<router-link to="my"><p class="icon iconfont icon-wode3"></p><p>我的</p></router-link>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				data: {}
			}
		},
		created() {
			this.$ajax.get("https://quan.lukou.com/api/tab/1?start=0").then(res => {
				this.data = res.data.data
				console.log(res.data.data)
			})
		}
	}
</script>

<style lang="scss" scoped="scoped">
	/*@import url("../../static/fonts/style.css");*/
	
	@function px2rem($px, $base-font-size: 75px) {
		@return ($px / $base-font-size) * 2rem;
	}
	
	* {
		margin: 0;
		padding: 0;
		list-style: none;
		font-family: "微软雅黑";
		text-decoration: none;
	}
	.view {
		font-size: px2rem(18px);
		width: 100%;
		display: flex;
		justify-content: space-around;
		position: fixed;
		bottom: 0;
		text-align: center;
		background:white;
		padding:px2rem(10px) 0 ;
		.icon {
			font-size: px2rem(25px);
		}
		a {
			color: darkgray;
			text-decoration: none;
		}
		.router-link-active {
			color:#FFDE48;
			text-decoration: none;
		}
	}
</style>