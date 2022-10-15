<template>
	<view class="recommendContainer">
		<swiper class="banners" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image class="bannerImg" src="https://yanxuan.nosdn.127.net/a64f1bb6383da9a04791027ff580171e.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="bannerImg" src="https://yanxuan.nosdn.127.net/dd6c3b2181338b2a87e11b13d2d460de.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item">
					<image class="bannerImg" src="https://yanxuan.nosdn.127.net/d0fa0684fc81c6c192cab0987197f686.jpg?type=webp&imageView&quality=75&thumbnail=750x0" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
	
		<!-- policyDescList 三个图标区域 -->
		<view class="policyList">
			<view class="policyItem" v-for="(item,index) in indexData.policyDescList" :key="item.desc" >
				<image class="policyImg" :src="item.icon" mode=""></image>
				<text class="content">{{item.desc}}</text>
			</view>
		</view>
	
		<!-- kingKongList 10个图标区域 -->
		<view class="kingKongList" v-if="indexData.kingKongModule">
			<view class="kingKongItem" v-for="item in indexData.kingKongModule.kingKongList" :key="item.L1Id">
				<image class="kingImage" :src="item.picUrl"></image>
				<text class="kingContent">{{item.text}}</text>
			</view>
		</view>
		
		<!-- categorymodule 分类区域 -->
		<view class="categoryModuleContainer">
			<view class="categoryItem" v-for="item in indexData.categoryModule" :key="item.titlePicUrl">
				<image class="titlePic" :src="item.titlePicUrl" mode=""></image>
				<scroll-view class="shopListScroll" scroll-x enable-flex>
					<view class="shopItem" v-for="shopItem in item.itemList" :key="shopItem.id">
						<image class="shopImg" :src="shopItem.showPicUrl" mode=""></image>
						<view class="shopInfo">{{shopItem.name}}</view>
					</view>
					<view class="shopItem more">
						<view class="shopInfo">查看更多></view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
	
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		computed:{
			...mapState({
				indexData: state => state.home.indexData
			})
		}
	}
</script>

<style lang="stylus" rel="stylesheet/stylus">
	.recommendContainer
		.banners
			width: 100%
			height: 350rpx
			.bannerImg
				width: 100%
				height: 350rpx
		.policyList
			display: flex
			.policyItem
				flex: 1
				text-align: center
				.policyImg
					width: 32rpx
					height: 32rpx
					vertical-align: middle
				.content
					font-size: 24rpx
					vertical-align: middle
				
		.kingKongList
			display: flex
			flex-wrap: wrap
			/* 
				nowrap
				    flex 的元素被摆放到到一行，这可能导致 flex 容器溢出。
					cross-start 会根据 flex-direction 的值等价于 start 或 before。为该属性的默认值。
				wrap
				    flex 元素 被打断到多个行中。
					cross-start 会根据 flex-direction 的值等价于 start 或before。
					cross-end 为确定的 cross-start 的另一端。
				wrap-reverse
				    和 wrap 的行为一样，但是 cross-start 和 cross-end 互换。
			 */
			.kingKongItem
				display: flex
				flex-direction: column
				/* 
					row
						flex 容器的主轴被定义为与文本方向相同。主轴起点和主轴终点与内容方向相同。
					row-reverse
						表现和 row 相同，但是置换了主轴起点和主轴终点
					column
						flex 容器的主轴和块轴相同。主轴起点与主轴终点和书写模式的前后点相同
					column-reverse
						表现和column相同，但是置换了主轴起点和主轴终点
				 */
				width: 20%
				.kingImage
					width: 110rpx
					height: 110rpx
					margin: 20rpx 0
				.kingContent
					font-size: 26rpx
				
		.categoryModuleContainer
			.categoryItem
				margin-bottom: 20rpx
				.titlePic
					width: 100%
					height: 370rpx
			.shopListScroll
				white-space: nowrap
				/* 
				normal
					连续的空白符会被合并，换行符会被当作空白符来处理。换行在填充「行框盒子 (line boxes)」时是必要。
				*/
				.shopItem
					width: 200rpx
					display: inline-block
					vertical-align: top
					margin-right: 20rpx
					&.more
						width: 200rpx
						height: 200rpx
						font-size: 28rpx
						line-height: 200rpx
						text-align: center
						background: #eee
					.shopImg
						width: 200rpx
						height: 200rpx
						background: #eee
					.shopInfo
						font-size: 26rpx
						white-space: pre-wrap
						display: -webkit-box
						// -webkit-line-clamp CSS 属性 可以把 块容器 中的内容限制为指定的行数。
						-webkit-line-clamp: 2
						-webkit-box-orient: vertical
						text-overflow: ellipsis // 溢出内容 省略号
						overflow: hidden // 隐藏溢出内容




		
.test
	font-size: 0
	
</style>