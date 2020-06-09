/*
 * @lc app=leetcode.cn id=4 lang=csharp
 *
 * [4] 寻找两个正序数组的中位数
 *
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (38.17%)
 * Likes:    2683
 * Dislikes: 0
 * Total Accepted:    200.9K
 * Total Submissions: 526.3K
 * Testcase Example:  '[1,3]\n[2]'
 *
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。
 * 
 * 请你找出这两个正序数组的中位数，并且要求算法的时间复杂度为 O(log(m + n))。
 * 
 * 你可以假设 nums1 和 nums2 不会同时为空。
 * 
 * 
 * 
 * 示例 1:
 * 
 * nums1 = [1, 3]
 * nums2 = [2]
 * 
 * 则中位数是 2.0
 * 
 * 
 * 示例 2:
 * 
 * nums1 = [1, 2]
 * nums2 = [3, 4]
 * 
 * 则中位数是 (2 + 3)/2 = 2.5
 * 
 * 
 */
using System;
using System.Collections;
using System.Collections.Generic;
// @lc code=start
public class Solution
{
    public double FindMedianSortedArrays(int[] nums1, int[] nums2)
    {
        int len = nums1.Length + nums2.Length;
        if (len % 2 == 0)
        {
            return ((double)findKthLeast(nums1, nums2, 0, 0, len / 2) + (double)findKthLeast(nums1, nums2, 0, 0, len / 2 + 1)) / 2;
        }
        else return (double)findKthLeast(nums1, nums2, 0, 0, len / 2 + 1);
    }

    private int findKthLeast(int[] nums1, int[] nums2, int s1, int s2, int k)
    {
        // Console.WriteLine(s1 + " " + s2 + " " + k);
        if (nums1.Length - s1 < 1) return nums2[s2 + k - 1];
        if (nums2.Length - s2 < 1) return nums1[s1 + k - 1];
        if (k == 1) return (nums1[s1] > nums2[s2] ? nums2[s2] : nums1[s1]);
        int n1, n2;
        bool isN1Last = false;
        bool isN2Last = false;
        if (s1 + k / 2 - 1 > nums1.Length - 1)
        {
            n1 = nums1[nums1.Length - 1];
            isN1Last = true;
        }
        else n1 = nums1[s1 + k / 2 - 1];
        if (s2 + k / 2 - 1 > nums2.Length - 1)
        {
            n2 = nums2[nums2.Length - 1];
            isN2Last = true;
        }
        else n2 = nums2[s2 + k / 2 - 1];
        if (n1 <= n2)
        {
            if (isN1Last)
            {
                k -= (nums1.Length - s1);
                s1 = nums1.Length;
            }
            else
            {
                s1 = s1 + k / 2;
                k -= (k / 2);
            }
        }
        else
        {
            if (isN2Last)
            {
                k -= (nums2.Length - s2);
                s2 = nums2.Length;
            }
            else
            {
                s2 = s2 + k / 2;
                k -= (k / 2);
            }
        }
        return findKthLeast(nums1, nums2, s1, s2, k);
    }
}
// @lc code=end

