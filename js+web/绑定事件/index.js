/* eslint-disable */


// 非IE

const node = document.createElement('div');


function listenFn(event) {
    event.preventDefault();
    event.stopPropagation();
}


// true 是捕获方式  false 冒泡方式
node.addEventListener('click', listenFn, true);

// 移除事件
node.removeEventListener('click', listenFn);

// IE添加事件
node.attachEvent('click', listenFn);
// IE移除事件
node.detachEvent('click', listenFn);


// IE 和非IE的兼容性写法

function addEvent(obj, type, handle) {
    obj.addEventListener ? obj.addEventListener(type, handle, false) : obj.attachEvent(type, handle);
}
