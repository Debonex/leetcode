/*
 * @lc app=leetcode.cn id=58 lang=rust
 *
 * [58] 最后一个单词的长度
 *
 * https://leetcode-cn.com/problems/length-of-last-word/description/
 *
 * algorithms
 * Easy (39.66%)
 * Likes:    467
 * Dislikes: 0
 * Total Accepted:    330.5K
 * Total Submissions: 816.4K
 * Testcase Example:  '"Hello World"'
 *
 * 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中 最后一个 单词的长度。
 *
 * 单词 是指仅由字母组成、不包含任何空格字符的最大子字符串。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：s = "Hello World"
 * 输出：5
 * 解释：最后一个单词是“World”，长度为5。
 *
 *
 * 示例 2：
 *
 *
 * 输入：s = "   fly me   to   the moon  "
 * 输出：4
 * 解释：最后一个单词是“moon”，长度为4。
 *
 *
 * 示例 3：
 *
 *
 * 输入：s = "luffy is still joyboy"
 * 输出：6
 * 解释：最后一个单词是长度为6的“joyboy”。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= s.length <= 10^4
 * s 仅有英文字母和空格 ' ' 组成
 * s 中至少存在一个单词
 *
 *
 */
use super::Solution;
// @lc code=start
impl Solution {
    pub fn length_of_last_word(s: String) -> i32 {
        let mut last = 0;
        let mut count = 0;
        s.chars().for_each(|c| match c {
            ' ' => {
                if count != 0 {
                    last = count;
                }
                count = 0;
            }
            _ => {
                count += 1;
            }
        });

        match count {
            0 => last,
            _ => count,
        }
    }
}
// @lc code=end

#[test]
fn test() {
    assert_eq!(
        Solution::length_of_last_word(String::from("Hello World")),
        5
    );

    assert_eq!(
        Solution::length_of_last_word(String::from("luffy is still joyboy")),
        6
    );

    assert_eq!(
        Solution::length_of_last_word(String::from("   fly me   to   the moon  ")),
        4
    );
}
