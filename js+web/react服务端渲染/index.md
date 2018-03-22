1. SEO利于搜索引擎优化
2. 优化页面的渲染速度



// 服务端渲染不会执行的方法 render之后的声明周期都是不会执行的

componentDidMount/componentWillUnmount 在服务端都是不会被调用

服务端 渲染的两个函数

React.renderToString

将React Component转化为HTML字符串，生成的HTML的DOM会带有额外属性：
各个DOM会有data-react-id属性，第一个DOM会有data-checksum属性。

React.renderToStaticMarkup

同样是将React Component转化为HTML字符串，但是生成HTML的DOM不会有额外属性，从而节省HTML字符串的大小。
