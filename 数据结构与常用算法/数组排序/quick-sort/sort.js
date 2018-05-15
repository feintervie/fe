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



//  更新快速排序算法上面的快排每次递归的时候都会创建临时的两个数组时间复杂度nlogn

// 快速排序的 O(1)实现

function swap(arr, a, b){
    [arr[a], arr[b]] = [arr[b], arr[a]];
}

function quickSort2(arr) {
    return quick(arr, 0, arr.length-1);
}

function quick(arr, left, right) {
    let index;

    if(arr.length> 1) {
        index= partition(arr, left, right);

        if(left< index-1){
            quick(arr, left, index-1);
        }

        if(index< right) {
            quick(arr, index, right);
        }
    }

    return arr;
}

function partition (arr, left, right) {
    const pivot = arry[Math.floor((right+ left) / 2)];

    let i = left;
    let j = right;

    while (i <= j) {
        while (compare(arr[i], pivot) === -1) {
            i++;
        }

        while(compare(arr[j], pivot) ===1) {
            j--;
        }

        if(i<=j) {
            swap(arr, i, j);
            i++;
            j--;
        }
    }
    return i;
}


function compare(a, b) {
    if(a===b) {
        return 0;
    } else {
        return a < b ? -1 : 1;
    }
}
