/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let charArr = [...s.trim()]

    const symbObj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
        'IV': 4,
        'IX': 9,
        'XC': 40,
        'LC': 90,
        'CD': 400,
        'CM': 900,
    }
    let result = charArr.reduce((acc, el, i) => {

        if (symbObj[el + charArr[i + 1]] !== undefined) {
            acc += symbObj[el + charArr[i + 1]]
        } else {
            acc += symbObj[el]
        }
        return acc
    }, 0)

    console.log(result);
}

romanToInt("MCMXCIV")