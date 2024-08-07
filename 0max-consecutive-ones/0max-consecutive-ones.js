/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
     let count = 0;
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) count++;
    else {
      if (count > max) {
        max = count;
      }
      count = 0;
    }

    if (i === nums.length - 1) {
      if (count > max) {
        max = count;
      }
    }
  }

  return max;
};