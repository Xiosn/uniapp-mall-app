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
		<view class="activity">
			<text>优惠活动</text>
			<view class="promotion">
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
.promotion-content {
	
	.promotion-item {
		
		.promotion-title {
			
		}
		.promotion-info {
			
			.promotion-info-left {
				
				.promotion-ad {
					
				}
				.btn {
					
				}
			}
			.promotion-info-right {
				
				image {
				
				}
			}
		}
	}
}
</style>
