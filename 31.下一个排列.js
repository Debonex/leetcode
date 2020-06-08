/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 *
 * https://leetcode-cn.com/problems/next-permutation/description/
 *
 * algorithms
 * Medium (33.64%)
 * Likes:    501
 * Dislikes: 0
 * Total Accepted:    63.2K
 * Total Submissions: 188K
 * Testcase Example:  '[1,2,3]'
 *
 * 实现获取下一个排列的函数，算法需要将给定数字序列重新排列成字典序中下一个更大的排列。
 * 
 * 如果不存在下一个更大的排列，则将数字重新排列成最小的排列（即升序排列）。
 * 
 * 必须原地修改，只允许使用额外常数空间。
 * 
 * 以下是一些例子，输入位于左侧列，其相应输出位于右侧列。
 * 1,2,3 → 1,3,2
 * 3,2,1 → 1,2,3
 * 1,1,5 → 1,5,1
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    for(let i=nums.length-1;i>0;i--){
        if(nums[i]>nums[i-1]){
            for(let j=i;;j++){
                if(nums[j]==undefined||nums[j]<=nums[i-1]){
                    let temp = nums[i-1]
                    nums[i-1] = nums[j-1]
                    nums[j-1] = temp
                    let l = i
                    let r = nums.length-1
                    while(l<r){
                        let tp = nums[l]
                        nums[l] = nums[r]
                        nums[r] = tp
                        l++
                        r--
                    }
                    break
                }
            }
            return
        }
    }
    nums.sort((a,b)=>a-b)
    return
};
// @lc code=end
// var nums = [1,5,1]
// nextPermutation(nums)
// console.log(nums)
