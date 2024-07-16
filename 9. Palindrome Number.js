//With conversion to string
/**
 * @param {x} x
 * @return {boolean}
 */
var isPalindromeString = function (x) {
    const numString = x.toString()
    const LastToFirst = []
    const FirstToLast= []

    for (let i = 0; i < numString.length; i++) {
        FirstToLast.push(numString[i])
        LastToFirst.push(numString[numString.length - 1 - i])
    }
    console.log(LastToFirst.toString() === FirstToLast.toString());

    return LastToFirst.toString() === FirstToLast.toString()
};

// isPalindromeString(12345677654321)

// =====================================================================================
// Without conversion to string
/**
 * @param {x} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

};


isPalindrome(122)