/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 *
 * https://leetcode-cn.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (36.15%)
 * Likes:    379
 * Dislikes: 0
 * Total Accepted:    86.9K
 * Total Submissions: 240.4K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 *
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 *
 *
 *
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 *
 * 说明：m 和 n 的值均不超过 100。
 *
 * 示例 1:
 *
 * 输入:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * 输出: 2
 * 解释:
 * 3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let height = obstacleGrid.length;
  let width = obstacleGrid[0].length;
  if (obstacleGrid[0][0] == 1) return 0;
  obstacleGrid[0][0] = 1;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (i == 0 && j == 0) continue;
      if (obstacleGrid[i][j] == 1) obstacleGrid[i][j] = 0;
      else
        obstacleGrid[i][j] =
          (obstacleGrid[i - 1] ? obstacleGrid[i - 1][j] : 0) +
          (obstacleGrid[i][j - 1] ? obstacleGrid[i][j - 1] : 0);
    }
  }
  return obstacleGrid[height - 1][width - 1];
};
// @lc code=end
