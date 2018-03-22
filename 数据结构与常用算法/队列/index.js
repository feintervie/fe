/**
 * @file 队列是一种列表，只能在队尾插入元素，队首删除元素
 * @author houzhiqiang@baidu.com
 */


 function Queue() {
     this.dataStore = [];
    this.equeue = equeue;
    this.dqueue = dqueue;
    this.first = first; // 队首元素
    this.end = end;  // 队尾元素
    this.toString = toString;   // 将队列按照字符串输出
    this.empty = empty; // 判断一个队列是否为空

 }

 function equeue(el) {
     this.dataStore.push(el);
 }


 function dqueue() {
    return  this.dataStore.shift();
 }

 function first() {
    return this.dataStore[0];
 }

 function end() {
     return this.dataStore[this.dataStore.length - 1];
 }


 function toString() {
    var arr = this.dataStore;
    var resultString = '';

    for (var i = 0; i < arr.length; i++) {
        resultString += arr[i] + '\n';
    }

    return resultString;
 }


 function empty() {
     if (this.dataStore.length === 0) {
         return true;
     } else {
         return false;
     }
 }
