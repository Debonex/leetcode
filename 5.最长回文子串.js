/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  const len = s.length;
  let dp = new Array(len);
  for (let i = 0; i < dp.length; ++i) {
    dp[i] = new Array(len);
    dp[i][i] = 1;
    i + 1 < len && s[i] == s[i + 1] && (dp[i][i + 1] = 1);
  }
  for (let i = 1; i < len - 1; ++i) {
    for (let k = 1; i - k >= 0 && i + k < len; ++k) {
      if (dp[i - k + 1][i + k - 1] == 1 && s[i - k] == s[i + k])
        dp[i - k][i + k] = 1;
    }
    for (let k = 1; i - k >= 0 && i + k + 1 < len; ++k) {
      if (dp[i - k + 1][i + k] == 1 && s[i - k] == s[i + k + 1])
        dp[i - k][i + k + 1] = 1;
    }
  }
  // console.log(dp)
  let r = 0;
  for (let j = len - 1; j >= 0; j--) {
    for (let k = 0; j + k < len; k++) {
      if (dp[k][j + k] == 1) {
        return s.slice(k, j + k + 1);
      }
    }
  }
  return "";
};

// var str = "aabaac"
// console.log(longestPalindrome(str))
// @lc code=end
