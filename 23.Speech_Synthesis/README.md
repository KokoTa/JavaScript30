# Speech Synthesis

> 输入内容并朗读

## 要点

### 大概流程

* 建立一个语音服务对象(SpeechSynthesisUtterance)
* 设置这个语音服务对象
* 利用语音服务接口(SpeechSynthesis)来接收和控制这个对象

### 资料

* [SpeechSynthesisUtterance](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance) 包含语音服务应读取的内容和有关如何阅读的信息（例如语言，音调和音量）

* [SpeechSynthesis](https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis) 用于检索有关设备上可用的综合语音，启动和暂停语音以及其他命令的信息