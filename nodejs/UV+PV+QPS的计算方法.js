

// pv 即页面的浏览量或者是点击量。用户每一次对网站中的每个网页访问均被记录1个pv。用户对同一页面的多次访问
// 访问量累计。用以衡量网站用户访问的网页数量。


// uv 是指通过互联网访问、浏览这个网页的自然人。访问您网站的一台电脑客户端为一个访客。00:00-24:00内相同的客户端只被计算一次。



// QPS = req/sec = 请求数/秒


// 【QPS计算PV和机器的方式】


// QPS = 总请求数 / ( 进程总数 *   请求时间 )
// QPS: 单个进程每秒请求服务器的成功次数

// 单台服务器每天PV计算
// 公式1：每天总PV = QPS * 3600 * 6
// 公式2：每天总PV = QPS * 3600 * 8


// 【峰值QPS和机器计算公式】
// 原理：每天80%的访问集中在20%的时间里，这20%时间叫做峰值时间
// 公式：( 总PV数 * 80% ) / ( 每天秒数 * 20% ) = 峰值时间每秒请求数(QPS)
// 机器：峰值时间每秒QPS / 单台机器的QPS   = 需要的机器



// 问：每天300w PV 的在单台机器上，这台机器需要多少QPS？
// 答：( 3000000 * 0.8 ) / (86400 * 0.2 ) = 139 (QPS)


// 问：如果一台机器的QPS是58，需要几台机器来支持？
// 答：139 / 58 = 3



申诉来说qps很少

每天10w的量的话  qps只有2

账号检测 每天50w的量  qps只有5
