// 评测题目: 无
/**
 * 说明：给定一个编码字符，按编码规则进行解码，输出字符串
 *     编码规则是`count[letter]`，将letter的内容count次输出，count是0或正整数，letter是区分大小写的纯字母
 * 示例：
 * const s = '3[a]2[bc]'; decodeString(s); // 返回'aaabcbc'
 * const s = '3[a2[c]]'; decodeString(s); // 返回'accaccacc'
 * const s = '2[abc]3[cd]ef'; decodeString(s); // 返回'abcabccdcdcdef'
 */


// 匹配括号间的字符  \[(.*?)\]  不能匹配嵌套的中括号

function decodeString(str) {
    /* 功能实现 */
    const dataObj  = {}；
    const resultStr = null;


}

/**
 * 说明：简单实现一个事件订阅机制，具有监听on和触发emit方法
 * 示例：
 * const event = new EventEmitter();
 * event.on('someEvent', (...args) => {
 *     console.log('some_event triggered', ...args);
 * });
 * event.emit('someEvent', 'abc', '123');
 */
class EventEmitter {
    /* 功能实现 */
}

/**
 * 说明：获取一个数字数组中的最大值
 * 示例：
 * 输入：[1, 5, 3, 9, 2, 7]
 * 输出：9
 */


/* 验证代码 */
const input = [1, 5, 3, 9, 2, 7];
const output = 9;
console.assert(getMaxFromArray(input) === output);

/**
 * 说明：计算多个区间的交集。
 *   区间用长度为2的数字数组表示，如[2, 5]表示区间2到5（包括2和5）；
 *   区间不限定方向，如[5, 2]等同于[2, 5]；
 *   实现`getIntersection`，可接收多个区间，并返回所有区间的交集（用区间表示），如空集用null表示
 * 示例：
 *   getIntersection([5, 2], [4, 9], [3, 6]); // [4, 5]
 *   getIntersection([1, 7], [8, 9]); // null
 */
function getIntersection() {
  /* 代码实现 */
}

/**
 * 说明：实现一个方法，用于比较两个版本号（version1、version2）
 *     如果version1 > version2，返回1；如果version1 < version2，返回-1，其他情况返回0
 *     版本号规则`x.y.z`，xyz均为大于等于0的整数，至少有x位
 * 示例：
 * compareVersion('0.1', '1.1.1'); // 返回-1
 * compareVersion('13.37', '1.2 '); // 返回1
 * compareVersion('1.1', '1.1.0'); // 返回0
 */

function compareVersion(version1, version2) {
    /* 功能实现 */
}
