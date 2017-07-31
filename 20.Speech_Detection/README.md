# Speech Detection

> 语音输入和输出

## 要点

### 温馨提示
同样需要建立服务器才能使用

### 思路

* 新建一个语音识别的对象
* 开启该语音识别对象的识别服务
* 监听result事件，实时获取语音输入内容
* 监听end事件，当结束时再次开启语音识别，使其持续监听

### 资料

* [SpeechRecognition](https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition)
