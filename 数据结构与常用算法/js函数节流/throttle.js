
/**
 * 函数节流
 * @param {*} method  要执行的函数
 * @param {*} context 在哪个作用域中执行
 */
function throttle(method, context) {
    clearTimeout(method.tId);

    method.tId = setTimeout(() => {
        method.call(context);
    }, 1000);
}
