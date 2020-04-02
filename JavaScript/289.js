/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 * 参考 https://leetcode-cn.com/problems/game-of-life/solution/javascripttong-su-yi-dong-zhu-shi-xiang-jin-yi-k-2/
 */
var gameOfLife = function(board) {
    // 构造新的数组
    const CopyBoard = board.map(ary => {
        return [...ary]
    })
    
    // 设置八个方向
    const idx = [0, 1, 0, -1, -1, -1, 1, 1];
    const jdx = [1, 0, -1, 0, 1, -1, 1, -1];
    
    // 遍历每个细胞
    for (let i = 0 ; i < board.length ; i++) {
        for (let j = 0 ; j < board[i].length ; j++) {
            
            // 周边活细胞统计
            let liveAmount = 0;
            
            // 八个方向都走一遍
            for (let index = 0 ; index < 8 ; index++ ) {
                let x = i + idx[index];
                let y = j + jdx[index];
                
                // 边界规避
                if (x < 0 || y < 0 || x >= CopyBoard.length || y >= CopyBoard[i].length ) 
                    continue;
                    
                liveAmount += CopyBoard[x][y] ? 1 : 0;
            }
            
            // 该位置细胞死活决策
            if (liveAmount < 2 || liveAmount > 3) {
                board[i][j] = 0;
            } else if (liveAmount <= 3 && CopyBoard[i][j]) {
                board[i][j] = 1;
            } else if (liveAmount == 3 && !CopyBoard[i][j]) {
                board[i][j] = 1;
            }
            
        }
    }
    
    return board
    
};