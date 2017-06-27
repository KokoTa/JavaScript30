# Javascript Drum kit

> 这是一个充满啪啪啪的Demo。效果：敲打相应按键，发出声音，网页按钮相应发生改变。

## 要点

1.data-xx [自定义属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/data-*)的使用

2.ES6 `${}` [模板语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/template_strings)的使用

3.audio [事件](https://developer.mozilla.org/zh-CN/docs/Web/Guide/Events/Media_events)的设置

4.注意 transitionend 触发了两次， 添加样式发生了一次， 去除样式又发生了一次。

```
解决：我们让第一次transitionend把样式.playing移除， 当第二次transitionend发生时由于没有.playing，直接返回。

PS：若出现opacity + transform， transitionend将触发两次。
```