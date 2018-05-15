
/* eslint-disable */


set 无重复元素的  有序的 列表。通常用于给定的值在集合中是否存在
map 经常用于缓存频繁取用的数据



var map = Object.create(null);

普通对象存储数据时key必须为字符串类型

比如map[5] = 5; 和map['5'] = 5实际上是一样的效果。

比如  key1= {}  key2={}

map[key1] = 'foo'

map[key2] = 'foo1';

在存储的时候key1和key2会被转化为默认的字符串 即  [Object Object]



使用in操作符判断对象是否含有某属性不使用in 因为in会访问对象原型链上的对象


set 是无重复元素   有序的集合

add 往集合添加元素
size 返回集合的大小
delete  移除元素
clear   清空集合
has 判断集合是否包含某元素


const setObj =  new Set();   set对象的参数是可以迭代的对象  数组、set集合、map集合都是可以迭代的


setObj.forEach((value, key, ownerSet) => {

    // set对象上的foreach方法  value和key始终相等  ownerSet  === setObj  返回true
})


WeakSet （弱引用set集合） 可以解决内存泄露的问题。Weak  Set集合只存储对象的弱引用，并且不可以存储原始值；集合中的弱引
用如果是对象的唯一引用，则会被回收并释放相应内存；

如果在web页面中使用javascript记录了一些dom元素，这些元素可能被另一段脚本移除，而又不希望自己的代码
保留这些dom元素的最后一个引用（内存泄露）；


wekset 集合不可以迭代所以不能使用for...of循环
wekset不支持foreach方法
weakset 不支持size属性



Map数据结构   有序的

map是存储这许多键值对的有序列表其中键和值支持所有的类型

键的等价行可以使用Object.is 来判断

map对象上面的方法

set
get
has
delete
clear
size


weakmap  是存储这许多键值对的无序列表    列表的键名必须是非Null类型的对象
