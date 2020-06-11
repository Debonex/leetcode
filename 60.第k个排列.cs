/*
 * @lc app=leetcode.cn id=60 lang=csharp
 *
 * [60] 第k个排列
 *
 * https://leetcode-cn.com/problems/permutation-sequence/description/
 *
 * algorithms
 * Medium (48.64%)
 * Likes:    253
 * Dislikes: 0
 * Total Accepted:    35.4K
 * Total Submissions: 72.8K
 * Testcase Example:  '3\n3'
 *
 * 给出集合 [1,2,3,…,n]，其所有元素共有 n! 种排列。
 * 
 * 按大小顺序列出所有排列情况，并一一标记，当 n = 3 时, 所有排列如下：
 * 
 * 
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * 
 * 
 * 给定 n 和 k，返回第 k 个排列。
 * 
 * 说明：
 * 
 * 
 * 给定 n 的范围是 [1, 9]。
 * 给定 k 的范围是[1,  n!]。
 * 
 * 
 * 示例 1:
 * 
 * 输入: n = 3, k = 3
 * 输出: "213"
 * 
 * 
 * 示例 2:
 * 
 * 输入: n = 4, k = 9
 * 输出: "2314"
 * 
 * 
 */
using System;
using System.Collections;
using System.Collections.Generic;
// @lc code=start
public class Solution
{
    public string GetPermutation(int n, int k)
    {
        if (n == 1) return "1";
        List<int> candidates = new List<int>();
        int group = 1;
        for (int i = 1; i <= n - 1; i++)
        {
            group *= i;
            candidates.Add(i);
        }
        candidates.Add(n);
        string result = "";
        int div = n - 1;
        while (k > 0)
        {
            // Console.WriteLine(k + " " + group + " " + div);
            result += candidates[(k - 1) / group];
            candidates.RemoveAt((k - 1) / group);
            k = (group == 1 ? 0 : (k % group == 0 ? group : k % group));
            group /= div;
            div--;
        }
        for (int i = 0; i < candidates.Count; i++) result += candidates[i];
        return result;
    }
}
// @lc code=end

