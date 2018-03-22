

var xhr = new XMLHttpRequest();


// readystate属性为几个阶段。
xhr.onreadystatechange = function () {

    // 已经接收到服务器返回的数据并且可以在客户端使用了
    if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            console.log(xhr.responseText);
        } else {
            console.log(xhr.status);
        }
    }
};


// 请求的方法，请求的url，请求是否异步
xhr.open('GET/POST', 'url', 'true/false');

// null参数对于某些浏览器是必须的
xhr.send(null);

// 在接受请求之前可以通过abort方法来取消请求
xhr.abort();
