<template>
	<view>
		<!-- 自定义状态栏 -->
		<pageHeader/>
		<!-- 分类页面 -->
		<view class="category-box">
			<view class="category-left">
				<scroll-view scroll-y="true">
					<view v-for="(item,index) in categoryList" :key='item.id'>
						<view class="text">{{item.title}}</view>
					</view>
				</scroll-view>
			</view>
			<view class="category-right">
				
			</view>
		</view>
	</view>
</template>

<script>
	import pageHeader from '../home/pageHeader.vue'
	import interfaces from "../../../utils/interfaces.js"
	export default {
		components: {
			pageHeader
		},
		data() {
			return {
				categoryList:[]
			}
		},
		onLoad() {
			this.initData()
		},
		methods: {
			initData() {
				this.request({
					url: interfaces.getCategory,
					success: (res) => {
						const listData = res.data;
						for(var i=1; i<100; i++) {
							listData.push({
							"id": 4+i,
							"title": "测试",
							"banner": "/static/img/category/banner.jpg",
							"list": [{
								"name": "冰箱",
								"img": "1.jpg"
							}, {
								"name": "电视",
								"img": "2.jpg"
							}, {
								"name": "空调",
								"img": "3.jpg"
							}, {
								"name": "洗衣机",
								"img": "4.jpg"
							}, {
								"name": "风扇",
								"img": "5.jpg"
							}, {
								"name": "燃气灶",
								"img": "6.jpg"
							}, {
								"name": "热水器",
								"img": "7.jpg"
							}, {
								"name": "电吹风",
								"img": "8.jpg"
							}, {
								"name": "电饭煲",
								"img": "9.jpg"
							}]})
						}
						this.categoryList = listData;						
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.category-box {
		width: 100%;
		background-color: #fff;
		position: relative;
		display: flex;
		margin-top: 88px;
		border: 1px solid red;
		max-height: calc(100vh - 88upx - 50px);
		/*#ifdef APP-PLUS*/
		max-height: calc(100vh - 88upx - var(--status-bar-height));
		/*#endif*/
		/*#ifdef MP*/
		max-height: calc(100vh - 88upx);
		/*#endif*/
	}
	.category-left {
		width: 24%;
		border: 1px solid red;
		background-color: #fff;
	}
</style>
