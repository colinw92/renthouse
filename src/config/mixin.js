import {
	imgBaseUrl
} from './env.js'

export const getImgPath = {
	methods: {
		//传递过来的图片地址需要处理后才能正常使用
		getImgPath(path) {
			//let suffix;
			if (!path) {
				return 'http://oq6g58zi6.bkt.clouddn.com/rent.png'
			}
			//if (path.indexOf('jpg') !== -1) {
			//	suffix = '.jpg'
			//} else {
			//	suffix = '.png'
			//}
			let url = '/' + path;
			return imgBaseUrl + url
		},
	}

}
