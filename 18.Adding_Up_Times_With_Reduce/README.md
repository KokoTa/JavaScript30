# Adding Up Times With Reduce

> 计算所有视频加起来的总时长

## 要点

1. `[...items]` 或者 `Array.from(items)` 将类数组转化为数组

2. `[].map(parseFloat) 等于 [].map(function(x) {retunr parseFloat(x)})`， 但是注意了不可将parseFloat替换为parseInt， 原因未知

3. [mins, secs] = [xx, oo] 解构赋值

4. 计算时间的方法