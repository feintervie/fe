/* eslint-disable */

// 为什么$.fn可以访问所有的jQuery属性和方法


jQuery.fn = jQuery.prototype = {
	constructor: jQuery
};


function bcsFn () {
    console.log(a);
}


function abcFn () {
    var a = 1;

    bcsFn();
}
