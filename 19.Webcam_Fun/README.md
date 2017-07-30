# Webcam Fun

> 使用摄像头完成视频输出/视频绘制/视频截图

## 要点

### 温馨提示
无法显示例子是因为只有在安全的连接模式下，才可以使用getUserMedia()的api获取到摄像头的视频信息，那么什么是安全连接呢，主要有HTTPS，localhost，wss,file,chrome-extension等。对于这个例子，我们通过browser-sync搭建本地localhost服务器，达到安全连接的方式。

### 主要思路
* 获取到浏览器的摄像头的影像
* 将影像的记录导出到canvas中
* 通过获取canvas中的图片信息

### 获取影像
* [MediaDevices.getUserMedia()](https://developer.mozilla.org/zh-CN/docs/Web/API/MediaDevices/getUserMedia)
* [URL.createObjectURL()](https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL)

### 绘制
* ctx.drawImage(video, x, y, width, height)
* [ctx.getImageData()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/getImageData)返回一个ImageData对象，用来描述canvas区域隐含的像素数据，这个区域通过矩形表示
* [ctx.putImageData()](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/putImageData)该方法是 Canvas 2D API 将数据从已有的 ImageData 对象绘制到位图的方法。
* imagedata中有大量的数据，其中分别代表了图片的颜色信息，分别为red，green，blue，alpha的值，因此我们可以同添加自定义滤镜，通过改变颜色的rgba的值，控制页面的效果。(此练习略过了滤镜实现)

### 快照
* [canvas.toDataURL()](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement/toDataURL)方法返回一个包含图片展示的 data URI 。可以使用 type 参数其类型，默认为 PNG 格式。图片的分辨率为96dpi

### 类似实例
[Taking still photos with WebRTC](https://developer.mozilla.org/zh-CN/docs/Web/API/WebRTC_API/Taking_still_photos)