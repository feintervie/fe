

Array 数组的一些方法

.from()   将一个类数组对象转化为数组对象
.filter()  创建一个新数组，对旧数组元素应用方法

.includes()  查看数组是否包含有某元素

.map(callback)  返回一个新数组，新数组为旧数组的每一项调用回调函数后的结果

.pop()  删除数组的最后一个元素

.reduce()  对数组的每一个元素应用一个函数，将数组减少为一个值

.shift() 删除数组的第一个元素

.slice(start, end) 浅拷贝旧数组对象，新建一个新数组   参数为索引  start,end分别是闭区间


const newArray = [1,2,3].filter((item) => {
    return item
});
