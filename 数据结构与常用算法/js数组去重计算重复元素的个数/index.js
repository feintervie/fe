/**
 * @file 计算数组中重复元素的个数，并且将个数和值组成对象输出
 * @author houzhiqiang@baidu.com
 */


var testArr = [1, 6, 2, 3, 3, 5, 5, 2, 5];


function uniqueObj(arr) {
    var tempObj = {};
    var resultArr = [];

    for (var i = 0; i < arr.length; i++) {
        if (tempObj[arr[i]]) {
            tempObj[arr[i]]++;
        } else {
            tempObj[arr[i]] = 1;
        }
    }


    for (var item in tempObj) {
        if (tempObj.hasOwnProperty(item)) {
            resultArr.push({
                value: item,
                count: tempObj[item]
            });
        }
    }

    // 按照count升序输出
    return resultArr.sort(function (a, b) {
        return a.count - b.count;
    });

}


console.log(uniqueObj(testArr));
