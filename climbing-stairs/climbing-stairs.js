/**
 * @param {number} n
 * @return {number}
 */

let cache = {};
var climbStairs = function(n) {
    
    if(cache[n]){
      return cache[n]
    }
    
    let result = 0;
    if(n < 2) result = 1
    else result = climbStairs(n-1) + climbStairs(n-2)   
    
    cache[n] = result
    return result
    
};