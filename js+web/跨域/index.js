/* eslint-disable */

// 跨域的方式


// 使用jsonp的方式访问跨域的数据

// Access-Control-Allow-Origin    // 允许请求的域名，跨域的是需要设置改header头
// Access-Control-Allow-Methdo    // 允许请求的方法。

$.getJSON(url, [data], [callback]);

$.ajax({
    type: 'jsonp',
    data: {},
    url: url,
    error: function (err) {
        // $.ajax的方式jsonp无法触发error的回调
    }
});


// jsonp的限制是只能接受  get请求的数据 因为是通过动态创建 script标签的方式来获取数据


    <script src="http://jsonp.js?callback=xxx"></script>;


function jsonp(req) {
    var script = document.createElement('script');
    var url = req.url + '?callback=' + req.callback.name;
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
}


function hello(res) {
    alert('hello ' + res.data);
}
jsonp({
    url: '',
    callback: hello
});

/* 服务端代码 */

var http = require('http');
var urllib = require('url');

var port = 8080;
var data = {'data': 'world'};

http.createServer(function (req, res) {
    var params = urllib.parse(req.url, true);
    if (params.query.callback) {
        console.log(params.query.callback);
        // jsonp
        // 生成的js文件的内容 这里是js文件加载完以后，执行回调函数，并且传入数据
        var str = params.query.callback + '(' + JSON.stringify(data) + ')';
        res.end(str);
    } else {
        res.end();
    }

}).listen(port, function () {
    console.log('jsonp server is on');
});
