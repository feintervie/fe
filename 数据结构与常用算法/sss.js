
// 匹配中括号中的字符   (\[.*?\])

function decodeString(str) {
    /* 功能实现 */

    const regxOb = new RegExp('(\\[.*?\\])');

    if (str) {
        const dataArr = /(\[.*?\])/.exec(str);

        console.log(dataArr[0]);
        console.log(dataArr);

    } else {
        return str;
    }

}


decodeString('3[a]2[bc]');
