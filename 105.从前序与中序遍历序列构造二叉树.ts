/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
 *
 * https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (68.26%)
 * Likes:    710
 * Dislikes: 0
 * Total Accepted:    120.3K
 * Total Submissions: 176.2K
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * 根据一棵树的前序遍历与中序遍历构造二叉树。
 *
 * 注意:
 * 你可以假设树中没有重复的元素。
 *
 * 例如，给出
 *
 * 前序遍历 preorder = [3,9,20,15,7]
 * 中序遍历 inorder = [9,3,15,20,7]
 *
 * 返回如下的二叉树：
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 */
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  function createTree(rootIdx: number, l: number, r: number): TreeNode | null {
    if (r < 0 || rootIdx >= preorder.length) {
      return null;
    }
    let pt = l;
    while (preorder[rootIdx] != inorder[pt] && pt <= r) pt++;
    if (pt > r) return null;
    var root = new TreeNode(preorder[rootIdx]);
    root.left = createTree(rootIdx + 1, l, pt - 1);
    root.right = createTree(pt - l + rootIdx + 1, pt + 1, r);
    return root;
  }

  return createTree(0, 0, inorder.length - 1);
}
// @lc code=end

let preorder = [3, 9, 20, 15, 7];
let inorder = [9, 3, 15, 20, 7];
console.log(buildTree(preorder, inorder));
