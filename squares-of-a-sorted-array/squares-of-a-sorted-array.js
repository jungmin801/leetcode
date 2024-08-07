/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const arr = [];
    for(let i=0; i<nums.length; i++){
        const square = nums[i]**2;
        arr.push(square)
    }
    
    return arr.sort((a,b) => a - b);
};