/*
 * @lc app=leetcode.cn id=18 lang=rust
 *
 * [18] 四数之和
 *
 * https://leetcode-cn.com/problems/4sum/description/
 *
 * algorithms
 * Medium (39.30%)
 * Likes:    1248
 * Dislikes: 0
 * Total Accepted:    320.6K
 * Total Submissions: 815.3K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * 给你一个由 n 个整数组成的数组 nums ，和一个目标值 target 。请你找出并返回满足下述全部条件且不重复的四元组 [nums[a],
 * nums[b], nums[c], nums[d]] （若两个四元组元素一一对应，则认为两个四元组重复）：
 *
 *
 * 0 <= a, b, c, d < n
 * a、b、c 和 d 互不相同
 * nums[a] + nums[b] + nums[c] + nums[d] == target
 *
 *
 * 你可以按 任意顺序 返回答案 。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：nums = [1,0,-1,0,-2,2], target = 0
 * 输出：[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：nums = [2,2,2,2,2], target = 8
 * 输出：[[2,2,2,2]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= nums.length <= 200
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 *
 *
 */
use super::Solution;
// @lc code=start
impl Solution {
    pub fn four_sum(mut nums: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        let len = nums.len();
        if len < 4 {
            return Vec::new();
        }
        nums.sort_unstable();
        let mut result = Vec::new();
        for i in 0..len - 3 {
            if i > 0 && nums[i] == nums[i - 1] {
                continue;
            }
            for j in i + 1..len - 2 {
                if j > i + 1 && nums[j] == nums[j - 1] {
                    continue;
                }
                let mut l = j + 1;
                let mut r = len - 1;
                while l < r {
                    if l > j + 1 {
                        while nums[l] == nums[l - 1] && l + 1 < len - 1 {
                            l += 1;
                        }
                    }
                    if r < len - 1 {
                        while nums[r] == nums[r + 1] && r - 1 > 2 {
                            r -= 1;
                        }
                    }
                    if l >= r {
                        break;
                    }
                    let sum = nums[i] + nums[j] + nums[l] + nums[r];
                    if sum == target {
                        result.push(vec![nums[i], nums[j], nums[l], nums[r]]);
                        l += 1;
                        r -= 1;
                    } else if sum > target {
                        r -= 1;
                    } else {
                        l += 1;
                    }
                }
            }
        }

        result
    }
}
// @lc code=end

#[test]
fn test1() {
    assert_eq!(
        Solution::four_sum(vec![1, 0, -1, 0, -2, 2], 0),
        vec![[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
    );

    assert_eq!(
        Solution::four_sum(vec![2, 2, 2, 2, 2], 8),
        vec![[2, 2, 2, 2]]
    );

    assert_eq!(
        Solution::four_sum(vec![-4, 0, -4, 2, 2, 2, -2, -2], 7),
        vec![] as Vec<Vec<i32>>
    );

    assert_eq!(
        Solution::four_sum(vec![-1, 2, 2, -5, 0, -1, 4], 3),
        vec![[-5, 2, 2, 4], [-1, 0, 2, 2]]
    );
}
