/**
 * 说明：实现一个方法，用于比较两个版本号（version1、version2）
 *     如果version1 > version2，返回1；如果version1 < version2，返回-1，其他情况返回0
 *     版本号规则`x.y.z`，xyz均为大于等于0的整数，至少有x位
 * 示例：
 * compareVersion('0.1', '1.1.1'); // 返回-1
 * compareVersion('13.37', '1.2 '); // 返回1
 * compareVersion('1.1', '1.1.0'); // 返回0
 */

compareVersion('0.1', '1.1.1');
compareVersion('13.37', '1.2 ');
compareVersion('1.1', '1.1.0');



function compareVersion(version1, version2) {
    /* 功能实现 */

    const ver1 = version1 || '0.0.0';
    const ver2 = version2 || '0.0.0';

    if( ver1 === ver2) {
        return 0;
    } else {
        const verArr1 = ver1.split('.');
        const verArr2 = ver2.split('.');
        const len = verArr1.length > verArr2.length ? verArr1.length : verArr2.length;

        for (let i=0; i< len; i++) {
            let empty = 0;
            if(! verArr1[i] ||!verArr2[i] ){
                verArr1[i] = 0;
                verArr2[i] = 0;
            }


            if( i === len-1 && (verArr1[i] === verArr2[i])) {
                return 0;
            }

            if( verArr1 [i] > verArr2 [i]) {
                return 1;
            } else {
                return -1;
            }


        }

    }

}
