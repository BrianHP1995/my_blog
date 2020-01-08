import Vue from 'vue';
import Router from 'vue-router';

/*
	引入组件
*/
import Home from '../pages/home';
const User = () => import('../pages/user');

var routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},{
		path: '/user',
		name: 'User',
		component: User
	}
]

Vue.use(Router);

export default new Router({
	routes: routes,
	mode: 'hash'
})