/*
 * Problem: Longest Consecutive Sequence (#128) — Medium
 * Pattern: Arrays & Hashing
 * Date: 2026-03-11
 * NeetCode: Yes
 *
 * Approach:
 *   Create a Set of unique values from nums.
 *   Check if each value is a starting value.
 *     If so, loop to find the length of the sequence.
 *   Return the longest sequence length.
 *
 * Time:  O(n)
 * Space: O(n)
 *
 * Gotchas:
 *
 * Comfort: 5
 *
 * Revisit: No
 */

function longestConsecutive(nums: number[]): number {
  const numsSet = new Set<number>(nums);
  let longest = 0;

  for (const n of numsSet) {
    if (!numsSet.has(n - 1)) {
      let len = 1;
      while (numsSet.has(n + len)) len++;
      longest = Math.max(longest, len);
    }
  }

  return longest;
}

// ─── Test Cases ───────────────────────────────────────────────────────────────

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // expected: 4
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); // expected: 9
console.log(longestConsecutive([1, 0, 1, 2])); // expected: 3
