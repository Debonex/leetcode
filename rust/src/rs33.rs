/*
 * @lc app=leetcode.cn id=33 lang=rust
 *
 * [33] 搜索旋转排序数组
 *
 * https://leetcode-cn.com/problems/search-in-rotated-sorted-array/description/
 *
 * algorithms
 * Medium (43.34%)
 * Likes:    2121
 * Dislikes: 0
 * Total Accepted:    549.4K
 * Total Submissions: 1.3M
 * Testcase Example:  '[4,5,6,7,0,1,2]\n0'
 *
 * 整数数组 nums 按升序排列，数组中的值 互不相同 。
 *
 * 在传递给函数之前，nums 在预先未知的某个下标 k（0 ）上进行了 旋转，使数组变为 [nums[k], nums[k+1], ...,
 * nums[n-1], nums[0], nums[1], ..., nums[k-1]]（下标 从 0 开始 计数）。例如，
 * [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
 *
 * 给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [4,5,6,7,0,1,2], target = 0
 * 输出：4
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [4,5,6,7,0,1,2], target = 3
 * 输出：-1
 *
 * 示例 3：
 *
 *
 * 输入：nums = [1], target = 0
 * 输出：-1
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1
 * -10^4
 * nums 中的每个值都 独一无二
 * 题目数据保证 nums 在预先未知的某个下标上进行了旋转
 * -10^4
 *
 *
 *
 *
 * 进阶：你可以设计一个时间复杂度为 O(log n) 的解决方案吗？
 *
 */
use super::Solution;
// @lc code=start
impl Solution {
    fn combine(n1: i32, n2: i32) -> i32 {
        if n1 == -1 {
            if n2 == -1 {
                return -1;
            } else {
                return n2;
            }
        }
        return n1;
    }

    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let len = nums.len();

        match len {
            0 => -1,
            _ => {
                struct BS<'a> {
                    f: &'a dyn Fn(&BS, usize, usize) -> i32,
                }
                let bs = BS {
                    f: &|bs, l, r| {
                        if l == r {
                            if nums.get(l).unwrap() == &target {
                                return l as i32;
                            } else {
                                return -1;
                            }
                        }
                        let nl = nums.get(l).unwrap();
                        let nr = nums.get(r).unwrap();
                        let m = (l + r) / 2;
                        let nm = nums.get(m).unwrap();

                        // 如果有序
                        if nr > nl && nm == &target {
                            return m as i32;
                        } else {
                            return Solution::combine((bs.f)(bs, l, m), (bs.f)(bs, m + 1, r));
                        }
                    },
                };

                return (bs.f)(&bs, 0, len - 1);
            }
        }
    }
}
// @lc code=end

#[test]
fn test1() {
    assert_eq!(Solution::search(vec![4, 5, 6, 7, 0, 1, 2], 0), 4);
    assert_eq!(Solution::search(vec![4, 5, 6, 7, 0, 1, 2], 3), -1);
    assert_eq!(Solution::search(vec![1], 0), -1);
}
