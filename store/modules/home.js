
import request from '../../utils/request'

let state = {
	initData:'Vuex测试数据',
	indexData:{}, // 主页数据
	cateList:[]
}

const mutations = {
	changeIndexDataMutation(state, indexData){
		// 同步修改状态数据
		state.indexData = indexData;
	}
}

const actions = {
	async getIndexDataAction({commit}){
		console.log('getIndexDataAction()')
		// 1.执行异步任务
		let result = await request('/getIndexData')
		// let result = await request('/api/getIndexData')  // h5
		// console.log(result);
		// 2.触发mutations，同时将异步数据交个mutations
		commit('changeIndexDataMutation',result.data)
		// console.log(this.indexData);
	}
	
}

const getters = {
	
}

// 向外暴露
export default {
	state,
	mutations,
	actions,
	getters
}