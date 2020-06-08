/*
 * @lc app=leetcode.cn id=40 lang=csharp
 *
 * [40] 组合总和 II
 *
 * https://leetcode-cn.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (61.70%)
 * Likes:    278
 * Dislikes: 0
 * Total Accepted:    60.2K
 * Total Submissions: 97.6K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * 给定一个数组 candidates 和一个目标数 target ，找出 candidates 中所有可以使数字和为 target 的组合。
 * 
 * candidates 中的每个数字在每个组合中只能使用一次。
 * 
 * 说明：
 * 
 * 
 * 所有数字（包括目标数）都是正整数。
 * 解集不能包含重复的组合。 
 * 
 * 
 * 示例 1:
 * 
 * 输入: candidates = [10,1,2,7,6,1,5], target = 8,
 * 所求解集为:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * 示例 2:
 * 
 * 输入: candidates = [2,5,2,1,2], target = 5,
 * 所求解集为:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 */
using System;
using System.Collections;
using System.Collections.Generic;
// @lc code=start
public class Solution {
    public IList<IList<int>> CombinationSum2(int[] candidates, int target) {
        IList<IList<int>> result = new List<IList<int>>();
        Dictionary<int,int> dic = new Dictionary<int, int>();
        Array.Sort(candidates);
        foreach(int i in candidates){
            if(dic.ContainsKey(i)) dic[i]++;
            else dic.Add(i,1);
        }
        List<int> keys = new List<int>(dic.Keys);
        dfs(ref dic,keys,target,ref result,0,new List<int>());
        return result;
    }

    private void dfs(ref Dictionary<int,int> dic,List<int> keys,int target,ref IList<IList<int>> result,int firstidx,List<int> temp){
        for(int idx=firstidx;idx<keys.Count;idx++){
            int key = keys[idx];
            List<int> list = new List<int>(temp);
            list.Add(key);
            dic[key]--;
            int tempsum = sum(list);
            if(tempsum>target){
                dic[key]++;
                return;
            }else if(tempsum==target){
                result.Add(list);
                dic[key]++;
                return;
            }else{
                if(dic[key]>0) dfs(ref dic,keys,target,ref result,idx,list);
                else if(idx==keys.Count-1){
                    // Console.WriteLine("last idx");
                    dic[key]++;
                    return;
                }else dfs(ref dic,keys,target,ref result,idx+1,list); 

                dic[key]++;
            }
        }
    }

    private int sum(List<int> temp){
        int sum=0;
        foreach(int i in temp)sum+=i;
        return sum;
    }

}
// @lc code=end

