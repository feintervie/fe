/**
 * @file 快速排序
 * @author houzhiqiang@baidu.com
 */


function quickSort(arr) {
    if (arr.length === 0) {
        return [];
    }

    var lesser = [];
    var greater = [];
    var pivot = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] >= pivot) {
            greater.push(arr[i]);
        } else {
            lesser.push(arr[i]);
        }
    }

    return quickSort(lesser).concat(pivot, quickSort(greater));
}


var arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(Math.floor(Math.random() * 10));
}

console.log(arr);
// console.log(quickSort(arr));


// 数组的sort方法时根据字符串Unicode码点进行排序的
// 升序排序

// a-b<0 |那么 a 会被排列到 b 之前；
// a-b=0 |a 和 b 的相对位置不变
// a-b>0 |b 会被排列到 a 之前

arr.sort(function (a, b) {
    return a - b;
});


console.log(arr);
