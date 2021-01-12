<template>
	<view>
		<!-- 自定义状态栏 -->
		<pageHeader/>
		<!-- 轮播图 -->
		<view class="swiper-box">
			<swiper circular="true" indicator-dots="true" autoplay='true'>
				<swiper-item v-for="item in swiperList" :key="item.id">
					<image :src="item.img"></image>
				</swiper-item>
			</swiper>
		</view>
		<!-- 分类 -->
		<view class="category">
			<view class="category-box">
				<view class="category-item" @tap="handleSelect(item)" v-for="(item, index) in categoryList" :key="index">
					<view class="category-img">
						<image :src="item.img"></image>
					</view>
					<view class="category-name">{{item.name}}</view>
				</view>
			</view>
		</view>
		<!-- 广告 -->
		<view class="">
			
		</view>
		<!-- 优惠活动 -->
	</view>
</template>

<script>
  import pageHeader from './pageHeader.vue';
  import interfaces from '../../../utils/interfaces.js'
	export default {
	  components:{
		pageHeader
	  },
	  data() {
		return {
		  swiperList: [], //轮播图
		  categoryList: [], //分类
		  promotion: [], //活动
		}
	  },
	  methods: {
		 initData() {// home initData
		   this.request({
			 url:interfaces.getMallData,
			 success: (res=>{
			   this.swiperList = res.data.swiperList;
			   this.categoryList = res.data.categoryList;
			   this.promotion = res.data.promotion;
			    })
		    })
			},
			handleSelect (item) {//category item event
			console.log(item);
				uni.navigateTo({
					// url:"/pages/goods/goodsList"
					url:"../../goods/goodsList?name=" + item.name
				})
			}
	  },
	  onLoad() {
	  	this.initData()
	  }
  }
</script>

<style lang="scss" scoped>
	.swiper-box {
		width: 100%;
		display: flex;
		justify-content: center;
	}
	swiper {
		width: 92%;
		height: 35vw;
		overflow: auto;
		border-radius: 15upx;
		margin-top: 104upx;
		/*#ifdef APP-PLUS*/
		margin-top: 180upx;
		/*#endif*/
	}
	swiper-item {
		border-radius: 15upx;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.category {
		width: 100%;
		display: flex;
		justify-content: center;
		.category-box {
			width: 92%;
			display: flex;
			flex-wrap: wrap;
			padding-bottom: 30upx;
			border-bottom: 1px solid #f6f6f6;
			.category-item {
				width: (100% / 4);
				margin-top: 50upx;
				.category-img {
					width: 100%;
					display: flex;
					justify-content: center;//垂直
					align-items: center;//水平
					image {
						width: 11vw;
						height: 11vw;
					}
				}
				.category-name {
					display: flex;
					justify-content: center;
					margin-top: 16upx;
					font-size: 24upx;
					color: #3c3c3c;
				}
			}
		}
	}
</style>
