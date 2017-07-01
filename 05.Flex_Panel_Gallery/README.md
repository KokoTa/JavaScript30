# Flex Panel Gallery

> 可伸缩的图片墙

## 要点

1. [flex](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html) 布局

2. [box-sizing](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing)

3. [DOMTokenList.toggle()](https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/toggle)

4. Web Bos的写法是：点击后宽度变化 -> 触发transitionend事件 -> 文本位移； 另一种写法：让位移延迟进行，延迟时间为宽度变化的持续时间。

5. 注意.panel中的字体大小为20px, 标签p中的字体大小是以它为基准的(本来想用rem， 后来发现有大大滴问题)， 后面.open将字体大小改为40px。

6. 过渡针对具体元素。 比如：
``` css
...
.panel {
	...
	transition: all 1s cubic-bezier(0.61,-0.19, 0.7,-0.11);
	...
}
...
.panel p {
	...
	transition: transform .5s .7s;
}
...
```
前者针对：
``` css
.panel.open {
	font-size: 40px;
	flex: 5;
}
```
后者针对：
``` css
.panel.open p:first-child {
	transform: translateY(0);
}

.panel.open p:last-child {
	transform: translateY(0);
}
```
