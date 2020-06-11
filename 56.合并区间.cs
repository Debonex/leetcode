/*
 * @lc app=leetcode.cn id=56 lang=csharp
 *
 * [56] 合并区间
 *
 * https://leetcode-cn.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (42.66%)
 * Likes:    450
 * Dislikes: 0
 * Total Accepted:    103.5K
 * Total Submissions: 242.7K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * 给出一个区间的集合，请合并所有重叠的区间。
 * 
 * 示例 1:
 * 
 * 输入: [[1,3],[2,6],[8,10],[15,18]]
 * 输出: [[1,6],[8,10],[15,18]]
 * 解释: 区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].
 * 
 * 
 * 示例 2:
 * 
 * 输入: [[1,4],[4,5]]
 * 输出: [[1,5]]
 * 解释: 区间 [1,4] 和 [4,5] 可被视为重叠区间。
 * 
 */
using System.Collections;
using System.Collections.Generic;
// @lc code=start
public class Solution
{
    public int[][] Merge(int[][] intervals)
    {
        if (intervals.Length == 0) return intervals;
        List<int[]> result = new List<int[]>();
        result.Add(intervals[0]);
        for (int i = 1; i < intervals.Length; i++)
        {
            int ml = intervals.Length, mr = -1;
            for (int j = 0; j < result.Count; j++)
            {
                if (!(intervals[i][1] < result[j][0] || intervals[i][0] > result[j][1]))
                {
                    ml = ml < j ? ml : j;
                    mr = j;
                }
            }
            if (mr != -1)
            {
                result[ml][0] = (result[ml][0] < intervals[i][0] ? result[ml][0] : intervals[i][0]);
                result[ml][1] = (result[mr][1] > intervals[i][1] ? result[mr][1] : intervals[i][1]);
                if (mr > ml)
                    result.RemoveRange(ml + 1, mr - ml);
                continue;
            }
            bool isInsert = false;
            for (int j = 0; j < result.Count; j++)
            {
                if (intervals[i][1] < result[j][0])
                {
                    result.Insert(j, intervals[i]);
                    isInsert = true;
                    break;
                }
            }
            if (!isInsert) result.Add(intervals[i]);
        }

        return result.ToArray();
    }
}
// @lc code=end

