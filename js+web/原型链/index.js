ES5使用原型链来完成继承


ES6使用class来继承


class Person {
    constructor(props) {
        super(props);

        this.state = {};

    }



    sayName () {

    }
}


typescript的转码结果如下

var Person = /** @class */ (function () {
    function Person(props) {
        _this = _super.call(this, props) || this;
        this.state = {};
    }
    Person.prototype.sayName = function () {
    };
    return Person;
}());


可以发现通过ES6属性声明的方法最终编译完成是在对象的原型链上。而在constructor上声明的方法则首先执行。



而babel的转码结果则是使用defineProperties来创建对象

defineProperties 的兼容性是IE9以上

"use strict";

var _createClass = function () {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function (Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Person = function () {
    function Person(props) {
        _classCallCheck(this, Person);

        this.state = {};
    }

    _createClass(Person, [{
            key: "sayName",
            value: function sayName() {}
    }]);

    return Person;
}();
