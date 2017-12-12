<template>
	<div>
		<div class="view">
				<ul>
					<li v-for="(a,index) in data.list">
						<router-link  :to="{name:'newshoes',params:{id:a.id}}">{{a.name}}</router-link>
					</li>
				</ul>
				<!--下标                                                                                              下标                                  -->
				
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>