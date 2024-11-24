/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    let result = true;
    if(s.length < 2) return false;
    for(let i=0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] ==='{'){
            stack.push(s[i])
            continue;
        } else if(s[i] === ')'){
            if(stack[stack.length - 1] === '(') stack.pop()
            else {
                result=false;
                break;
            }
        } else if(s[i] === ']') {
            if(stack[stack.length - 1] === '[') stack.pop()
            else {
                result=false;
                break;
            }
        } else if(s[i] === '}') {
            if(stack[stack.length - 1] === '{') stack.pop()
            else {
                result=false;
                break;
            }
        }
    }
    
    if(!result || stack.length > 0 ) return false
    else return true
};