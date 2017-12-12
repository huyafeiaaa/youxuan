<template>
	<div>
			<div class="connect-right" ref="viewon">
				<ul class="connectul">
					<li v-for="(n,index) in rig.categories"class="food-list-hook">
						<img v-lazy="n.imageUrl">
						<p>{{n.title}}</p>
					</li>
				</ul>
			</div>
	</div>

</template>
<script>
	import BScroll from 'better-scroll'
	export default {
		data() {
			return {
				rig: []
			}
		},
		props: ['cont'],
		computed: {
			navbar: function() {
				return this.$route.params.id
			}
		},
		mounted() {
				this.viewon = new BScroll(this.$refs.viewon, {click:true})
		},

		watch: {
			navbar: function() {
				const self = this;
				self.$ajax.get("https://quan.lukou.com/api/tab/" + this.navbar + "?start=0").then(function(res) {
					self.rig = res.data.data
					console.log(self.rig)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	@function px2rem($px, $base-font-size: 75px) {
		@return ($px / $base-font-size) * 2rem;
	}
	
		.connect-right {
			width: 100%;
			height:px2rem(550px);
			overflow: hidden;
			position: relative;

			>ul {
				width: 100%;
				height:15rem;
				display: flex;
				/*position: absolute;*/
				/*justify-content: space-around;*/
				flex-wrap: wrap;
				>li {
					width: 33%;
					text-align: center;
					/*height:px2rem(30px);
					border: 1px solid red;*/
					>img {
						width: 95%;
					}
				}
			}
		}
</style>