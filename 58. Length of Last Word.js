/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let lastWordLength = 0
    let isLastWord;
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] == ' ' && isLastWord){
            break;
        }
        else if(s[i] !== ' ') {
            lastWordLength++
            isLastWord = true;
        }
    }
    console.log(lastWordLength);
};

lengthOfLastWord('        hello World            ');