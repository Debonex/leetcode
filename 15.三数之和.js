/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 *
 * https://leetcode-cn.com/problems/3sum/description/
 *
 * algorithms
 * Medium (27.07%)
 * Likes:    2136
 * Dislikes: 0
 * Total Accepted:    224K
 * Total Submissions: 827.3K
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0
 * ？请你找出所有满足条件且不重复的三元组。
 * 
 * 注意：答案中不可以包含重复的三元组。
 * 
 * 
 * 
 * 示例：
 * 
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 
 * 满足要求的三元组集合为：
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(!nums || nums.length<3) return []
    nums.sort((x,y)=>x-y)
    console.log(nums)
    const len = nums.length
    let res = []
    for(let i=0;i<len-2;i++){
        if(i>0 && nums[i]==nums[i-1]) continue
        let l = i+1
        let r = len-1
        while(l<r){
            if(l>i+1)
                while(nums[l]==nums[l-1]) l++
            if(r<len-1)
                while(nums[r]==nums[r+1]) r--
            if(l>=r)break
            if(nums[i]+nums[l]+nums[r]==0){
                // console.log(i+' '+l+' '+r)
                res.push([nums[i],nums[l],nums[r]])
                l++
                r--
            }else if(nums[i]+nums[l]+nums[r]>0){
                r--
            }else{
                l++
            }
        }
    }
    return res
};
// @lc code=end
// var list = [-4,-2,-2,-2,0,1,2,2,2,3,3,4,4,6,6]
// console.log(threeSum(list))
