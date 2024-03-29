/*
 * @lc app=leetcode.cn id=785 lang=javascript
 *
 * [785] 判断二分图
 *
 * https://leetcode-cn.com/problems/is-graph-bipartite/description/
 *
 * algorithms
 * Medium (46.32%)
 * Likes:    93
 * Dislikes: 0
 * Total Accepted:    9.8K
 * Total Submissions: 21.1K
 * Testcase Example:  '[[1,3],[0,2],[1,3],[0,2]]'
 *
 * 给定一个无向图graph，当这个图为二分图时返回true。
 *
 * 如果我们能将一个图的节点集合分割成两个独立的子集A和B，并使图中的每一条边的两个节点一个来自A集合，一个来自B集合，我们就将这个图称为二分图。
 *
 *
 * graph将会以邻接表方式给出，graph[i]表示图中与节点i相连的所有节点。每个节点都是一个在0到graph.length-1之间的整数。这图中没有自环和平行边：
 * graph[i] 中不存在i，并且graph[i]中没有重复的值。
 *
 *
 *
 * 示例 1:
 * 输入: [[1,3], [0,2], [1,3], [0,2]]
 * 输出: true
 * 解释:
 * 无向图如下:
 * 0----1
 * |    |
 * |    |
 * 3----2
 * 我们可以将节点分成两组: {0, 2} 和 {1, 3}。
 *
 *
 *
 *
 * 示例 2:
 * 输入: [[1,2,3], [0,2], [0,1,3], [0,2]]
 * 输出: false
 * 解释:
 * 无向图如下:
 * 0----1
 * | \  |
 * |  \ |
 * 3----2
 * 我们不能将节点分割成两个独立的子集。
 *
 *
 * 注意:
 *
 *
 * graph 的长度范围为 [1, 100]。
 * graph[i] 中的元素的范围为 [0, graph.length - 1]。
 * graph[i] 不会包含 i 或者有重复的值。
 * 图是无向的: 如果j 在 graph[i]里边, 那么 i 也会在 graph[j]里边。
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} graph
 * @return {boolean}
 */
var isBipartite = function (graph) {
  sides = new Array(graph.length);
  for (let i = 0; i < sides.length; i++) sides[i] = new Array(graph.length);
  points = new Array(graph.length);
  for (let i = 0; i < points.length; i++) points[i] = -1;
  let dfs = function (i) {
    for (let j = 0; j < graph[i].length; j++) {
      let toIdx = graph[i][j];
      if (!sides[i][toIdx]) {
        if (points[toIdx] == -1) {
          points[toIdx] = 1 - points[i];
        } else if (points[toIdx] == points[i]) {
          return true;
        }
        sides[i][toIdx] = 1;
        sides[toIdx][i] = 1;
        if (dfs(toIdx)) return true;
      }
    }
    return false;
  };
  for (let i = 0; i < graph.length; i++) {
    if (points[i] == -1) {
      points[i] = 0;
      if (dfs(i)) return false;
    }
  }
  return true;
};
// @lc code=end
