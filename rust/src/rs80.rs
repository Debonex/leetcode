/*
 * @lc app=leetcode.cn id=80 lang=rust
 *
 * [80] 删除有序数组中的重复项 II
 */

use super::Solution;

// @lc code=start
impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        let mut idx = 0;
        let mut count = 0;
        while idx < nums.len() {
            let mut idx2 = nums.len() - 1;
            while idx2 > idx {
                if &nums[idx] == &nums[idx2] {
                    count += 1;
                    if count >= 2 {
                        nums.remove(idx2);
                    }
                }
                idx2 -= 1;
            }
            idx += 1;
            count = 0;
        }
        return nums.len() as i32;
    }
}
// @lc code=end

#[test]
fn t80() {
    fn test(list: &mut Vec<i32>, expect: &[i32]) {
        let res = Solution::remove_duplicates(list);
        assert_eq!(list, expect);
        assert_eq!(res, expect.len() as i32)
    }

    test(&mut vec![0, 0, 1, 1, 1, 1, 2, 3, 3], &[0, 0, 1, 1, 2, 3, 3]);
    test(&mut vec![1, 1, 1, 2, 2, 3], &[1, 1, 2, 2, 3]);
}
