/*
 * @lc app=leetcode.cn id=50 lang=csharp
 *
 * [50] Pow(x, n)
 *
 * https://leetcode-cn.com/problems/powx-n/description/
 *
 * algorithms
 * Medium (35.89%)
 * Likes:    415
 * Dislikes: 0
 * Total Accepted:    98.8K
 * Total Submissions: 275.3K
 * Testcase Example:  '2.00000\n10'
 *
 * 实现 pow(x, n) ，即计算 x 的 n 次幂函数。
 * 
 * 示例 1:
 * 
 * 输入: 2.00000, 10
 * 输出: 1024.00000
 * 
 * 
 * 示例 2:
 * 
 * 输入: 2.10000, 3
 * 输出: 9.26100
 * 
 * 
 * 示例 3:
 * 
 * 输入: 2.00000, -2
 * 输出: 0.25000
 * 解释: 2^-2 = 1/2^2 = 1/4 = 0.25
 * 
 * 说明:
 * 
 * 
 * -100.0 < x < 100.0
 * n 是 32 位有符号整数，其数值范围是 [−2^31, 2^31 − 1] 。
 * 
 * 
 */
using System;
// @lc code=start
public class Solution
{
    public double MyPow(double x, int n)
    {
        if (n == 0) return 1;
        if (x == 1) return 1;
        if (x == -1) return (n % 2 == 0 ? 1 : -1);
        double res = 1;
        double mult = x;
        if (n > 0)
            while (n > 0)
            {
                if (n % 2 == 1) res *= mult;
                mult *= mult;
                n /= 2;
            }
        else
        {
            if (n == -2147483648) return 0;
            n *= -1;
            while (n > 0)
            {
                if (n % 2 == 1) res /= mult;
                mult *= mult;
                n /= 2;
                Console.WriteLine(n);
            }
        }
        return res;
    }
}
// @lc code=end

