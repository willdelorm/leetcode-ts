/*
 * Problem: 3Sum (#15) — Medium
 * Pattern: Two Pointers
 * Date: 2026-03-18
 * NeetCode: Yes
 *
 * Approach:
 *   For each item in the (sorted) array passed, search for value pairs where the 3 values equal 0.
 *
 * Time:  O(n^2)
 * Space: O(n)
 *
 * Comfort: 3
 *
 * Revisit: Yes
 */

function threeSum(nums: number[]): number[][] {
  const results: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    const target = nums[i];
    if (i > 0 && target === nums[i - 1]) continue;

    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[left] + nums[right] + nums[i];
      if (sum === 0) {
        results.push([target, nums[left], nums[right]]);
        while (++left < right && nums[left] === nums[left - 1]);
        while (left < --right && nums[right] === nums[right + 1]);
      } else if (sum > 0) right--;
      else if (sum < 0) left++;
    }
  }

  return results;
}

// ─── Test Cases ───────────────────────────────────────────────────────────────

console.log(threeSum([-1, 0, 1, 2, -1, -4])); // expected: [[-1,-1,2],[-1,0,1]]
console.log(threeSum([0, 1, 1])); // expected: []
console.log(threeSum([0, 0, 0])); // expected: [[0,0,0]]
