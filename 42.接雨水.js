/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 *
 * https://leetcode-cn.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (51.81%)
 * Likes:    1483
 * Dislikes: 0
 * Total Accepted:    124.1K
 * Total Submissions: 239.5K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 *
 *
 *
 * 上面是由数组 [0,1,0,2,1,0,1,3,2,1,2,1] 表示的高度图，在这种情况下，可以接 6 个单位的雨水（蓝色部分表示雨水）。 感谢
 * Marcos 贡献此图。
 *
 * 示例:
 *
 * 输入: [0,1,0,2,1,0,1,3,2,1,2,1]
 * 输出: 6
 *
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const len = height.length;
  const lh = Array(len);
  const rh = Array(len);
  lh[0] = rh[len - 1] = 0;
  for (let i = 1; i < len; i++) {
    lh[i] = Math.max(lh[i - 1], height[i - 1]);
    rh[len - 1 - i] = Math.max(rh[len - i], height[len - i]);
  }

  let res = 0;
  for (let i = 0; i < len; i++) {
    let wall = Math.min(lh[i], rh[i]);
    if (wall > height[i]) res += wall - height[i];
  }
  return res;
};
// @lc code=end
