/*
 * @lc app=leetcode.cn id=39 lang=javascript
 *
 * [39] 组合总和
 *
 * https://leetcode-cn.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (68.89%)
 * Likes:    682
 * Dislikes: 0
 * Total Accepted:    95.9K
 * Total Submissions: 139.2K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * 给定一个无重复元素的数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 *
 * candidates 中的数字可以无限制重复被选取。
 *
 * 说明：
 *
 *
 * 所有数字（包括 target）都是正整数。
 * 解集不能包含重复的组合。
 *
 *
 * 示例 1:
 *
 * 输入: candidates = [2,3,6,7], target = 7,
 * 所求解集为:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 *
 *
 * 示例 2:
 *
 * 输入: candidates = [2,3,5], target = 8,
 * 所求解集为:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 *
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const len = candidates.length;
  candidates.sort((a, b) => a - b);
  let res = [];
  back(0, new Array(), 0);

  function back(tempsum, tempchars, firstidx) {
    for (let idx = firstidx; idx < len; idx++) {
      let s = tempsum + candidates[idx];
      if (s < target) {
        let [...copychars] = tempchars;
        copychars.push(candidates[idx]);
        back(s, copychars, idx);
      } else if (s == target) {
        tempchars.push(candidates[idx]);
        let [...copychars] = tempchars;
        res.push(copychars);
        // console.log(res)
        return;
      } else return;
    }
  }

  return res;
};
// @lc code=end
// var candidates = [2,3,5]
// console.log(combinationSum(candidates,8))
