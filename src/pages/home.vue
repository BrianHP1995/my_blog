<template>
	<div class="Home" @click="linkTo()">{{name}} world-home</div>
</template>

<script>
	export default {
		data() {
			return {
				name: 'hello'
			}
		},
		methods: {
			linkTo() {
				this.$router.push({
					path: '/user'
				})
			}
		}
	}
</script>

<style>
</style>
