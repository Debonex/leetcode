/*
 * @lc app=leetcode.cn id=23 lang=javascript
 *
 * [23] 合并K个排序链表
 *
 * https://leetcode-cn.com/problems/merge-k-sorted-lists/description/
 *
 * algorithms
 * Hard (52.27%)
 * Likes:    791
 * Dislikes: 0
 * Total Accepted:    142.9K
 * Total Submissions: 273.4K
 * Testcase Example:  '[[1,4,5],[1,3,4],[2,6]]'
 *
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 
 * 示例:
 * 
 * 输入:
 * [
 * 1->4->5,
 * 1->3->4,
 * 2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length == 0) return null
    if (lists.length == 1) return lists[0]

    let merge = function (l1, l2) {
        let p1 = l1, p2 = l2
        let res = new ListNode(-1)
        let resp = res
        while (p1 && p2) {
            if (p1.val < p2.val) {
                resp.next = p1
                p1 = p1.next
            } else {
                resp.next = p2
                p2 = p2.next
            }
            resp = resp.next
        }
        if (p1) resp.next = p1
        if (p2) resp.next = p2
        return res.next
    }

    let listsPt = 1
    let res = lists[0]
    while (listsPt < lists.length) {
        res = merge(res, lists[listsPt++])
    }
    return res
};
// @lc code=end

