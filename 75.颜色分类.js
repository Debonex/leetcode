/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 *
 * https://leetcode-cn.com/problems/sort-colors/description/
 *
 * algorithms
 * Medium (55.13%)
 * Likes:    495
 * Dislikes: 0
 * Total Accepted:    95.7K
 * Total Submissions: 173.6K
 * Testcase Example:  '[2,0,2,1,1,0]'
 *
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 *
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 *
 * 注意:
 * 不能使用代码库中的排序函数来解决这道题。
 *
 * 示例:
 *
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 *
 * 进阶：
 *
 *
 * 一个直观的解决方案是使用计数排序的两趟扫描算法。
 * 首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let pt0 = 0;
  let pt2 = nums.length - 1;
  let temp;
  for (let i = 0; i < nums.length && i <= pt2; ) {
    switch (nums[i]) {
      case 0: {
        temp = nums[i];
        nums[i] = nums[pt0];
        nums[pt0++] = temp;
        i++;
        break;
      }
      case 2: {
        temp = nums[i];
        nums[i] = nums[pt2];
        nums[pt2--] = temp;
        break;
      }
      default: {
        i++;
        break;
      }
    }
  }
};
// @lc code=end
