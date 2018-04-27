/**
 * @file 打印日志的中间件
 * @date 2018/04/27
 * @author houzhiqiang@gmail.com
 */



function writeLog (ctx) {

    console.log(ctx.request.host);

}


module.exports = function () {

    return function * (next) {
        writeLog(this);

        if (next) {
            yield next;
        }
    }

}



// async 和await 中间件开发


module.exports = function () {

    return async function(ctx, next) {
        writeLog(ctx)

        await next();
    }
}
