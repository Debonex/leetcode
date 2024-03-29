/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 *
 * https://leetcode-cn.com/problems/generate-parentheses/description/
 *
 * algorithms
 * Medium (75.43%)
 * Likes:    1044
 * Dislikes: 0
 * Total Accepted:    129.8K
 * Total Submissions: 172.1K
 * Testcase Example:  '3'
 *
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。
 *
 *
 *
 * 示例：
 *
 * 输入：n = 3
 * 输出：[
 * ⁠      "((()))",
 * ⁠      "(()())",
 * ⁠      "(())()",
 * ⁠      "()(())",
 * ⁠      "()()()"
 * ⁠    ]
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var cache;
  cache == undefined && (cache = []);
  if (cache[n]) return cache[n];
  if (n == 0) return [""];
  cache[n] = [];
  for (let lcnt = 0; lcnt < n; lcnt++)
    for (let lstr of generateParenthesis(lcnt))
      for (let rstr of generateParenthesis(n - lcnt - 1))
        cache[n].push(lstr + "(" + rstr + ")");
  return cache[n];
};
// @lc code=end

// console.log(generateParenthesis(4))
