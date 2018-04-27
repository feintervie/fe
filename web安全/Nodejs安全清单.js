// https://zcfy.cc/article/node-js-security-checklist-risingstack

1. 配置HTTP协议头的头部

Strict-Transport-Security  强制将HTTP请求替换为HTTPS请求
X-Frame-Options 防止点击劫持
X-XSS-Protection 开启跨站脚本攻击（XSS）的过滤，大多数现代浏览器支持这个设置
X-Content-Type-Options 禁用浏览器对响应内容MIME类型的嗅探，严格使用响应的Content-Type的值
Content-Security-Policy 能有效防止多种攻击，包括跨站脚本和跨站注入