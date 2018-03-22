/**
 * @file js去重
 * @author houzhiqiang@baidu.com
 */

var arrList = [1, 1, 3, 4];

/**
 * 使用Indexof去重
 * @param {*} arr
 */
function uniqueFn(arr) {
    var result = [];

    for (var i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) < 0) {
            result.push(arr[i]);
        }
    }

    return result;
}


const newArrSet = new Set(arrList);

const newUniqueArr = [...newArrSet];

console.log(newUniqueArr);


// 使用hash表去重


function uniqueFn2(arr) {
    var result = [];
    var hashObj = {};

    for (var i = 0; i < arr.length; i++) {
        if (!hashObj[arr[i]]) {
            hashObj[arr[i]] = true;
            result.push(arr[i]);
        }
    }

    return result;
}


/* js字符串的相邻去重 */

var str = '1122dddvvvvsdsd';

function uniqueFn3(str) {
    var newStr = str[0];
    if (!str) {
        return null;
    } else {
        for (var i = 0; i < str.length; i++) {
            if (i !== 0 && str[i] !== str[i - 1]) {
                newStr += str[i];
            }
        }
    }

    return newStr;
}
