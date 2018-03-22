// 运营商劫持网页强行插入自己的js


主要用来定义网页可以加载那些资源，减少XXS的发生。


解决的方法

1、 在Html  meta标签里面写需要加载的js、css的白名单
2、 在  nginx 或者是服务端直接输出响应头来解决问题。

// http中响应头的标识字段

Content-Security-Policy: default-src 'self'