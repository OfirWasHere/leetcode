/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let charMap = new Map();
    let start = 0;
    let maxLength = 0;

    for(let i = 0; i < s.length; i++) {
        const currentChar = s[i];
    
        if(charMap.has(currentChar) && charMap.get(currentChar) >= start) {
            start = charMap.get(currentChar) + 1;
        }
        charMap.set(currentChar, i)

        maxLength = Math.max(i - start + 1)
    }
    console.log(maxLength);
};

lengthOfLongestSubstring('pwwkew')