// 冒泡排序


var arr = [];

for (let i = 0; i < 100; i++) {
    arr.push(Math.floor(Math.random() * 100));
}

console.log(arr);


for (var i = 0; i < arr.length; i++) {
    for (var m = 0; m < arr.length; m++) {
        var tempValue = null;
        if (arr[i] > arr[m]) {
            tempValue = arr[m];
            arr[m] = arr[i];
            arr[i] = tempValue;
        }
    }
}

// 颠倒数组的顺序
// arr.reverse();

console.log(arr);
