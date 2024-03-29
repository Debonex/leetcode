/*
 * @lc app=leetcode.cn id=25 lang=javascript
 *
 * [25] K 个一组翻转链表
 *
 * https://leetcode-cn.com/problems/reverse-nodes-in-k-group/description/
 *
 * algorithms
 * Hard (61.90%)
 * Likes:    634
 * Dislikes: 0
 * Total Accepted:    82.7K
 * Total Submissions: 133.6K
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * 给你一个链表，每 k 个节点一组进行翻转，请你返回翻转后的链表。
 *
 * k 是一个正整数，它的值小于或等于链表的长度。
 *
 * 如果节点总数不是 k 的整数倍，那么请将最后剩余的节点保持原有顺序。
 *
 *
 *
 * 示例：
 *
 * 给你这个链表：1->2->3->4->5
 *
 * 当 k = 2 时，应当返回: 2->1->4->3->5
 *
 * 当 k = 3 时，应当返回: 3->2->1->4->5
 *
 *
 *
 * 说明：
 *
 *
 * 你的算法只能使用常数的额外空间。
 * 你不能只是单纯的改变节点内部的值，而是需要实际进行节点交换。
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
  if (k == 1) return head;

  let reverse = function (head, k, pre) {
    let pn = head.next;
    let len = 1;
    while (pn && len < k) {
      pn = pn.next;
      len++;
    }
    if (len < k) return;

    let pt = head;
    let prePt = pre;
    for (let i = 0; i < k - 1; i++) {
      pn = pt.next;
      pt.next = prePt;
      prePt = pt;
      pt = pn;
    }
    pn = pt.next;
    pt.next = prePt;
    head.next = pn;
    pre.next = pt;
  };
  let pre = new ListNode("yum");
  pre.next = head;
  let pt = pre;
  let pn;
  let idx = 0;
  while (pt.next) {
    idx++;
    pn = pt.next;
    if (idx % k == 1) reverse(pn, k, pt);
    pt = pt.next;
  }
  return pre.next;
};
// @lc code=end

function ListNode(val) {
  this.val = val;
  this.next = null;
}

let yum = new ListNode("yum");
var p = yum;
for (let i = 0; i < 5; i++) {
  p.next = new ListNode(i + 1);
  p = p.next;
}
reverseKGroup(yum.next, 2);
console.log(yum);
