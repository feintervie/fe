/**
 * @file 实现原生js的indexOf方法
 * @author houzhiqiang@baidu.com
 */


Array.prototype.indexOf = Array.prototype.indexOf || function (temp) {
    if (this.length === 0) {return -1;}

    for (var i = 0; i < this.length; i++) {
        if (this[i] === temp) {
            return i;
        }
    }

    return -1;
};
