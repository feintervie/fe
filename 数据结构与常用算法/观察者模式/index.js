/**
 * @file 观察者模式
 * @author houzhiqiang@baidu.com
 */


var saleOffice = {}; // 定义售楼处

saleOffice.clientList = {}; // 缓存列表，存放订阅者的回调函数

saleOffice.listen = function (key, fn) {
    if (!this.clientList[key]) {  // 如果没有订阅过就添加缓存列表
        this.clientList[key] = [];
    }

    this.clientList[key].push(fn);  // 订阅的消息添加进消息缓存列表
};


saleOffice.trigger = function () {
    var key = Array.prototype.shift.call(arguments);
    var fns = this.clientList[key];  // 取出消息的回调函数集合

    if (!fns || fns.length === 0) {
        return false;
    }

    for (var i = 0; i < fns.length; i++) {
        fns[i].apply(this, arguments);
    }
};


saleOffice.listen('aa', function (name) {
    console.log(name);
});

saleOffice.listen('bb', function (name) {
    console.log(name);
});


saleOffice.trigger('aa', '我是aa');
saleOffice.trigger('bb', '我是bb');


/* javascript中发布-订阅模式的通用写法   js观察者模式的通用写法 */

var event = {
    clientList: {},
    listen: function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = [];
        }

        this.clientList[key].push(fn);

    },
    trigger: function () {
        var key = Array.prototype.shift.call(arguments);
        var fns = this.clientList[key];

        if (!fns || fns.length === 0) {
            return false;
        }

        for (var i = 0; i < fns.length; i++) {
            fns[i].apply(this, arguments);
        }
    },
    remove: function (key, fn) { // 取消订阅
        var fns = this.clientList[key];

        if (!fns) {
            return false;
        } else {
            for (var i = 0; i < fns.length; i++) {
                if (fn === fns[i]) {
                    fns.splice(i, 1);  // 删除订阅者的回调函数
                }
            }
        }
    }
};


// 定义Install Event 给任意的对象添加发布-订阅功能
var installEvent = function (obj) {
    for (var i in event) {
        if (event.hasOwnProperty(i)) {
            obj[i] = event[i];
        }
    }
};
