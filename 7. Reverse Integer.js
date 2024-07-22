/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let numArr = []
    let reverseNum = []
    let isMinus = false;

    if(x < 0) {
        isMinus = true;
        x = x * -1
    }

    for (let i = 0; i < x.toString().length; i++) {
        numArr.push(Number(x.toString()[i]))
    }

    for (let j = numArr.length - 1; j >= 0; j--) {
        reverseNum += numArr[j];
    }

    console.log(isMinus ? reverseNum * -1 : reverseNum);
};

reverse(-123)