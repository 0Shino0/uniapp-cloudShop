<template>
	<view class="indexContainer">
		<!-- 头部区域 -->
		<view class="header">
			<image class="logo" src="/static/images/logo.png" mode=""></image>
			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<input type="text" value="" placeholder="搜索商品"  	placeholder-class='placeholder'>
			</view>
			<button>北方汉子</button>
		</view>
		
		<!-- 导航区域 -->
		<scroll-view class="navScroll" scroll-x="true" enable-flex v-if="indexData.kingKongModule">
			
			<view class="navItem" :class="{active:navIndex === -1}" @click="changNav(-1, 0)">
				推荐
			</view>
			<view class="navItem" @click="changNav(index,item.L1Id)" :class="{active:navIndex === index}" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="item.L1Id">
				{{item.text}}
			</view>
		</scroll-view>
		
		<!-- 内容区域 -->
		<scroll-view scroll-y="true" >
			<!-- 推荐对应组件 -->
			<!-- !!! 强制转化为bool值再取反  !!强制转化为bool值 !取反 -->
			<Recommend v-if="!!!navId"></Recommend>
			<CateList v-else :navId='navId'></CateList>
		</scroll-view>
		
	</view>
</template>

<script>
import {mapActions,mapState} from 'vuex'
import request from '../../utils/request.js'
import Recommend from '../../components/Recommend/Recommend.vue'
import CateList from '../../components/CateList/CateList.vue'

	export default {
		data() {
			return {
				// indexData: {},
				navIndex: -1,
				navId: 0, // 导航的id
			};
		},
		components:{
			Recommend,
			CateList
		},
		mounted(){
			// 测试获取store对象中的数据
			// console.log(this.$store.state.home.initData);
			
			// this.$store.dispatch('getIndexDataAction')
			// this.getIndexData();
			
			// 分发action
			this.getIndexDataAction()
		},
		methods:{
			...mapActions({
				// key: value, key:在当前组件定义的方法名,value是从store映射的函数名，注意：value不能随便写必须是store中已有的action
				getIndexDataAction: 'getIndexDataAction',
			}),
			// async getIndexData(){
			// 	// let result = await request('/getIndexData')
			// 	// let result = await request('/api/getIndexData')  // h5
			// 	// console.log(result);
			// 	// this.indexData = result.data
			// 	// console.log(this.indexData);
			// },
			changNav(navIndex,navId){
				this.navIndex = navIndex;
				this.navId = navId;
			}
		},
		computed:{
			...mapState({
				indexData: state => state.home.indexData
			})
		}
	}

</script>

<style lang="stylus">
	/* 
		styles: 
			1. 省略大括号
			2. 省略键值对的封号和冒号
			3. 支持样式缩进、嵌套
	 */
	/* 	原生css
		.title{
			color:red;
		}
		
		stylus
		.title
			color red
	*/
   .indexContainer
		.header
			display: flex
			padding: 10rpx 0
		.logo
			width: 140rpx
			height: 40rpx
			margin: 10rpx 20rpx
		.search
			position: relative
			width: 420rpx
			height: 60rpx
			background: #eee
			.iconfont
				position: absolute
				font-size: 30rpx
				top: 15rpx
				left: 10rpx
			input
				width: 370rpx
				margin-left: 50rpx
				height: 60rpx
				.placeholder
					font-size: 26rpx
					
				
				
		button
			width: 144rpx
			height: 60rpx
			text-align: center
			line-height: 60rpx
			font-size: 24rpx
			padding: 0 4rpx
			margin: 0 10rpx
			
		.navScroll
			// display: flex
			white-space: nowrap
			.navItem
				display: inline-block
				width: 140rpx
				height: 80rpx
				text-align: center
				line-height: 80rpx
				font-size: 26rpx
			// 父级引用 &代表当前位置的父级
			.active
				border-bottom: 1rpx solid #BB2C08
					
				
			


</style>
