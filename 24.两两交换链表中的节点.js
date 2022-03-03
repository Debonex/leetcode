/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let noob = new ListNode("head");
  let t0 = noob;
  t0.next = head;
  let t1;
  let t2;
  while ((t1 = t0.next) && (t2 = t1.next)) {
    t1.next = t2.next;
    t2.next = t1;
    t0.next = t2;

    t0 = t0.next;
    t0 = t0.next;
  }
  return noob.next;
};
// @lc code=end
