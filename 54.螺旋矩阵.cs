/*
 * @lc app=leetcode.cn id=54 lang=csharp
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (40.50%)
 * Likes:    392
 * Dislikes: 0
 * Total Accepted:    63.3K
 * Total Submissions: 156.2K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 * 
 * 示例 1:
 * 
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 * 
 * 
 * 示例 2:
 * 
 * 输入:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 * 
 * 
 */
using System.Collections;
using System.Collections.Generic;
// @lc code=start
public class Solution
{
    public IList<int> SpiralOrder(int[][] matrix)
    {
        IList<int> result = new List<int>();
        if (matrix.Length == 0) return result;
        int direction = 0, i = 0, j = 0;
        int height = matrix.Length;
        int width = matrix[0].Length;
        bool[,] flags = new bool[height, width];
        while (true)
        {
            result.Add(matrix[i][j]);
            flags[i, j] = true;
            if (direction == 0)
            {
                if (j + 1 < width && !flags[i, j + 1]) j++;
                else if (i + 1 < height && !flags[i + 1, j])
                {
                    i++;
                    direction = 1;
                }
                else return result;
            }
            else if (direction == 1)
            {
                if (i + 1 < height && !flags[i + 1, j]) i++;
                else if (j - 1 >= 0 && !flags[i, j - 1])
                {
                    j--;
                    direction = 2;
                }
                else return result;
            }
            else if (direction == 2)
            {
                if (j - 1 >= 0 && !flags[i, j - 1]) j--;
                else if (i - 1 >= 0 && !flags[i - 1, j])
                {
                    i--;
                    direction = 3;
                }
                else return result;
            }
            else if (direction == 3)
            {
                if (i - 1 >= 0 && !flags[i - 1, j]) i--;
                else if (j + 1 < width && !flags[i, j + 1])
                {
                    j++;
                    direction = 0;
                }
                else return result;
            }
        }
    }
}
// @lc code=end

