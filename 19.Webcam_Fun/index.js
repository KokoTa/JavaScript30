const video = document.querySelector('.player')
const canvas = document.querySelector('.photo')
const strip = document.querySelector('.strip')
const snap = document.querySelector('.snap')
const ctx = canvas.getContext('2d')

// 获得视频流并显示
function getVideo() {
	navigator.mediaDevices.getUserMedia({
		video: true,
		audio: false
	})
	.then((videoStream) => {
		console.log(videoStream)
		video.src = URL.createObjectURL(videoStream) // 创建一个视频流链接
		video.play()
	})
	.catch((err) => {
		console.error('OH,Don\'t have permission to use your local cam!',err)
	})
}

function printToCanvas() {
	let width = video.videoWidth
	let height = video.videoHeight
	canvas.width = width
	canvas.height = height
	console.log(width, height)
	return setInterval(() => {
		ctx.drawImage(video, 0, 0, width, height)
		// let imageData = ctx.getImageData(0, 0, width, height)
		// 滤镜处理，比如 imageData = changeRGB(imageData)
		// ctx.putImageData(imageData, 0, 0)
	}, 16)
}

function takePhoto() {
	// 播放音效
	snap.currentTime = 0
	snap.play()

	// 截图
	let data = canvas.toDataURL('image/jpeg')
	let link = document.createElement('a')
	link.href = data
	link.innerHTML = `<img src=${data} alt="item">`
	strip.insertBefore(link, strip.firstChild)
}

getVideo()
// 当视频可以播放时执行函数
video.addEventListener('canplay', printToCanvas)