/**
 * @file 链表
 * @author houzhiqiang@baidu.com
 */


// 节点需要两个关键要素：1、节点的值2、指向下一个节点的链接
function Node(el) {
    this.element = el;
    this.next = null;
}


// 提供操作链表的方法
function LList() {
    this.head = new Node('head');
    this.find = find;
    this.findPrevious = findPrevious;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
}


function find(item) {
    var currentNode = this.head; // 获取整个链表

    while (currentNode.element !== item) {
        currentNode = currentNode.next;
    }

    return currentNode;

}

// 往链表添加元素
function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);

    newNode.next = current.next;
    current.next = newNode;

}

// 显示链表元素
function display() {
    var currNode = this.head;

    while (!(currNode.next === null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
    }
}


function findPrevious(item) {
    var currentNode = this.head;

    while (!(currentNode.next === null) && currentNode.next.element === item) {
        currentNode = currentNode.next;
    }

    return currentNode;
}


// 删除链表元素
function remove(item) {
    var prevItem = this.findPrevious(item);

    if (!(prevItem.next === null)) {
        prevItem.next = prevItem.next.next;
    }
}
