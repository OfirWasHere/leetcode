/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let result = []
    for (const num in nums) {
        if (nums.includes(target - nums[num])) {
            result.push(nums.indexOf(target - nums[num]));
        }
    }
    return result
};