/*
 * @lc app=leetcode.cn id=900 lang=javascript
 *
 * [900] RLE 迭代器
 *
 * https://leetcode-cn.com/problems/rle-iterator/description/
 *
 * algorithms
 * Medium (45.14%)
 * Likes:    24
 * Dislikes: 0
 * Total Accepted:    1.7K
 * Total Submissions: 3.7K
 * Testcase Example:  '["RLEIterator","next","next","next","next"]\n[[[3,8,0,9,2,5]],[2],[1],[1],[2]]'
 *
 * 编写一个遍历游程编码序列的迭代器。
 *
 * 迭代器由 RLEIterator(int[] A) 初始化，其中 A 是某个序列的游程编码。更具体地，对于所有偶数 i，A[i]
 * 告诉我们在序列中重复非负整数值 A[i + 1] 的次数。
 *
 * 迭代器支持一个函数：next(int n)，它耗尽接下来的  n 个元素（n >=
 * 1）并返回以这种方式耗去的最后一个元素。如果没有剩余的元素可供耗尽，则  next 返回 -1 。
 *
 * 例如，我们以 A = [3,8,0,9,2,5] 开始，这是序列 [8,8,8,5,5] 的游程编码。这是因为该序列可以读作
 * “三个八，零个九，两个五”。
 *
 *
 *
 * 示例：
 *
 * 输入：["RLEIterator","next","next","next","next"],
 * [[[3,8,0,9,2,5]],[2],[1],[1],[2]]
 * 输出：[null,8,8,5,-1]
 * 解释：
 * RLEIterator 由 RLEIterator([3,8,0,9,2,5]) 初始化。
 * 这映射到序列 [8,8,8,5,5]。
 * 然后调用 RLEIterator.next 4次。
 *
 * .next(2) 耗去序列的 2 个项，返回 8。现在剩下的序列是 [8, 5, 5]。
 *
 * .next(1) 耗去序列的 1 个项，返回 8。现在剩下的序列是 [5, 5]。
 *
 * .next(1) 耗去序列的 1 个项，返回 5。现在剩下的序列是 [5]。
 *
 * .next(2) 耗去序列的 2 个项，返回 -1。 这是由于第一个被耗去的项是 5，
 * 但第二个项并不存在。由于最后一个要耗去的项不存在，我们返回 -1。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= A.length <= 1000
 * A.length 是偶数。
 * 0 <= A[i] <= 10^9
 * 每个测试用例最多调用 1000 次 RLEIterator.next(int n)。
 * 每次调用 RLEIterator.next(int n) 都有 1 <= n <= 10^9 。
 *
 *
 */

// @lc code=start
var RLEIteratorNode = function (num, val) {
  this.val = val;
  this.num = num;
  this.next = null;
};
/**
 * @param {number[]} A
 */
var RLEIterator = function (A) {
  var base = new RLEIteratorNode(-1, -1);
  var pt = base;
  for (let i = 0; i < A.length; i += 2) {
    pt.next = new RLEIteratorNode(A[i], A[i + 1]);
    pt = pt.next;
  }
  this.head = base.next;
};

/**
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function (n) {
  while (n > 0 && this.head) {
    if (this.head.num >= n) {
      this.head.num -= n;
      return this.head.val;
    } else {
      n -= this.head.num;
      this.head = this.head.next;
    }
  }
  return -1;
};

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(A)
 * var param_1 = obj.next(n)
 */
// @lc code=end
