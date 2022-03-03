/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 *
 * https://leetcode-cn.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (29.83%)
 * Likes:    1379
 * Dislikes: 0
 * Total Accepted:    98.6K
 * Total Submissions: 330.6K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 *
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 *
 *
 * 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 *
 * 说明:
 *
 *
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 *
 *
 * 示例 1:
 *
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 *
 *
 * 示例 2:
 *
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
 *
 *
 * 示例 3:
 *
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 *
 *
 * 示例 4:
 *
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
 *
 *
 * 示例 5:
 *
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function state(val) {
  this.val = val;
  this.star = false;
}

var isMatch = function (s, p) {
  let fsm = [];

  for (let p2 = 0; p2 < p.length; p2++) {
    if (p[p2] == "*") fsm[fsm.length - 1].star = true;
    else fsm.push(new state(p[p2]));
  }

  let dfs = function (str, strpt, fsm, fsmpt) {
    if (fsmpt >= fsm.length) return false;
    if (fsm[fsmpt].star) {
      if (str[strpt] == fsm[fsmpt].val || fsm[fsmpt].val == ".") {
        if (strpt == str.length - 1) {
          let flag = false;
          for (let k = fsmpt + 1; k < fsm.length; k++) {
            if (!fsm[k].star) {
              if (fsm[k].val == str[strpt] || fsm[k].val == ".") {
                if (!flag) flag = true;
                else return false;
              } else return false;
            }
          }
          return true;
        }
        return (
          dfs(str, strpt + 1, fsm, fsmpt) ||
          dfs(str, strpt + 1, fsm, fsmpt + 1) ||
          dfs(str, strpt, fsm, fsmpt + 1)
        );
      } else {
        return dfs(str, strpt, fsm, fsmpt + 1);
      }
    } else {
      if (str[strpt] == fsm[fsmpt].val || fsm[fsmpt].val == ".") {
        if (strpt == str.length - 1) {
          for (let k = fsmpt + 1; k < fsm.length; k++) {
            if (!fsm[k].star) return false;
          }
          return true;
        } else return dfs(str, strpt + 1, fsm, fsmpt + 1);
      } else return false;
    }
  };
  if (s.length == 0) {
    for (let i = 0; i < fsm.length; i++) {
      if (!fsm[i].star) return false;
    }
    return true;
  }
  return dfs(s, 0, fsm, 0);
};
// @lc code=end
