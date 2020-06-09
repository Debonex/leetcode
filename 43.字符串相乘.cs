/*
 * @lc app=leetcode.cn id=43 lang=csharp
 *
 * [43] 字符串相乘
 *
 * https://leetcode-cn.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (42.31%)
 * Likes:    348
 * Dislikes: 0
 * Total Accepted:    65.7K
 * Total Submissions: 155.3K
 * Testcase Example:  '"2"\n"3"'
 *
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 
 * 示例 1:
 * 
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 * 
 * 示例 2:
 * 
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 * 
 * 说明：
 * 
 * 
 * num1 和 num2 的长度小于110。
 * num1 和 num2 只包含数字 0-9。
 * num1 和 num2 均不以零开头，除非是数字 0 本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 * 
 * 
 */

// @lc code=start
public class Solution {
    public string Multiply(string num1, string num2)
    {
        string result = "0";
        string temp;
        int pt = num2.Length - 1;
        int cnt = 0;
        while (pt >= 0)
        {
            temp = Multiply(num1, num2[pt--]);
            plusZero(ref temp, cnt++);
            result = Add(result, temp);
        }
        while (result.Length > 1 && result[0] == '0') result = result.Remove(0, 1);
        return result;
    }

    private string Add(string num1, string num2)
    {
        string result = "";
        int pt1 = num1.Length - 1;
        int pt2 = num2.Length - 1;
        bool carry = false;
        while (pt1 >= 0 && pt2 >= 0)
        {
            int i = num1[pt1] + num2[pt2] - '0' - '0';
            i += (carry ? 1 : 0);
            carry = (i > 9);
            result = (i % 10) + result;
            pt1--;
            pt2--;
        }
        while (pt1 >= 0)
        {
            int i = num1[pt1] + (carry ? 1 : 0) - '0';
            carry = (i > 9);
            i %= 10;
            result = i + result;
            pt1--;
        }
        while (pt2 >= 0)
        {
            int i = num2[pt2] + (carry ? 1 : 0) - '0';
            carry = (i > 9);
            i %= 10;
            result = i + result;
            pt2--;
        }
        if (carry) result = '1' + result;
        return result;
    }

    private string Multiply(string num, char c)
    {
        int pt = num.Length - 1;
        string result = "";
        int carry = 0;
        int bit;
        while (pt >= 0)
        {
            int product = (num[pt] - '0') * (c - '0');
            bit = product % 10;
            bit += carry;
            result = (bit % 10) + result;
            carry = product / 10;
            carry += (bit > 9 ? 1 : 0);
            pt--;
            // Console.WriteLine(product+" "+bit+" "+carry+" "+result);
        }
        if (carry > 0) result = carry + result;
        return result;
    }

    private void plusZero(ref string target, int num)
    {
        for (int i = 0; i < num; i++) target += '0';
    }
}
// @lc code=end

