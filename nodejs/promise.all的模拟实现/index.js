/**
 * @file 模拟实现promise.all
 * @author houzhiqiang@baidu.com
 */


// 加入3个请求当3个请求都返回后执行某个函数


const requestA = promiseA;
const requestB = promiseB;
const requestC = promiseC;


function resultFnc() {
    if (requestA && requestB && requestC) {
        // 如果3个都有值说明所有结构都已经返回
    }
}

// 虽然3个请求时异步请求，但是总有一个是最后执行完，所以定义个公共函数在每次发起请求结束后都调用

function promiseA() {
    // 请求代码
    resultFnc();
}

function promiseB() {
    // 请求代码
    resultFnc();
}

function promiseC() {
    // 请求代码
    resultFnc();
}
