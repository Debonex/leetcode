/*
 * @lc app=leetcode.cn id=55 lang=csharp
 *
 * [55] 跳跃游戏
 *
 * https://leetcode-cn.com/problems/jump-game/description/
 *
 * algorithms
 * Medium (40.07%)
 * Likes:    681
 * Dislikes: 0
 * Total Accepted:    117.3K
 * Total Submissions: 292.7K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 判断你是否能够到达最后一个位置。
 * 
 * 示例 1:
 * 
 * 输入: [2,3,1,1,4]
 * 输出: true
 * 解释: 我们可以先跳 1 步，从位置 0 到达 位置 1, 然后再从位置 1 跳 3 步到达最后一个位置。
 * 
 * 
 * 示例 2:
 * 
 * 输入: [3,2,1,0,4]
 * 输出: false
 * 解释: 无论怎样，你总会到达索引为 3 的位置。但该位置的最大跳跃长度是 0 ， 所以你永远不可能到达最后一个位置。
 * 
 * 
 */
using System;
// @lc code=start
public class Solution
{
    public bool CanJump(int[] nums)
    {
        int last = 0;
        int len = nums.Length;
        for (int i = 0; i < len; i++)
        {
            if (last < i) return false;
            last = (nums[i] + i > last ? nums[i] + i : last);
            if (last >= len - 1) return true;
        }
        return (last >= len - 1);
    }

    // dp-left-to-right:TLE
    // public bool CanJump(int[] nums)
    // {
    //     bool hasZero = false;
    //     for (int i = 0; i < nums.Length - 1; i++) if (nums[i] == 0)
    //         {
    //             hasZero = true;
    //             break;
    //         }
    //     if (!hasZero) return true;
    //     int len = nums.Length;
    //     bool[,] dp = new bool[len, len];
    //     for (int i = 0; i < len; i++) dp[i, i] = true;
    //     for (int j = 1; j < len; j++)
    //     {
    //         int k = 0;
    //         while (j + k < len)
    //         {
    //             if (nums[k] >= j)
    //             {
    //                 dp[k, j + k] = true;
    //                 k++;
    //                 continue;
    //             }
    //             bool isbreak = false;
    //             for (int m = k + 1; m < j; m++)
    //             {
    //                 if (isbreak) break;
    //                 if (dp[k, m] && dp[m, j + k])
    //                 {
    //                     dp[k, j + k] = true;
    //                     isbreak = true;
    //                 }
    //             }
    //             k++;
    //         }
    //     }
    //     return dp[0, len - 1];
    // }

    // recursive:TLE
    // public bool CanJump(int[] nums)
    // {
    //     return CanJump(nums, nums.Length - 1);
    // }

    // private bool CanJump(int[] nums, int idx)
    // {
    //     if (idx == 0) return true;
    //     bool result = false;
    //     for (int i = 1; i <= idx; i++)
    //     {
    //         if (nums[idx - i] >= i) result |= CanJump(nums, idx - i);
    //         if (result) return result;
    //     }
    //     return result;
    // }


    // dfs:TLE
    // public bool CanJump(int[] nums)
    // {
    //     return dfs(nums, 0);
    // }

    // private bool dfs(int[] nums, int start)
    // {
    //     if (start == nums.Length-1) return true;
    //     int step = nums[start];
    //     for (int i = start + 1; i < nums.Length && i <= start + step; i++)
    //     {
    //         if (dfs(nums, i)) return true;
    //     }
    //     return false;
    // }
}
// @lc code=end

