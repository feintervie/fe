// service-work 的功能和特性

// 1.一个独立的 worker 线程，独立于当前网页进程，有自己独立的 worker context
// 2.一旦被 install，就永远存在，除非被 uninstall
// 3.需要的时候可以直接唤醒，不需要的时候自动睡眠
// 4.可编程拦截代理请求和返回，缓存文件，缓存的文件可以被网页进程取到
// 5.离线内容开发者可控
// 6.能向客户端推送消息
// 7.不能直接操作 DOM
// 8.出于安全的考虑，必须在 HTTPS 环境下才能工作
// 9.异步实现，内部大都是通过 Promise 实现
