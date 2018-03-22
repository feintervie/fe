




在react中使用this.setState更新组件的状态。

当使用   this.state.updata = '123';

程序并不会报错，而不会触发render函数的重新渲染。


this.props和 this.state都是异步的方法


```javascript
this.setState((prevState, props) => {
    return {
        // counter依赖了increment
        counter: prevState.counter + props.increment
    }
})



this.setState({
    counter: 112
}, () => {
    // 如果在state更新之后希望立即做一些操作，使用回调函数的方式
})
```
