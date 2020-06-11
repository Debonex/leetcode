/*
 * @lc app=leetcode.cn id=59 lang=csharp
 *
 * [59] 螺旋矩阵 II
 *
 * https://leetcode-cn.com/problems/spiral-matrix-ii/description/
 *
 * algorithms
 * Medium (77.49%)
 * Likes:    192
 * Dislikes: 0
 * Total Accepted:    36.2K
 * Total Submissions: 46.7K
 * Testcase Example:  '3'
 *
 * 给定一个正整数 n，生成一个包含 1 到 n^2 所有元素，且元素按顺时针顺序螺旋排列的正方形矩阵。
 * 
 * 示例:
 * 
 * 输入: 3
 * 输出:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 * 
 */
using System;
// @lc code=start
public class Solution
{
    public int[][] GenerateMatrix(int n)
    {
        int[][] result = new int[n][];
        for (int k = 0; k < n; k++) result[k] = new int[n];
        int direction = 0;
        int i = 0, j = 0;
        for (int k = 1; k <= n * n; k++)
        {
            result[i][j] = k;
            // Console.WriteLine(i + " " + j);
            if (direction == 0)
            {
                if (j + 1 < n && result[i][j + 1] == 0) j++;
                else
                {
                    direction = 1;
                    i++;
                }
            }
            else if (direction == 1)
            {
                if (i + 1 < n && result[i + 1][j] == 0) i++;
                else
                {
                    direction = 2;
                    j--;
                }
            }
            else if (direction == 2)
            {
                if (j - 1 >= 0 && result[i][j - 1] == 0) j--;
                else
                {
                    direction = 3;
                    i--;
                }
            }
            else if (direction == 3)
            {
                if (i - 1 >= 0 && result[i - 1][j] == 0) i--;
                else
                {
                    direction = 0;
                    j++;
                }
            }
        }
        return result;
    }
}
// @lc code=end

