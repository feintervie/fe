// https://segmentfault.com/a/1190000004076145


1. 常用的DOM创建操作

document.createElement


2.DOM 查询

document.querySelector

3. Element上相对于元素的DOM导航的方法

// 获取父元素、父节点
ele.parentElement
ele.parentNode

// 获取子节点
ele.children

// 查询子元素
ele.getElementByTagName('td');

// 当前元素的第一个/最后一个子元素节点
ele.firstElementChild
ele.lastElementChild

// 下一个/上一个兄弟节点
ele.nextElementSibling
ele.previousElementSibling


4.DOM 更改

// 添加删除子元素

ele.appendChild
ele.removeChild


// 替换子元素

ele.replaceChild(el1, el2);

// 插入子元素
parentElement.insertBefore(newEle, referenceElement)


5.属性操作

// 获取一个{name, value}的数组
var attrs = el.attributes;

// 获取、设置属性
var c = el.getAttribute('class');
el.setAttribute('class', 'highlight');

// 判断、移除属性
el.hasAttribute('class');
el.removeAttribute('class');

// 是否有属性设置
el.hasAttributes();


// innerHTML与outerHTML的区别？
// DOM元素的innerHTML, outerHTML, innerText, outerText属性的区别也经常被面试官问到，
// 比如对于这样一个HTML元素：<div>content<br/></div>。

// innerHTML：内部HTML，content<br/>；
// outerHTML：外部HTML，<div>content<br/></div>；
// innerText：内部文本，content ；
// outerText：内部文本，content ；
// 上述四个属性不仅可以读取，还可以赋值。
// outerText和innerText的区别在于outerText赋值时会把标签一起赋值掉，另外xxText赋值时HTML特殊字符会被转义。

// jQuery的html()与innerHTML的区别？
// jQuery的.html()会调用.innerHTML来操作，但同时也会catch异常，然后用.empty(), .append()来重新操作。 这是因为IE8中有些元素的.innerHTML是只读的。
// 见：http://stackoverflow.com/questions/3563107/jquery-html-vs-innerhtml
