

原生具备 Iterator 接口的数据结构如下。

Array
Map
Set
String
TypedArray
函数的 arguments 对象
NodeList 对象


给对象添加可遍历的属性


const obj = {
    [Symbol.iterator]: function() {
        return {
            next: function() {
                return {
                    value:1,
                    done: true
                }
            }
        }
    }
}