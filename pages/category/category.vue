<template>
	<view class="categoryContainer">
		<!-- 头部区域 -->
		<view class="header">
			<view class="search">搜索商品</view>
		</view>
		
		<!-- 内容区域 -->
		<view class="contentContainer">
			<!-- 左侧区域 -->
			<view class="leftContainer">
				<scroll-view scroll-y="true" class="navScroll">
					<view class="navItem" :class="{active:navIndex === index}" @click="changeNavIndex(index)" v-for="(item,index) in categoryList" :key="item.id">
						{{item.name}}
					</view>
				</scroll-view>
			</view>
			
			<!-- 右侧区域 -->
			<view class="rightContainer">
				<scroll-view scroll-y="true"  class="shopScroll">
					<view>
						<image class="cateImg" :src="cateObj.imgUrl" mode=""></image>
						<view class="shopList">
							<view class="shopItem" v-for="item in cateObj.subCateList" :key="item.id">
								<image class="shopImg" :src="item.wapBannerUrl" mode=""></image>
								<text class="shopName" >{{item.name}}</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
		
	</view>
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		data() {
			return {
				categoryList: [], // 分类页数据
				navIndex: 0, // 导航标识index
			};
		},
		mounted(){
			this.getCateGoryDatas()
		},
		methods:{
			async getCateGoryDatas(){
				let result = await request('/getCategoryDatas');
				this.categoryList = result.data
			},
			changeNavIndex(index){
				this.navIndex = index
			}
		},
		computed:{
			cateObj(){
				return this.categoryList[this.navIndex]
			}
		}
	}
</script>

<style lang="stylus">
	.categoryContainer
		padding: 20rpx 0
		.header
			.search
				width: 92%
				height: 60rpx
				text-align: center
				line-height: 60rpx
				font-size: 26rpx
				background: #eee
				margin: 0 auto
				
		.contentContainer
			height: calc(100vh - 80rpx)
			display: flex
			border-top: 1rpx solid #eee
			box-sizing: border-box
			.leftContainer
				width: 20%
				height: 100%
				border-right: 1rpx solid #eee
				.navScroll
					height:calc(100vh - 81.5rpx)
					.navItem
						position: relative
						font-size: 26rpx
						height: 80rpx
						line-height: 80rpx
						text-align: center
					.active:before
						position: absolute
						top: 10rpx
						left: 6rpx
						content: ''
						width: 2rpx
						height: 60rpx
						background: #BB2C08
							
			.rightContainer
				width: 80%
				height: 100%
				background: #fff
				.cateImg
					width: 520rpx
					height: 190rpx
					display: block
					margin: 10rpx auto
				.shopList
					display: flex
					flex-wrap: wrap
					.shopItem
						width: 33.333%
						// text-align: center
						.shopImg
							height: 144rpx
							width: 90%
						.shopName
							font-size: 24rpx
						
			
		
</style>
