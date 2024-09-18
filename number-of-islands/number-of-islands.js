/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandCnt = 0;
    let rows = grid.length;
    let cols = grid[0].length;

    const directions = [
        [0, 1],  // 오른쪽
        [1, 0],  // 아래
        [0, -1], // 왼쪽
        [-1, 0]  // 위
    ];

    function bfs(startRow, startCol) {
        let queue = [];
        // 큐에 넣기
        queue.push([startRow, startCol]);
        // 넣자마자 해당 위치를 0으로 변경
        grid[startRow][startCol] = '0';

        while(queue.length > 0) {
            // 맨 처음 요소를 빼기
            const [row, col] = queue.shift();

            for(let [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;

                // 범위 내에 있고, '1'인 경우만 큐에 추가
                if(newRow >= 0 && newRow < rows && newCol >= 0 && newCol < cols && grid[newRow][newCol] === '1') {
                    queue.push([newRow, newCol]);
                    grid[newRow][newCol] = '0'; // 방문 처리
                }
            }
        }
    }

    // 그리드 전체 탐색
    for(let i = 0; i < rows; i++) {
        for(let j = 0; j < cols; j++) {
            if(grid[i][j] === '1') {
                bfs(i, j);
                islandCnt++;
            }
        }
    }

    return islandCnt;
};
