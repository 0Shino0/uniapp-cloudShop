<template>
	<view class='cateListContainer'>
		<swiper :indicator-dots="true" :autoplay="true" indicator-color='green' indicator-active-color='pink'>
			<swiper-item v-for="(swiperItem, index) in cateObj.category.bannerUrlList" :key='index'>
				<image :src="swiperItem" mode=""></image>
			</swiper-item>
		</swiper>
		<text class="title">{{cateObj.category.name}}</text>
		<text class="desc">{{cateObj.category.frontDesc}}</text>
		
		
		<!-- 内容列表区域 -->
		<view class="shopList">
			<view class="shopItem" @click="toDetail(shopItem)" v-for="(shopItem, index) in cateObj.itemList" :key="shopItem.id">
				<image class="shopImg" :src="shopItem.listPicUrl" mode=""></image>
				<view class="shopInfo common">{{shopItem.name}}</view>
				<view class="shopPrice common">{{shopItem.retailPrice}}</view>
			</view>
		</view>
		
	</view>
	
	
</template>

<script>
	import request from '../../utils/request.js'
	export default {
		props: ['navId'],
		data() {
			return {
				cateList: []
			}
		},
		mounted(){
			this.getindexCateList()
		},
		methods:{
			async getindexCateList(){
				let result = await request('/getindexCateList')
				// console.log(result.data);
				this.cateList = result.data;
			},
			toDetail(shopItem){
				wx.navigateTo({
					url:'/pages/detail/detail?shopItem='+ JSON.stringify(shopItem)
				})
			},
		},

		computed: {
			cateObj(){
				let result = this.cateList.find(item => item.category.parentId === this.navId)
				// console.log(result);
				return result
			}
		}
	}
</script>

<style lang="stylus">
	.cateListContainer 
		swiper 
			width 100%
			height 370upx
			image 
				width 100%
				height 100%
		.title
			display block
			text-align center
			font-size 34upx
			color #333
			line-height 70upx
		.desc
			display block
			text-align center
			font-size 24upx
			color #999
			line-height 40upx
		.shopList
			display: flex
			flex-wrap: wrap
			justify-content: space-around
			&:after
				//在最后手动添加一个元素
				content: ''
				width: 344rpx
			.shopItem
				width: 344rpx
				.shopImg
					width: 344rpx
					height: 344rpx
				.common
					font-size: 26rpx
					line-height: 50rpx
					&.shopPrice
						color: red
						font-weight: bold
			
		
				
</style>
