/*
 * Problem: Two Sum (#1) — Easy
 * Pattern: Arrays & Hashing
 * Date: 2026-02-27
 *
 * Approach: HashMap storing complement (target - x).
 * One pass: for each num, check if complement exists in map.
 * If yes → return indices. If no → store num with its index.
 *
 * Time: O(n)  Space: O(n)
 *
 * Gotchas: Don't use the same element twice. Check map BEFORE inserting.
 * 
 * Comfort: 5
 * Revisit: No
 */

function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const complement = target - num;
        const j = seen.get(complement);
        if (j !== undefined) {
            return [i, j];
        }
        seen.set(num, i);
    }
    throw new Error("No solution exists");
};