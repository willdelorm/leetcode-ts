/*
 * Problem: Two Sum II (#167) — Medium
 * Pattern: Two Pointers
 * Date: 2026-03-16
 * NeetCode: Yes
 *
 * Approach:
 *   Use two pointers that start the either end of the input array.
 *   On a loop, check if the target sum is met.
 *   If the sum is greater than the target, move the right pointer one index left.
 *   If the sum is less than the target, move the left pointer one index right.
 *
 * Time:  O(n)
 * Space: O(1)
 *
 * Gotchas:
 *   Remember to include a return value if no solution exists.
 *
 * Comfort: 5
 *
 * Revisit: No
 */

function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) return [left + 1, right + 1];
    else if (sum > target) right--;
    else if (sum < target) left++;
  }

  return [-1, -1];
}

// ─── Test Cases ───────────────────────────────────────────────────────────────

console.log(twoSum([2, 7, 11, 15], 9)); // expected: [1, 2]
console.log(twoSum([2, 3, 4], 6)); // expected: [1, 3]
console.log(twoSum([-1, 0], -1)); // expected: [1, 2]
