# Javascript CSS Clock

> 一个纯JS和CSS的时钟

## 要点

1. [box-shadow](https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-shadow) 可添加多个效果。

2. [transform-origin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transform-origin)

3. [transition-timing-function](https://developer.mozilla.org/zh-CN/docs/Web/CSS/transition-timing-function)

4. [Date](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date) 对象

5. 时间和度数的转换关系
``` javascript
const secsDeg = 90 + ((secs / 60) * 360)
const minsDeg = 90 + ((mins / 60) * 360)
const hoursDeg = 90 + ((hours / 12) * 360)
```

6. 跳帧回转问题
``` javascript
if (secsDeg === 90) secHand.style.transition = 'all 0s'
else secHand.style.transition = 'all .05s'

if (minsDeg === 90) minHand.style.transition = 'all 0s'
else minHand.style.transition = 'all .5s'

if (hoursDeg === 90) hourHand.style.transition = 'all 0s'
else hourHand.style.transition = 'all 1s'
```