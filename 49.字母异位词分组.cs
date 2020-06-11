/*
 * @lc app=leetcode.cn id=49 lang=csharp
 *
 * [49] 字母异位词分组
 *
 * https://leetcode-cn.com/problems/group-anagrams/description/
 *
 * algorithms
 * Medium (61.82%)
 * Likes:    355
 * Dislikes: 0
 * Total Accepted:    78.6K
 * Total Submissions: 127.1K
 * Testcase Example:  '["eat","tea","tan","ate","nat","bat"]'
 *
 * 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
 * 
 * 示例:
 * 
 * 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
 * 输出:
 * [
 * ⁠ ["ate","eat","tea"],
 * ⁠ ["nat","tan"],
 * ⁠ ["bat"]
 * ]
 * 
 * 说明：
 * 
 * 
 * 所有输入均为小写字母。
 * 不考虑答案输出的顺序。
 * 
 * 
 */
using System;
using System.Collections;
using System.Collections.Generic;
// @lc code=start
public class Solution
{
    public IList<IList<string>> GroupAnagrams(string[] strs)
    {
        IList<IList<string>> result = new List<IList<string>>();
        Dictionary<string, IList<string>> dic = new Dictionary<string, IList<string>>();
        for (int i = 0; i < strs.Length; i++)
        {
            char[] chars = strs[i].ToCharArray();
            Array.Sort(chars);
            string str = string.Join("", chars);
            if (dic.ContainsKey(str)) dic[str].Add(strs[i]);
            else dic[str] = new List<string>() { strs[i] };
        }
        result = new List<IList<string>>(dic.Values);
        return result;
    }
}
// @lc code=end

