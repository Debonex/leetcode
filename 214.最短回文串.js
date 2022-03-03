/*
 * @lc app=leetcode.cn id=214 lang=javascript
 *
 * [214] 最短回文串
 *
 * https://leetcode-cn.com/problems/shortest-palindrome/description/
 *
 * algorithms
 * Hard (32.01%)
 * Likes:    160
 * Dislikes: 0
 * Total Accepted:    9.7K
 * Total Submissions: 30.3K
 * Testcase Example:  '"aacecaaa"'
 *
 * 给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。
 *
 * 示例 1:
 *
 * 输入: "aacecaaa"
 * 输出: "aaacecaaa"
 *
 *
 * 示例 2:
 *
 * 输入: "abcd"
 * 输出: "dcbabcd"
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {
  let len = s.length;
  if (len <= 1) return s;
  let mid = Math.floor((len - 1) / 2);
  while (mid >= 0) {
    if (s[mid] == s[mid + 1]) {
      let l = mid;
      let r = mid + 1;
      while (l >= 0 && r < len) {
        if (s[l] != s[r]) break;
        l--;
        r++;
      }
      if (l < 0) {
        if (r >= len) return s;
        else return s.substr(r).split("").reverse().join("") + s;
      }
    }
    let l = (r = mid);
    while (l >= 0) {
      if (s[l] != s[r]) break;
      l--;
      r++;
    }
    if (l < 0) {
      if (r >= len) return s;
      else return s.substr(r).split("").reverse().join("") + s;
    }
    mid--;
  }
  return s.substr(1).split("").reverse().join("") + s;
};
// @lc code=end
// let input = 'aacecaaa'
// console.log(shortestPalindrome(input))
// setTimeout(() => {

// }, 100);
