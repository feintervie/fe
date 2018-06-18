/* eslint-disable */

if ('a' in window) {
    var a = 'hello js';
}
console.log(a);

// 分析
// 1. 进行预解析代码,观察到有一个变量声明.
//   预解析记录var a
// 2. 预解析执行结束,开始执行代码
//   条件判断if('a' in window) => 成立 => 将a赋值: a = 'hello.js'
//   执行console.log( a ) => 'hello.js'

/*-----------------------------------------------------------------------*/

console.log(func);
var func = 123;
console.log(func);

function func() {
    console.log('Hello js');
}

// 分析
// 1. 进行预解析,观察声明有两个,一个是声明变量,一个是声明函数
//    var func被预解析记录
//    发现函数的声明, 但是func以记录过,当做重复声明,不记录
//    函数声明第二步仍然执行,将fuc与函数体连接起来
// 2. 预解析结束,开始执行代码
//    第一个console.log(func)此时为函数体,打印出函数体
//    第二个conole.log(funce)已经赋值,覆盖了函数体,打印123

/*-----------------------------------------------------------------------*/

function func1(num) {
    console.log(num);
    var num = 456;
    console.log(num);
}
var num = 123;
func1(num);

//分析
//1. 进行预解析,观察声明有两个,一个函数声明func1,一个是变量声明var num
//    func1被预解析记录,并与函数体相连
//    var num 被记录
//2. 预解析结束,开始执行代码
//    执行第一句话为:num = 123,对num进行赋值
//    调用func1( num );
//    在进入函数体前,开辟函数内存需要的内存空间,将函数的参数var num = 123进行声明
//    进入函数体,开始执行预解析,观察到有个var num,重复声明,忽略
//    执行函数体,第一个console.log( num ) => 123
//    num = 456,对num进行赋值
//    第二个console.log( num ) => 456
//    函数执行结束,回到外层


/*-----------------------------------------------------------------------*/


function func2() {
    console.log(num);
    var num = 456;    // 这里的num声明影响了func2内Num的作用域不会向全局作用域查找
    console.log(num);
}
var num = 123;
func2(num);

//分析
//1. 进行预解析, 观察到有两个声明, func2和var num
//   func2被记录,并与函数体相连
//   var num被记录
//2. 预解析结束,开始执行代码
//    执行num = 123,对num进行赋值
//    调用func( num )
//    进入函数体,进行预解析, 记录var num
//    执行第一个console.log( num ) => undefined
//    执行赋值语句, num = 456
//    执行第二个console.log( num ) => 456


/*-----------------------------------------------------------------------*/


function func3() {
    console.log(num);
    num = 456;
    console.log(num);
}
var num = 123;
func3(num);
console.log(num);

//分析
//1. 进行预解析, 观察到有两个声明,func3和var num
//    func3被记录,并与函数体相连
//    var num被记录
//2. 预解析借宿,开始执行代码
//   num = 123,进行赋值
//   调用func3( num )
//    进入函数体,进行预解析,无需要记录对象,预解析结束
//    执行第一个console.log( num ) => 此时函数的局部作用域内无num,向全局中找,全局num = 123 => 123
//    num = 456,进行赋值操作 => 更改全局中的num = 456
//    执行第二个console.log( num ) => 456
//    函数执行完毕,执行第三个console.log( num ) => 456

/*-----------------------------------------------------------------------*/


// 作用域链是在js代码预解析阶段确定的

var num = 123;

function f1() {
    console.log(num);
}

function f2() {
    var num = 456;
    f1();
}
f2();
console.log(num);

//分析
//1. 进行预解析,观察到有3个声明,两个函数声明,一个变量声明
//   var num被记录
//   f1被记录,并与函数体相连
//   f2被记录,并与函数体相连
//2. 预解析结束,开始执行代码
//    num = 123,进行赋值
//    调用f2();
//    进入f2函数体内,进行预解析, var num被记录
//    进行赋值操作 num = 456
//    调用f1()
//    进入f1函数体内,进行预解析,无需要记录对象,预解析结束
//    执行第一个console.log( num ) => 函数体内无num, 向全局作用查找, 全局num = 123 => 123
//    函数执行完毕
//    执行第二个console.log( num ) => 123

/*-----------------------------------------------------------------------*/

f2();
var num = 123;

function f1() {
    console.log(num);
}

function f2() {
    var num = 456;
    f1();
}
console.log(num);
//1. 进行预解析,观察到有3个声明,两个函数声明,一个变量声明
//   var num被记录
//   f1被记录,并与函数体相连
//   f2被记录,并与函数体相连
//2. 预解析结束,开始执行代码
//   调用f2()
//   进入f2函数体内,进行预解析, var num被记录
//   进行赋值num = 456
//   调用f1()
//   进入f1函数体内,执行第一个console.log( num ) =>函数体内无num,向全局作用域查找,此时num = undefined => undefined
//   函数执行完毕
//   num = 123,进行赋值
//   执行第二个console.log( num ) => num = 123

/*-----------------------------------------------------------------------*/



if (true) {
    function foo() {
        console.log(true);
    }
} else {
    function foo() {
        console.log(false);
    }
}
foo();

//分析
// 按照常理分析,在进行预解析阶段,第二个foo应该会覆盖掉第一个foo,可是事实确不是这样
// 这是由于if语句,形成了块级作用域,那么此时只有第一个foo暴露在了全局中,所有foo() => true
// 注意,这是由于Chorme和Firefox在去年的改版,老版本仍然打印true.

/*-----------------------------------------------------------------------*/




var length = 10;

function fn() {
    console.log(this.length)
}
var obj = {
    length: 5,
    mathod: function (fn) {
        fn();
        arguments[0]();
    }
}
obj.mathod(fn, 1);

// 10  2

/*-----------------------------------------------------------------------*/
