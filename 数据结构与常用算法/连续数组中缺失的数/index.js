// The output of the function should be 8
var arrayOfIntegers = [2, 5, 1, 4, 9, 6, 3, 7];
var upperBound = 9;
var lowerBound = 1;

findMissingNumber(arrayOfIntegers, upperBound, lowerBound); // 8

function findMissingNumber(arrayOfIntegers, upperBound, lowerBound) {

    // Iterate through array to find the sum of the numbers
    var sumOfIntegers = 0;
    for (var i = 0; i < arrayOfIntegers.length; i++) {
        sumOfIntegers += arrayOfIntegers[i];
    }

    // 以高斯求和公式计算理论上的数组和
    // Formula: [(N * (N + 1)) / 2] - [(M * (M - 1)) / 2];
    // N is the upper bound and M is the lower bound

    var upperLimitSum = (upperBound * (upperBound + 1)) / 2;
    var lowerLimitSum = (lowerBound * (lowerBound - 1)) / 2;
    var theoreticalSum = upperLimitSum - lowerLimitSum;

    //
    return (theoreticalSum - sumOfIntegers);
}
