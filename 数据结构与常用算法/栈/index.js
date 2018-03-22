
/**
 * @file 只能从队尾添加元素的列表。“后入先出”。
 * @author houzhiqiang@baidu.com
 */


function Stack() {
    this.dataStore = [];
    this.top = 0;  // 栈顶位置
    this.push = push; // 入栈
    this.pop = pop;  // 出栈
    this.peek = peek;  // 返回栈顶元素
    this.clear = clear; // 清空
    this.length = length;  // 栈的长度
}


function push(el) {
    this.dataStore[this.top++] = el;
}

// 出栈
function pop() {
    return this.dataStore[--this.top];
}


function peek() {
    return this.dataStore[this.top - 1];
}

function clear() {
    this.top = 0;
}
function length() {
    return this.top;
}
