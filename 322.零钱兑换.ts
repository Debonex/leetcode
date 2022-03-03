/*
 * @lc app=leetcode.cn id=322 lang=typescript
 *
 * [322] 零钱兑换
 *
 * https://leetcode-cn.com/problems/coin-change/description/
 *
 * algorithms
 * Medium (39.71%)
 * Likes:    821
 * Dislikes: 0
 * Total Accepted:    135.1K
 * Total Submissions: 326.6K
 * Testcase Example:  '[1,2,5]\n11'
 *
 * 给定不同面额的硬币 coins 和一个总金额
 * amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。
 *
 *
 *
 * 示例 1:
 *
 * 输入: coins = [1, 2, 5], amount = 11
 * 输出: 3
 * 解释: 11 = 5 + 5 + 1
 *
 * 示例 2:
 *
 * 输入: coins = [2], amount = 3
 * 输出: -1
 *
 *
 *
 * 说明:
 * 你可以认为每种硬币的数量是无限的。
 *
 */

// @lc code=start
function coinChange(coins: number[], amount: number): number {
  const len: number = coins.length;
  let res = amount + 1;
  function dfs(remain: number, count: number, idx: number): void {
    if (remain == 0) {
      res = Math.min(count, res);
      return;
    }
    if (idx >= len) return;
    for (
      let i = Math.floor(remain / coins[idx]);
      i >= 0 && i + count < res;
      i--
    ) {
      dfs(remain - i * coins[idx], count + i, idx + 1);
    }
    return;
  }
  coins.sort((a, b) => b - a);
  dfs(amount, 0, 0);
  return res == amount + 1 ? -1 : res;
}
// @lc code=end
