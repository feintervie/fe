

Array.prototype.arrUnique = Array.arrUnique  || function (arr) {
    var newArr = this.concat(arr);

    // 对newArr去重

    return newArr;
};
