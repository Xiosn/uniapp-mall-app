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
		<view class="bananer">
			<image src="../../../static/img/category/ad.jpg"></image>
		</view>
		<!-- 优惠活动 -->
		<view class="promotion" v-if="promotion.length > 0">
			<view class="promotion-box">
				<view class="promotion-header-title">优惠活动</view>
				<view class="promotion-content">
					<view @tap="handleSelectPromotion(item)" class="promotion-item" v-for="(item, index) in promotion" :key="index">
						<view class="promotion-title">{{item.title}}</view>
						<view class="promotion-info">
							<view class="promotion-info-left">
								<view class="promotion-ad">{{item.ad}}</view>
								<view class="btn">点击进入</view>
							</view>
							<view class="promotion-info-right">
								<image :src="item.img"></image>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
				
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
				uni.navigateTo({
					// url:"/pages/goods/goodsList"
					url:"../../goods/goodsList?name=" + item.name
				})
			},
			handleSelectPromotion(item) {
				uni.navigateTo({
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
	.bananer {
		width: 100%;
		margin-top: 50upx;
		display: flex;
		justify-content: center;
		
		image {
			width: 92%;
			height: 34vw;
			border-radius: 15upx;
			box-shadow: 0 5upx 25upx rgba(0, 0, 0, .3);
		}
	}
	.activity {
		width: 100%;
		display: flex;
		flex-direction:column;
		justify-content: center;
		text {
			width: 92%;
			font-weight: 700;
			font-size: 34upx;
			margin-top: 20upx;
		}
	}
.promotion {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: 40upx;
		.promotion-box {
			width: 92%;
			.promotion-header-title {
				margin: 10upx 0;
				padding: 20upx 10upx 0;
				width: 100%;
				box-sizing: border-box;
				font-size: 34upx;
				font-weight: 700;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.promotion-content {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				.promotion-item {
					width: 43%;
					padding: 15upx 3%;
					background-color: #ebf9f9;
					border-radius: 10upx;
					overflow: hidden;
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
					.promotion-title {
						margin-bottom: 4upx;
						height: 40upx;
						display: flex;
						align-items: center;
						font-size: 30upx;
					}
					.promotion-info {
						width: 100%;
						display: flex;
						.promotion-info-left {
							display: flex;
							flex-direction: column;
							justify-content: space-between;
							width: 50%;
							height: 18.86vw;
							flex-shrink: 0;
							.promotion-ad {
								margin-top: 4upx;
								font-size: 22upx;
								color: #acb0b0;
							}
							.btn {
								margin-bottom: 4upx;
								font-size: 24upx;
								color: #aaaaaa;
							}
						}
						.promotion-info-right {
							width: 18.86vw;
							height: 18.86vw;
							image {
								width: 18.86vw;
								height: 18.86vw;
							}
						}
					}
				}
			}
		}
	}
</style>
