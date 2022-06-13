/*
 * @lc app=leetcode.cn id=57 lang=rust
 *
 * [57] 插入区间
 *
 * https://leetcode-cn.com/problems/insert-interval/description/
 *
 * algorithms
 * Medium (41.41%)
 * Likes:    560
 * Dislikes: 0
 * Total Accepted:    100.9K
 * Total Submissions: 243.6K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * 给你一个 无重叠的 ，按照区间起始端点排序的区间列表。
 *
 * 在列表中插入一个新的区间，你需要确保列表中的区间仍然有序且不重叠（如果有必要的话，可以合并区间）。
 *
 *
 *
 * 示例 1：
 *
 *
 * 输入：intervals = [[1,3],[6,9]], newInterval = [2,5]
 * 输出：[[1,5],[6,9]]
 *
 *
 * 示例 2：
 *
 *
 * 输入：intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * 输出：[[1,2],[3,10],[12,16]]
 * 解释：这是因为新的区间 [4,8] 与 [3,5],[6,7],[8,10] 重叠。
 *
 * 示例 3：
 *
 *
 * 输入：intervals = [], newInterval = [5,7]
 * 输出：[[5,7]]
 *
 *
 * 示例 4：
 *
 *
 * 输入：intervals = [[1,5]], newInterval = [2,3]
 * 输出：[[1,5]]
 *
 *
 * 示例 5：
 *
 *
 * 输入：intervals = [[1,5]], newInterval = [2,7]
 * 输出：[[1,7]]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0
 * intervals[i].length == 2
 * 0
 * intervals 根据 intervals[i][0] 按 升序 排列
 * newInterval.length == 2
 * 0
 *
 *
 */
use super::Solution;
// @lc code=start
#[derive(Copy, Clone, Debug)]
enum Edge {
    Start(i32),
    End(i32),
}

impl Edge {
    fn value(&self) -> i32 {
        match self {
            Edge::Start(i) => *i,
            Edge::End(i) => *i,
        }
    }
}

impl Solution {
    pub fn insert(intervals: Vec<Vec<i32>>, new_interval: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = vec![];
        let mut edges = vec![];
        let mut l_flag = false;
        let mut r_flag = false;
        let new_interval_left_edge = Edge::Start(*new_interval.get(0).unwrap());
        let new_interval_right_edge = Edge::End(*new_interval.get(1).unwrap());
        intervals.iter().for_each(|interval| {
            if interval.len() > 0 {
                let l_edge = Edge::Start(*interval.get(0).unwrap());
                let r_edge = Edge::End(*interval.get(1).unwrap());
                if !l_flag && new_interval_left_edge.value() <= l_edge.value() {
                    edges.push(new_interval_left_edge);
                    l_flag = true;
                }
                if !r_flag && new_interval_right_edge.value() < l_edge.value() {
                    edges.push(new_interval_right_edge);
                    r_flag = true;
                }
                edges.push(l_edge);
                if !r_flag && new_interval_right_edge.value() == l_edge.value() {
                    edges.push(new_interval_right_edge);
                    r_flag = true;
                }
                if !l_flag && new_interval_left_edge.value() <= r_edge.value() {
                    edges.push(new_interval_left_edge);
                    l_flag = true;
                }
                if !r_flag && new_interval_right_edge.value() <= r_edge.value() {
                    edges.push(new_interval_right_edge);
                    r_flag = true;
                }
                edges.push(r_edge);
            }
        });
        if !l_flag {
            edges.push(new_interval_left_edge);
        }
        if !r_flag {
            edges.push(new_interval_right_edge);
        }

        let mut stack = vec![];
        edges.iter().for_each(|edge| match edge {
            Edge::Start(l) => stack.push(l),
            Edge::End(r) => {
                let l = stack.pop().unwrap();
                if stack.len() == 0 {
                    result.push(vec![*l, *r]);
                }
            }
        });

        result
    }
}
// @lc code=end

#[test]
fn test() {
    assert_eq!(
        Solution::insert(vec![vec![1, 5]], vec![2, 7]),
        vec![vec![1, 7]]
    );

    assert_eq!(Solution::insert(vec![vec![]], vec![5, 7]), vec![vec![5, 7]]);

    assert_eq!(
        Solution::insert(vec![vec![1, 5]], vec![2, 3]),
        vec![vec![1, 5]]
    );

    assert_eq!(
        Solution::insert(vec![vec![1, 3], vec![6, 9]], vec![2, 5]),
        vec![vec![1, 5], vec![6, 9]]
    );

    assert_eq!(
        Solution::insert(
            vec![
                vec![1, 2],
                vec![3, 5],
                vec![6, 7],
                vec![8, 10],
                vec![12, 16]
            ],
            vec![4, 8]
        ),
        vec![vec![1, 2], vec![3, 10], vec![12, 16]]
    );
}
