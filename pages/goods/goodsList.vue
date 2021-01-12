<template>
	<h2>{{name}}</h2>
</template>

<script>
	export default {
		data() {
			return {
				name:''
			}
		},
		onLoad(potion) {
			this.name = potion.name;
			console.log(potion.name);
		}
	}
</script>

<style>
</style>
