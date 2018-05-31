escape是对字符串进行编码而另外两种是对URL。

encodeURI方法不会对下列字符编码 ASCII字母 数字 ~!@#$&*()=:/,;?+'
encodeURIComponent方法不会对下列字符编码 ASCII字母 数字 ~!*()'

encodeURIComponent比encodeURI编码的范围更大。

1.编码字符串,用escape()。

2.编码url,且该url需要使用，用encodeURI，http://,encodeURIComponent(http://')=='http%3A%2F%2F',这个url拼接的网址已经不能正常访问。

如果需要编码url中参数，那么encodeURIComponent()是最好的