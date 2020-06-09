/*
 * @lc app=leetcode.cn id=46 lang=csharp
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (76.14%)
 * Likes:    735
 * Dislikes: 0
 * Total Accepted:    136.7K
 * Total Submissions: 179.5K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */
using System.Collections;
using System.Collections.Generic;
// @lc code=start
public class Solution
{
    public IList<IList<int>> Permute(int[] nums)
    {
        List<IList<int>> result = new List<IList<int>>();
        for (int i = 0; i < nums.Length; i++)
        {
            if (result.Count == 0) result.Add(new List<int> { nums[i] });
            else
            {
                int len = result.Count;
                for (int j = 0; j < len; j++)
                {
                    for (int k = 0; k <= i; k++)
                    {
                        List<int> temp = new List<int>(result[0]);
                        temp.Insert(k, nums[i]);
                        result.Add(temp);
                    }
                    result.RemoveAt(0);
                }
            }
        }
        return result;
    }
}
// @lc code=end

