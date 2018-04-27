1. 在JSX节点上使用匿名函数的方式绑定事件(箭头函数)
2. 使用function 函数绑定事件
3. 直接在JSX节点上使用Bind，也会在每次render的时候创建函数对象

// <button onClick={this.handleClick.bind(this)}>Click Me</button>

以上的主要区别是使用箭头函数（匿名函数）可以解决this绑定的问题。

但是通常使用的是组件方法的方式给节点绑定事件。

render函数在触发的时候会重新创建匿名函数对象，造成不必要的性能消耗。组件层次越深时性能影响会越明显。
任何上层组件的render都会触发子组件的重复渲染，重复常见事件对象



不管你在响应函数中有没有显式的声明事件参数Event，React都会把事件Event作为参数传递给响应函数，且参数Event的位置总是在其他自定义参数的后面。
可以通过arguments参数获取事件对象