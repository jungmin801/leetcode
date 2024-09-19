/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
    
    const ps = [];
    for(let i=1; i <= Math.sqrt(n); i++){
        ps.push(i**2);
    }
    ps.reverse();
    const queue = [[n,0]];
    const visited = new Set();
    visited.add(n);
    
    function bfs(num, c){
        for(let j=0; j<ps.length; j++){
            const nextNum = num - ps[j]; // 남은 수에서 제곱수를 뺀 값
            if (nextNum === 0) return c + 1; // 0에 도달하면 단계 수 반환
            if (nextNum > 0 && !visited.has(nextNum)) {
                queue.push([nextNum, c + 1]); 
                visited.add(nextNum)
            }
        }
    };
    
    
    while(queue.length > 0){
        const [curNum, cnt] = queue.shift();
        const result = bfs(curNum, cnt);
        if(result) return result;
    }
    
    return n;

};