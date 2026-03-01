/*
 * Problem: Contains Duplicate (#217) — Easy
 * Pattern: Arrays & Hashing
 * Date: 2026-02-28
 * NeetCode: Yes
 *
 * Approach: Map contains values that have already appeared.
 *    Check each value against the map.
 *    Return true if the value already exists.
 *    If no duplicates exist, return false.
 *
 * Time:  O(n)
 * Space: O(n)
 *
 * Gotchas: None
 *
 * Comfort: 5
 *
 * Revisit: No
 */

function containsDuplicate(nums: number[]): boolean {
    const seen = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const val = seen.get(num);
        if (val !== undefined) {
            return true;
        }
        seen.set(num, 1);
    }
    return false;
};

// ─── Test Cases ───────────────────────────────────────────────────────────────

console.log(containsDuplicate([1,2,3,1])); // expected: true
console.log(containsDuplicate([1,2,3,4])); // expected: false
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2])); // expected: true
