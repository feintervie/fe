/* eslint-disable */

/**
 * @file 使用构造函数call /apply可以继承父类的的属性和方法
 * @author houzhiqiang@baidu.com
 */


function Person(name) {
    this.name = name;

    this.myName = function () {
        console.log(this.name);
    };
}


function XiaoMingFn() {
    // this.name = 'xiaoming';

    Person.call(this);
}

var xiaoming = new XiaoMingFn();

var person1 = new Person('personxxx');

console.log(person1.name);
console.log(person1.myName());

console.log('-----------------------');
xiaoming.name = 'xiaoming';
console.log(xiaoming.myName());


// personxxx
// personxxx
// undefined
// -----------------------
// xiaoming
// undefined


// 使用构造函数创建对象的问题：没创建一次对象这个对象的方法都会在新的实例上创建一次，js 的function函数如下

function TestFn() {
    this.sayName = function () {};  // 第一条和第二条语句是等价的
    this.sayHello = new Function();
}
