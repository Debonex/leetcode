/*
 * @lc app=leetcode.cn id=78 lang=typescript
 *
 * [78] 子集
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];

  const back = (arr: number[], idx: number) => {
    result.push(arr);
    for (let i = idx; i < nums.length; i++) {
      back([...arr, nums[i]], i + 1);
    }
  };

  back([], 0);
  return result;
}
// @lc code=end
console.log(1)