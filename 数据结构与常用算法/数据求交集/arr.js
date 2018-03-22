var arr = [12, 13];
var arr2 = [];


// filter函数对数组的每项元素应用测试函数，返回true测试通过，返回false 测试不通过
arr.filter(function (n) {
    return arr2.indexOf(arr[n]) !== -1;
});
