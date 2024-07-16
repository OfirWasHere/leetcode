/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if ((target === nums[i] + nums[j]) && i !== j) {
                return [i, j]
            }
        }
    }
}

// console.log(twoSum([3, 2, 4], 6));

var twoSumOn1 = function (nums, target) {
    let map = new Map()

    for(let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if(map.has(complement)) {
            return [map.get(complement), i]
        }
        map.set(nums[i], i)
    }

    return undefined
}


console.log(twoSumOn1([3, 2, 4], 6));
