

function bind (that) {
    var target = this
    var bindArgs = Array.prototype.slice.call(arguments, 1)

    function bound () {
      var callArgs = Array.prototype.slice.call(arguments)
      if (this instanceof bound) {
        return target.apply(this, callArgs.concat(bindArgs))
      } else {
        return target.apply(that, callArgs.concat(bindArgs))
      }
    }

    // 实现继承，让bound函数生成的实例通过原型链能追溯到target函数
    // 即 实例可以获取/调用target.prototype上的属性/方法
    var Empty = function () {}
    Empty.prototype = target.prototype
    bound.prototype = new Empty()  // 这里如果不加入Empty，直接bound.prototype = target.prototype的话
                                   // 改变bound.prototype则会影响到target.prototype，原型继承基本都会加入这么一个中间对象做屏障

    return bound
  }
