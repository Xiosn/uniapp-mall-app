module.exports = (params) => {
	let flag = 0;
	let url = params.url;
	let method = params.method;
	let header = params.header || {};
	let data = params.data || {};
	
	//请求方式 POST GET
	if(method) {
	   method.toUpperCase();//转换大写
	   if(method == 'POST') {
		   header = {
			   "content-type":"application/x-www-form-urlencoded"
		   }
	   }
	}
	flag++;
	//网络请求动画
	if(flag == 1) {
		uni.showLoading({
			title:"locading..."
		})
	}
	//发起请求
	uni.request({
		url:url,
		method:method,
		header:header,
		data:data,
		success: (res) => {
			if(res.statusCode && res.statusCode != 200) {
				//api 错误
				uni.showModal({
					content:res.msg
				})
				return;
			}
			typeof params.success == "function" && params.success(res.data);
		},
		fail: (e) => {
			uni.showModal({
				conetent:e.msg
			})
			typeof params.fail == "function" && params.fail(e.data);
			return;
		},
		complete: (res) => {
			flag--;
			if(flag == 0) {
				uni.hideLoading();
			}
			typeof params.compile == "function" && params.compile(res.data);
			return;
		}
	})
}