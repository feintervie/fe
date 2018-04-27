node-mysql中防止sql注入的方法

1. 使用escape对传入的sql查询语句的参数进行转码
2. 使用connection.query()的查询占位符，内部方法会自动对特殊字符
调用escape进行转义

var userId = 1, name = 'test';
var query = connection.query('SELECT * FROM users WHERE id = ?, name = ?', [userId, name], function(err, results) {
    // ...
});