/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    const reverseAndConvertToSum = (arr) => {
        return parseInt(arr.reverse().join(''))
    };

    const reverseAndSeparate = (num) => {
        return num.toString().split("").reverse().map(r => Number(r))
    };

    const NumberOneSum = reverseAndConvertToSum(l1)
    const NumberTwoSum = reverseAndConvertToSum(l2)

    return reverseAndSeparate(NumberOneSum + NumberTwoSum)
};

console.log(
    addTwoNumbers([2, 4, 3], [5, 6, 4])
);