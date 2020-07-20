/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 *
 * https://leetcode-cn.com/problems/longest-valid-parentheses/description/
 *
 * algorithms
 * Hard (33.23%)
 * Likes:    854
 * Dislikes: 0
 * Total Accepted:    87.4K
 * Total Submissions: 263.2K
 * Testcase Example:  '"(()"'
 *
 * 给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。
 * 
 * 示例 1:
 * 
 * 输入: "(()"
 * 输出: 2
 * 解释: 最长有效括号子串为 "()"
 * 
 * 
 * 示例 2:
 * 
 * 输入: ")()())"
 * 输出: 4
 * 解释: 最长有效括号子串为 "()()"
 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    if (s.length < 2) return 0
    let lc = rc = 0
    let maxlen = 0
    for (let i = 0; i < s.length; i++) {
        s[i] == '(' ? (lc++) : (rc++)
        if (lc == rc) maxlen = Math.max(maxlen, lc * 2)
        else if (lc < rc) {
            lc = 0
            rc = 0
        }
    }
    lc = rc = 0
    for (let i = s.length - 1; i >= 0; i--) {
        s[i] == '(' ? (lc++) : (rc++)
        if (lc == rc) maxlen = Math.max(maxlen, lc * 2)
        else if (lc > rc) {
            lc = 0
            rc = 0
        }
    }

    return maxlen
};
// @lc code=end

let res = longestValidParentheses(')(')
console.log(res)

/**
 * dp 使用空间太多
 */
// var longestValidParentheses = function (s) {
//     if (s.length < 2) return 0
//     let l = 0
//     while (l < s.length && s[l] != '(') l++
//     if (l >= s.length) return 0

//     let trans = function (quot) {
//         return (quot == '(' ? 1 : -1)
//     }

//     let maxlen = 0
//     let dp = new Array(s.length)
//     for (let i = 0; i < dp.length; i++) {
//         dp[i] = new Array(s.length)
//         dp[i][i] = (s[i] == '(' ? 1 : 'fail')
//     }
//     for (let i = 0; i < dp.length; i++) {
//         for (let j = i + 1; j < dp.length; j++) {
//             if (dp[i][j - 1] == 'fail') break
//             dp[i][j] = dp[i][j-1] + trans(s[j])
//             if (dp[i][j] < 0) dp[i][j] = 'fail'
//             else if (dp[i][j] == 0 && (j - i + 1 > maxlen)) maxlen = (j - i + 1)
//         }
//     }
//     return maxlen
// };