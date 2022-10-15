import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import cart from './modules/cart.js'

// 声明使用Vuex的扩展库
// 面试题  Vue.use()都做了那些事情 ? ?
Vue.use(Vuex)

// 1.创建store对象
const store = new Vuex.Store({
	modules:{
		home,
		cart
	}
});



export default store;