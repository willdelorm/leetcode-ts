/*
 * Problem: Top K Frequent Elements (#347) — Medium
 * Pattern: Arrays & Hashing
 * Date: 2026-03-04
 * NeetCode: Yes
 *
 * Approach:
 *   Find the frequency for each element.
 *   Use bucket sort to sort elements by frequency.
 *   Return k most frequent elements.
 *
 * Time:  O(n)
 * Space: O(n)
 *
 * Gotchas:
 *   Array sort method is O(n log n). Bucket sort is faster.
 *
 * Comfort: 4
 *
 * Revisit: No
 */

function topKFrequent(nums: number[], k: number): number[] {
    const freq = new Map<number, number>();
    for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);

    const buckets: number[][] = Array.from({ length: nums.length + 1 }, () => []);
    for (const [n, f] of freq) buckets[f].push(n);

    const results: number[] = [];
    for (let i = buckets.length - 1; i >= 0 && results.length < k; i--) {
        results.push(...buckets[i]);
    }
    return results;
};

// ─── Test Cases ───────────────────────────────────────────────────────────────

console.log(topKFrequent([1,1,1,2,2,3], 2)); // expected: [1, 2]
console.log(topKFrequent([1], 1)); // expected: [1]
console.log(topKFrequent([1,2,1,2,1,2,3,1,3,2], 2)); // expected: [1, 2]
