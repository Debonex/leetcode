/*
 * @lc app=leetcode.cn id=47 lang=csharp
 *
 * [47] 全排列 II
 *
 * https://leetcode-cn.com/problems/permutations-ii/description/
 *
 * algorithms
 * Medium (58.94%)
 * Likes:    310
 * Dislikes: 0
 * Total Accepted:    62.8K
 * Total Submissions: 106.6K
 * Testcase Example:  '[1,1,2]'
 *
 * 给定一个可包含重复数字的序列，返回所有不重复的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,1,2]
 * 输出:
 * [
 * ⁠ [1,1,2],
 * ⁠ [1,2,1],
 * ⁠ [2,1,1]
 * ]
 * 
 */
using System;
using System.Collections;
using System.Collections.Generic;
using Common;
// @lc code=start
public class Solution
{
    public IList<IList<int>> PermuteUnique(int[] nums)
    {
        IList<IList<int>> result = new List<IList<int>>();
        Array.Sort(nums);
        int[] dup = new int[nums.Length];
        for (int i = 0; i < nums.Length; i++)
        {
            for (int j = i - 1; j >= 0 && nums[j] == nums[i]; j--) dup[i]++;
            if (result.Count == 0) result.Add(new List<int> { nums[i] });
            else
            {
                int cnt = result.Count;
                for (int j = 0; j < cnt; j++)
                {
                    int tempdup = dup[i];
                    for (int k = 0; k <= i; k++)
                    {
                        if (tempdup > 0 && k > 0 && nums[i] == result[0][k - 1]) tempdup--;
                        if (tempdup > 0) continue;
                        List<int> temp = new List<int>(result[0]);
                        temp.Insert(k, nums[i]);
                        result.Add(temp);
                    }
                    result.RemoveAt(0);
                }
            }
            // foreach(IList list in result) printList(list);
        }
        return result;
    }

}
// @lc code=end
