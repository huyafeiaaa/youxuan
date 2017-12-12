<template>
	<div class="top_logo" @click="up">
		<img src="http://img6.lukou.com/js/img/top.02912be.png">
	</div>
</template>

<script>
	export default{
		methods:{
			up:function(){
				 document.documentElement.scrollTop = document.body.scrollTop =0;
			}
			
		}
	}
</script>

<style lang="scss" scoped>
	.top_logo{
		position:absolute;
		margin-right: 0;
		z-index: 555;
		img{
			width: 0.8rem;
			height: 0.8rem;
		}
		
	}
</style>