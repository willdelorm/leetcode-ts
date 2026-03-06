/*
 * Problem: Product of Array Except Self (#238) — Medium
 * Pattern: Arrays & Hashing
 * Date: 2026-03-06
 * NeetCode: Yes
 *
 * Approach:
 *   Use prefix/suffix product technique.
 *   Iterate through array, finding products from the left for each index,
 *   then products from the right.
 *
 * Time:  O(n)
 * Space: O(1)
 *
 * Gotchas:
 *
 * Comfort: 5
 *
 * Revisit: No
 */

function solve(nums: number[]): number[] {
  const results: number[] = Array.from({ length: nums.length}, () => 1);

  let prefix = 1;
  for (let i = 0; i < nums.length; i++) {
    results[i] = prefix;
    prefix *= nums[i];
  }

  let suffix = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    results[i] *= suffix;
    suffix *= nums[i];
  }

  return results;
}

// ─── Test Cases ───────────────────────────────────────────────────────────────

console.log(solve([1,2,3,4])); // expected: [24,12,8,6]
console.log(solve([-1,1,0,-3,3])); // expected: [0,0,9,0,0]
