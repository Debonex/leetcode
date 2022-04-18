/*
 * @lc app=leetcode.cn id=31 lang=rust
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (37.46%)
 * Likes:    1642
 * Dislikes: 0
 * Total Accepted:    287.4K
 * Total Submissions: 766.8K
 * Testcase Example:  '[1,2,3]'
 *
 * 整数数组的一个 排列  就是将其所有成员以序列或线性顺序排列。
 *
 *
 * 例如，arr = [1,2,3] ，以下这些都可以视作 arr 的排列：[1,2,3]、[1,3,2]、[3,1,2]、[2,3,1] 。
 *
 *
 * 整数数组的 下一个排列 是指其整数的下一个字典序更大的排列。更正式地，如果数组的所有排列根据其字典顺序从小到大排列在一个容器中，那么数组的 下一个排列
 * 就是在这个有序容器中排在它后面的那个排列。如果不存在下一个更大的排列，那么这个数组必须重排为字典序最小的排列（即，其元素按升序排列）。
 *
 *
 * 例如，arr = [1,2,3] 的下一个排列是 [1,3,2] 。
 * 类似地，arr = [2,3,1] 的下一个排列是 [3,1,2] 。
 * 而 arr = [3,2,1] 的下一个排列是 [1,2,3] ，因为 [3,2,1] 不存在一个字典序更大的排列。
 *
 *
 * 给你一个整数数组 nums ，找出 nums 的下一个排列。
 *
 * 必须 原地 修改，只允许使用额外常数空间。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,2,3]
 * 输出：[1,3,2]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [3,2,1]
 * 输出：[1,2,3]
 *
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1,1,5]
 * 输出：[1,5,1]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 100
 * 0 <= nums[i] <= 100
 *
 *
 */
use super::Solution;
// @lc code=start
impl Solution {
    fn swap(list: &mut [i32], i: usize, j: usize) {
        let temp = list[i];
        list[i] = list[j];
        list[j] = temp;
    }

    fn sort(list: &mut [i32]) {
        let mut i = list.len() - 1;
        while i > 0 {
            let mut j = 0;
            while j < i {
                if list[j] > list[j + 1] {
                    Solution::swap(list, j, j + 1);
                }
                j += 1;
            }
            i -= 1;
        }
    }

    pub fn next_permutation(nums: &mut Vec<i32>) {
        let len = nums.len();
        if len == 0 || len == 1 {
            return;
        } else if len == 2 {
            Solution::swap(nums, 0, 1);
        } else {
            let mut i = len - 2;
            loop {
                if nums[i] < nums[i + 1] {
                    let mut r = len - 1;
                    while r >= i + 1 {
                        if nums[r] > nums[i] {
                            Solution::swap(nums, i, r);
                            Solution::sort(&mut nums[i + 1..]);
                            return;
                        }
                        r -= 1;
                    }
                }
                if i == 0 {
                    break;
                }
                i -= 1;
            }
            Solution::sort(nums)
        }
    }
}
// @lc code=end

#[test]
fn t31() {
    fn test(list: &mut Vec<i32>, expect: &[i32]) {
        Solution::next_permutation(list);
        assert_eq!(list, expect);
    }

    test(&mut vec![3, 2, 1], &[1, 2, 3]);
    test(&mut vec![1, 2, 3], &[1, 3, 2]);
    test(&mut vec![1, 3, 2], &[2, 1, 3]);
    test(&mut vec![2, 3, 1], &[3, 1, 2]);
    test(&mut vec![1, 1, 5], &[1, 5, 1]);
}
