/*
 * @lc app=leetcode.cn id=34 lang=csharp
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 *
 * https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/description/
 *
 * algorithms
 * Medium (39.61%)
 * Likes:    451
 * Dislikes: 0
 * Total Accepted:    96.2K
 * Total Submissions: 242.9K
 * Testcase Example:  '[5,7,7,8,8,10]\n8'
 *
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 
 * 你的算法时间复杂度必须是 O(log n) 级别。
 * 
 * 如果数组中不存在目标值，返回 [-1, -1]。
 * 
 * 示例 1:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 8
 * 输出: [3,4]
 * 
 * 示例 2:
 * 
 * 输入: nums = [5,7,7,8,8,10], target = 6
 * 输出: [-1,-1]
 * 
 */
using System;
// @lc code=start
public class Solution
{
    public int[] SearchRange(int[] nums, int target)
    {
        int[] res = new int[2] { -1, -1 };
        int l = 0;
        int r = nums.Length - 1;
        int m = (l + r) / 2;
        while (l <= r && nums[m] != target)
        {
            if (nums[m] > target) r = m - 1;
            else if (nums[m] < target) l = m + 1;
            m = (l + r) / 2;
        }
        if (l <= r && nums[m] == target)
        {
            res[0] = m;
            res[1] = m;
            while (nums[res[0]] == target)
            {
                res[0]--;
                if (res[0] < 0) break;
            }
            res[0]++;
            while (nums[res[1]] == target)
            {
                res[1]++;
                if (res[1] >= nums.Length) break;
            }
            res[1]--;
        }
        return res;
    }
}
// @lc code=end

