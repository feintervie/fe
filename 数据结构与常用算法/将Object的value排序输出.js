/**
 * @file 将对象的按照value排序输出key的数组
 * @date 2018/05/14
 * @author houzhiqiang@gmail.com
 */


const obj = {
    a: 4,
    b: 2,
    c: 9,
    d: 2
};


// 这是使用冒泡排序
function sortValue (Obj) {
    if (Obj) {
        const arr = Object.keys(Obj);

        for (let i = 0; i < arr.length; i++) {
            for(let m=0; m< arr.length;m++) {
                if(Obj[arr[i]] > Obj[arr[m]]) {
                    [arr[i], arr[m]] = [arr[m], arr[i]];
                }
            }

        }

        return arr;
    } else {
        throw new Error('错误');
    }
}


console.log(sortValue(obj));


function quickSort (arr) {
    if (arr.length ===0) {
        return;
    } else {
        const left = [];
        const right = [];
        const index = arr[0];

        for (let i = 0; i < arr.length; i++) {
            const item = arr[i];

            if(arr[i] >= index) {
                right.push(arr[i])
            } else {
                left.push(arr[i]);
            }
        }

        return quickSort(left).concat(quickSort(right));
    }
}
