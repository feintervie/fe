/**
 * @file 单例模式 只有一个实例，确保全局访问
 * @author houzhiqiang@baidu.com
 */


 var getSingle = function (fn) {
    var result = null;

    return function () {
        return result || (result = fn.apply(this, arguments));
    };
 };
