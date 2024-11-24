/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [];
    const answer = Array(temperatures.length).fill(0)
    
    for(let i=0; i<temperatures.length; i++){
       while(stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]){
           let popTemp = stack.pop();
           answer[popTemp] = i - popTemp;
       }
        
        stack.push(i)
    }
    
    return answer
};