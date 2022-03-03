/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (37.97%)
 * Likes:    747
 * Dislikes: 0
 * Total Accepted:    125.8K
 * Total Submissions: 331.3K
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 假设按照升序排序的数组在预先未知的某个点上进行了旋转。
 *
 * ( 例如，数组 [0,1,2,4,5,6,7] 可能变为 [4,5,6,7,0,1,2] )。
 *
 * 搜索一个给定的目标值，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 。
 *
 * 你可以假设数组中不存在重复的元素。
 *
 * 你的算法时间复杂度必须是 O(log n) 级别。
 *
 * 示例 1:
 *
 * 输入: nums = [4,5,6,7,0,1,2], target = 0
 * 输出: 4
 *
 *
 * 示例 2:
 *
 * 输入: nums = [4,5,6,7,0,1,2], target = 3
 * 输出: -1
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  const len = nums.length;

  /**
   *
   * @param {number} l
   * @param {number} r
   */
  function searchFirstIdx(l, r) {
    // console.log('l:'+l+' r:'+r)
    if (l == r) return l;
    if (l == r - 1) return nums[l] > nums[r] ? r : l;
    let m = Math.floor((l + r) / 2);
    let im = nums[m];
    // console.log('im:'+im)

    if (nums[l] > im) {
      if (nums[m - 1] > im) return m;
      else if (nums[m - 1] < im) return searchFirstIdx(l, r - 1);
    } else if (nums[l] < im) {
      if (nums[m + 1] < im) return m + 1;
      else if (nums[m + 1] > im) {
        if (nums[r] > im) return l;
        else if (nums[r] < im) return searchFirstIdx(l + 1, r);
      }
    }
    return -1;
  }

  function p2l(idx, fidx) {
    return (idx - fidx + len) % len;
  }

  function l2p(idx, fidx) {
    return (idx + fidx) % len;
  }

  let fidx = searchFirstIdx(0, len - 1);
  // console.log(fidx)
  if (fidx >= 0) {
    let l = fidx;
    let r = (fidx - 1 + len) % len;
    let ll = p2l(l, fidx);
    let lr = p2l(r, fidx);
    while (ll <= lr) {
      // console.log(ll+' '+lr)
      let lm = Math.floor((ll + lr) / 2);
      // console.log(lm)
      let im = nums[l2p(lm, fidx)];
      // console.log(l2p(lm,fidx))
      // console.log(im)
      if (im == target) return l2p(lm, fidx);
      else if (im > target) {
        lr = lm - 1;
      } else {
        ll = lm + 1;
      }
    }
  }
  return -1;
};
// @lc code=end
// var list = [1,3,5]
// console.log(search(list,5))
