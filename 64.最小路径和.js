/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 *
 * https://leetcode-cn.com/problems/minimum-path-sum/description/
 *
 * algorithms
 * Medium (66.03%)
 * Likes:    511
 * Dislikes: 0
 * Total Accepted:    99.3K
 * Total Submissions: 150.4K
 * Testcase Example:  '[[1,3,1],[1,5,1],[4,2,1]]'
 *
 * 给定一个包含非负整数的 m x n 网格，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
 * 
 * 说明：每次只能向下或者向右移动一步。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * [1,3,1],
 * ⁠ [1,5,1],
 * ⁠ [4,2,1]
 * ]
 * 输出: 7
 * 解释: 因为路径 1→3→1→1→1 的总和最小。
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let height = grid.length
    let width = grid[0].length
    for (let i = 1; i < width; i++)grid[0][i] += grid[0][i - 1]
    for (let i = 1; i < height; i++)grid[i][0] += grid[i - 1][0]
    for (let i = 1; i < height; i++) {
        for (let j = 1; j < width; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
        }
    }
    return grid[height - 1][width - 1]
};
// @lc code=end

