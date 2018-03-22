
var testArr = [1, 2, 3, 4, 5, 6];

function shuffleFn(arr) {
    var copy = [];
    var arrLength = arr.length;
    var tempIndex = null;

    while (arrLength) {
        tempIndex = Math.floor(Math.random() * arr.length);

        // 判断随机生成的索引是否在原始数组中
        if (tempIndex in arr) {
            copy.push(arr[tempIndex]);
            delete arr[tempIndex];
            arrLength--;
        }
    }

    return copy;
}


const resultArr =  shuffleFn(testArr);

console.log(resultArr);
