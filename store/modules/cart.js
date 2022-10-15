import Vue from 'vue'

// 管理购物车状态数据
const state = {
	cartList: [
		{
				"selected": false,
				"count": 2,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 1579033,
		            "tagId": 128111157,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1579033,
		    "sellVolume": 2650,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/4221151d461f269166b8cec5122105d8.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1539930846261,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1575512579911,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 699,
		    "categoryL2Id": 0,
		    "retailPrice": 455,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 5,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "寻找珍贵的触感，女式V领纯小山羊绒衫2.0",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/8b861989c878661d75f9b18440af2a86.png",
		    "pointsPrice": 0,
		    "simpleDesc": "性感显瘦，简洁坦率",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 300011084,
		    "displaySkuId": 300011105,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		},
		{
				"selected": true,
				"count": 3,
		    "promId": 0,
		    "showPoints": false,
		    "itemTagList": [
		        {
		            "itemId": 1579038,
		            "tagId": 128111157,
		            "freshmanExclusive": false,
		            "name": "暖冬特惠",
		            "subType": 204,
		            "forbidJump": false,
		            "type": 2
		        }
		    ],
		    "rank": 1,
		    "id": 1579038,
		    "sellVolume": 573,
		    "primaryPicUrl": "https://yanxuan-item.nosdn.127.net/6c6ef2b0a0c379ce87bfd3b67d031a5d.png",
		    "soldOut": false,
		    "sortFlag": 0,
		    "commentCount": 0,
		    "onSaleTime": 1539335121356,
		    "picMode": 1,
		    "commentWithPicCount": 0,
		    "underShelf": false,
		    "status": 2,
		    "couponConflict": true,
		    "forbiddenBuy": false,
		    "promotionDesc": "暖冬特惠",
		    "limitedFlag": 204,
		    "pieceNum": 0,
		    "itemSizeTableDetailFlag": false,
		    "forbidExclusiveCal": false,
		    "rewardShareFlag": false,
		    "updateTime": 1576475638162,
		    "showCommentEntrance": true,
		    "pieceUnitDesc": "件",
		    "specialPromTag": "",
		    "counterPrice": 899,
		    "categoryL2Id": 0,
		    "retailPrice": 585,
		    "primarySkuPreSellPrice": 0,
		    "preLimitFlag": 0,
		    "itemPromValid": true,
		    "promTag": "暖冬特惠",
		    "source": 0,
		    "points": 0,
		    "primarySkuPreSellStatus": 0,
		    "extraServiceFlag": 0,
		    "flashPageLink": "",
		    "autoOnsaleTimeLeft": 0,
		    "innerData": {},
		    "saleCenterSkuId": 0,
		    "pointsStatus": 0,
		    "extraPrice": "",
		    "colorNum": 3,
		    "showTime": 0,
		    "autoOnsaleTime": 0,
		    "preemptionStatus": 1,
		    "isPreemption": 0,
		    "zcSearchFlag": false,
		    "name": "给你妈妈的温暖，女式加厚圆领山羊绒2.0",
		    "appExclusiveFlag": false,
		    "itemType": 1,
		    "listPicUrl": "https://yanxuan-item.nosdn.127.net/aa947e0c4f062fecc07ce4bffed08535.png",
		    "pointsPrice": 0,
		    "simpleDesc": "以井然有序的优雅迎浪漫冬季",
		    "seoTitle": "",
		    "newItemFlag": false,
		    "buttonType": 0,
		    "primarySkuId": 300005452,
		    "displaySkuId": 300005451,
		    "productPlace": "",
		    "itemSizeTableFlag": false
		}
	]
}


const mutations = {
	
	addShopItemMutation(state, shopItem){
		/* 
		 思路： 
			1. 购物车已有该商品： 在原有count的基础累加1
			2. 购物车没有该商品： 添加该商品（添加count，selected）
		 */
		
		let shopObj = state.cartList.find(item => item.id === shopItem.id);
		if(shopObj){ // 已有该商品
			shopObj.count += 1;
			// console.log(state.cartList)
		}else { // 没有该商品
		
			// 非响应式属性
			// shopItem.count = 1;
			// shopItem.selected = true;
			
			// 响应式属性
			Vue.set(shopItem, 'count', 1)
			Vue.set(shopItem, 'selected', true)
			state.cartList.push(shopItem)
		}
	},
	// 修改商品数量
	// 注意点： mutation只接收两个参数， 第一个参数是state， 第二个参数是调用mutation传递的实参数据
	changeCountMutation(state, {isAdd, index}){
		if(isAdd){
			state.cartList[index].count += 1;
		}else {// 减
			// 判断商品的数量是否大于1
			if(state.cartList[index].count > 1){
				state.cartList[index].count -= 1;
			}else {
				wx.showModal({
					content: '你确认删除该商品吗',
					success: (res) => {
						if(res.confirm){
							// 用户确认删除商品
							state.cartList.splice(index, 1)
						}
					}
				})
			}
		}
	},
	changeSelectedMutation(state, {isSelected, index}){
		state.cartList[index].selected = isSelected;
	},
	// 修改全选/全不选的状态
	changeAllSelectedMutation(state, allSelected){
		state.cartList.forEach(item => item.selected = allSelected)
	}
}

const actions = {
	
}

const getters = {
	isAllSelected(state){
		// every(所有的元素都满足条件) VS some(只要 有一个满足条件就为true)
		return state.cartList.every(item => item.selected)
	},
	totalCount(state){
		return state.cartList.reduce((pre, shopItem) => {
			return pre += shopItem.selected?shopItem.count:0;
		}, 0)
	},
	totalPrice(state){
		return state.cartList.reduce((pre, shopItem) => {
			return pre += shopItem.selected?shopItem.count * shopItem.retailPrice:0;
		}, 0)
	}
}

export default {
	state,
	mutations,
	actions,
	getters
}