/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 *
 * https://leetcode-cn.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (36.97%)
 * Likes:    634
 * Dislikes: 0
 * Total Accepted:    71.4K
 * Total Submissions: 193K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 * 
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 * 
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 * 
 * 示例:
 * 
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 * 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 * 
 * 
 * 说明:
 * 
 * 假设你总是可以到达数组的最后一个位置。
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let len = nums.length
    let res = 0
    let max = 0
    let end = 0
    for (let i = 0; i < len - 1; i++) {
        max = Math.max(max, i + nums[i])
        if (max >= len - 1) return res + 1
        if (i == end) {
            end = max
            res++
        }
    }
    return res
};

// @lc code=end

// let nums = [5, 6, 4, 4, 6, 9, 4, 4, 7, 4, 4, 8, 2, 6, 8, 1, 5, 9, 6, 5, 2, 7, 9, 7, 9, 6, 9, 4, 1, 6, 8, 8, 4, 4, 2, 0, 3, 8, 5]
// console.log(jump(nums))
// setTimeout(() => {

// }, 100);

// var jump = function (nums) {
//     let len = nums.length
//     if (len <= 1) return 0
//     let dist = Array(len)
//     dist[0] = 0
//     let todo = Array(0)
//     for (let i = 1; i <= nums[0] && i < len; i++) {
//         if (i == len - 1) return 1
//         dist[i] = 1
//         todo.push(i)
//     }
//     let cnt = 1
//     while (true) {
//         let l = todo.length
//         for (let i = 0; i < l; i++) {
//             let idx = todo[i]
//             if (idx + nums[idx] >= len - 1) return cnt + 1
//             for (let i = 1; i <= nums[idx] && idx + i < len; i++) {
//                 if (!dist[idx + i]) {
//                     dist[idx + i] = cnt + 1
//                     todo.push(idx + i)
//                 }
//             }
//         }
//         todo = todo.slice(l)
//         cnt++
//     }

// };