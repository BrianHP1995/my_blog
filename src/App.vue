<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
	
	export default {
		name: 'app',
		components: {
		}
		
	}
</script>

<style>
	@import url("./common/style/base.css");
	@import url("./common/style/font.css");
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
</style>
