/*
 * @lc app=leetcode.cn id=17 lang=csharp
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (53.56%)
 * Likes:    723
 * Dislikes: 0
 * Total Accepted:    114.8K
 * Total Submissions: 214.3K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 
 * 
 * 
 * 示例:
 * 
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 * 
 * 
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 * 
 */
using System.Collections;
using System.Collections.Generic;
// @lc code=start
public class Solution { 
    public IList<string> LetterCombinations(string digits) {
        List<string> set = new List<string>{"abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"};
        IList<string> result = new List<string>();
        foreach(char d in digits){
            if(result.Count==0){
                foreach(char c in set[d-'2']) result.Add(c.ToString());
                continue;
            }
            int cnt = result.Count;
            for(int i=0;i<cnt;i++){
                foreach(char c in set[d-'2']) result.Add(string.Concat(result[0],c.ToString()));
                result.RemoveAt(0);
            }
        }
        return result;
    }
}
// @lc code=end
