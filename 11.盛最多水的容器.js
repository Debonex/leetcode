/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  const len = height.length;
  let res = 0;
  let area;
  for (let i = 0; i < len - 1; ++i) {
    let maxj = 0;
    for (let j = len - 1; j > i; j--) {
      height[j] > maxj &&
        (maxj = height[j]) &&
        (area = (j - i) * (height[j] < height[i] ? height[j] : height[i])) &&
        area > res &&
        (res = area);
    }
  }
  return res;
};

// @lc code=end
// var height = [2,3,4,5,18,17,6]
// console.log(maxArea(height))
