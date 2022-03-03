/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (37.62%)
 * Likes:    470
 * Dislikes: 0
 * Total Accepted:    79.6K
 * Total Submissions: 211.5K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给定一个包含 n 个整数的数组 nums 和一个目标值 target，判断 nums 中是否存在四个元素 a，b，c 和 d ，使得 a + b + c
 * + d 的值与 target 相等？找出所有满足条件且不重复的四元组。
 *
 * 注意：
 *
 * 答案中不可以包含重复的四元组。
 *
 * 示例：
 *
 * 给定数组 nums = [1, 0, -1, 0, -2, 2]，和 target = 0。
 *
 * 满足要求的四元组集合为：
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (!nums || nums.length < 4) return [];
  let res = [];
  nums.sort((x, y) => x - y);
  // console.log(nums)
  const len = nums.length;
  for (let i = 0; i < len - 3; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] == nums[j - 1]) continue;
      let l = j + 1;
      let r = len - 1;
      while (l < r) {
        if (l > j + 1) while (nums[l] == nums[l - 1]) l++;
        if (r < len - 1) while (nums[r] == nums[r + 1]) r--;
        if (l >= r) break;
        if (nums[i] + nums[j] + nums[l] + nums[r] == target) {
          // console.log(i+" "+j+" "+l+" "+r)
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          l++;
          r--;
        } else if (nums[i] + nums[j] + nums[l] + nums[r] > target) {
          r--;
        } else {
          l++;
        }
      }
    }
  }
  return res;
};
// @lc code=end
// var nums = [-1,-5,-5,-3,2,5,0,4]
// console.log(fourSum(nums,-7))
