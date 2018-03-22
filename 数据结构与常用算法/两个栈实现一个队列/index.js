/**
 * @file 使用两个栈实现一个队列
 * @author houzhiqiang@baidu.com
 */


// 仅可以使用push 和pop 方法    实现队列的equenen 和 dequenen


// 栈
function Stack() {
    var items = [];
    this.push = function (element) {
        items.push(element);
    };
    this.pop = function () {
        return items.pop();
    };
    // 返回栈顶元素
    this.peek = function () {
        return items[items.length - 1];
    };
    this.isEmpty = function () {
        return items.length === 0;
    };
    this.size = function () {
        return items.length;
    };
    this.clear = function () {
        items = [];
    };
    this.print = function () {
        console.log(items.toString());
    };
}


// 用两个栈实现队列
function Queue() {
    var stack1 = new Stack();
    var stack2 = new Stack();
    // 向队列的尾部添加元素
    this.appendTail = function (element) {
        stack1.push(element);
    };
    // 从队列头部移除元素
    this.deleteHead = function () {

        // 栈2是否为空
        if (stack2.size() <= 0) {
            while (stack1.size() > 0) {
                stack2.push(stack1.pop());
            }
            if (stack2.size() === 0) {
                return false;
            }
        }

        // 如果栈2 不为空则栈1 为空，直接pop栈2
        return stack2.pop();
    };
}

var queue = new Queue();
queue.appendTail(5);
queue.appendTail(8);
queue.appendTail(15);
queue.appendTail(2);
queue.appendTail(9);
console.log(queue.deleteHead());
queue.appendTail(100);
console.log(queue.deleteHead());
