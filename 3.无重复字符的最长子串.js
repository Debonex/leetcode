/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let maxlen = 0;
  const len = s.length;
  let st = new Set();
  let j = 0;
  for (let i = 0; i < len; ++i) {
    if (len - i + 1 < maxlen) break;
    i > 0 && st.delete(s[i - 1]);
    while (j < len && !st.has(s[j])) {
      st.add(s[j]);
      ++j;
    }
    if (st.size > maxlen) maxlen = st.size;
  }
  return maxlen;
};

var str = "abcds";
console.log(lengthOfLongestSubstring(str));
// @lc code=end
