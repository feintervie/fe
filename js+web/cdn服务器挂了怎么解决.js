1.当页面内的静态文件的数量不多的时候可以使用代码动态替换cdn域名的做法

<link rel="stylesheet" href="https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css">
<script type="text/javascript" src="https://cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
...

<script>
      //判断cdn是否有效
      $.when(
          //同步方式发送请求
          $.ajax({
              url: "https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css",
              async: false
          }),
          $.ajax({
              url: "https://cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js",
              async: false
          })
          //如果链接失效，就写入本地的链接
          ).fail(function() {
              $("link[href='https://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css']").after(" < link rel = 'stylesheet' href = 'css/bootstrap.min.css' > ");
              $("script[src='https://cdn.bootcss.com/bootstrap/3.3.5/js/bootstrap.min.js'").after(" < script type = 'text/javascript' src = 'js/bootstrap.min.js' > < \/script>");
          });
 </script>




如果cdn已知且cdn域名的静态文件较多的情况下

<script src="http://cdn.static.runoob.com/libs/jquery/1.10.2/jquery.min.js"></script>
<script>window.jQuery || document.write('<script src="js/vendor/jquery-1.10.2.min.js"><\/script>')</script>


这段代码第一行很简单就是你正常引入cdn的地址。下面一行的话就是首先判断Windows.jQuery是否存在 也就是说判断一下这个CDN是不是挂掉了，如果没有挂掉，那么就直接使用，如果挂掉了，那么就要在后面引入自己的本地资源库。这样就可以保证在可以使用cdn的时候使用cdn不可以使用的时候就加载本地的。