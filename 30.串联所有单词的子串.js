/*
 * @lc app=leetcode.cn id=30 lang=javascript
 *
 * [30] 串联所有单词的子串
 *
 * https://leetcode-cn.com/problems/substring-with-concatenation-of-all-words/description/
 *
 * algorithms
 * Hard (31.18%)
 * Likes:    299
 * Dislikes: 0
 * Total Accepted:    38.4K
 * Total Submissions: 123.2K
 * Testcase Example:  '"barfoothefoobarman"\n["foo","bar"]'
 *
 * 给定一个字符串 s 和一些长度相同的单词 words。找出 s 中恰好可以由 words 中所有单词串联形成的子串的起始位置。
 *
 * 注意子串要与 words 中的单词完全匹配，中间不能有其他字符，但不需要考虑 words 中单词串联的顺序。
 *
 *
 *
 * 示例 1：
 *
 * 输入：
 * ⁠ s = "barfoothefoobarman",
 * ⁠ words = ["foo","bar"]
 * 输出：[0,9]
 * 解释：
 * 从索引 0 和 9 开始的子串分别是 "barfoo" 和 "foobar" 。
 * 输出的顺序不重要, [9,0] 也是有效答案。
 *
 *
 * 示例 2：
 *
 * 输入：
 * ⁠ s = "wordgoodgoodgoodbestword",
 * ⁠ words = ["word","good","best","word"]
 * 输出：[]
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function (s, words) {
  if (words.length == 0 || s.length == 0) return [];
  let l = words[0].length;
  if (s.length < words.length * l) return [];
  let wordsMap = new Map();
  for (let w of words) {
    if (wordsMap.has(w)) wordsMap.set(w, wordsMap.get(w) + 1);
    else wordsMap.set(w, 1);
  }
  let flags = new Array(s.length);
  let wordsMapKeys = [...wordsMap.keys()];
  for (let i = 0; i <= s.length - l; ++i) {
    wordsMapKeys.forEach((w) => {
      if (s.substr(i).startsWith(w)) {
        flags[i] = w;
      }
    });
  }
  let res = [];
  for (let i = 0; i < l; i++) {
    let cnt = words.length;
    let map = new Map(wordsMap);
    let j;
    for (j = 0; j < s.length && j < l * words.length; j += l) {
      if (flags[i + j]) {
        map.get(flags[i + j]) > 0 && cnt--;
        map.set(flags[i + j], map.get(flags[i + j]) - 1);
      }
    }
    if (cnt == 0) res.push(i);
    let left = i,
      right = i + j - l;
    while (right + l < s.length) {
      if (flags[left]) {
        map.get(flags[left]) >= 0 && cnt++;
        map.set(flags[left], map.get(flags[left]) + 1);
      }
      left += l;
      right += l;
      if (flags[right]) {
        map.get(flags[right]) > 0 && cnt--;
        map.set(flags[right], map.get(flags[right]) - 1);
      }
      if (cnt == 0) res.push(left);
    }
  }
  return res;
};
// @lc code=end
// let res = findSubstring("barfoothefoobarman", ["foo", "bar"])
// console.log(res)
