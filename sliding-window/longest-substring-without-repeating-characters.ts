/*
 * Problem: Longest Substring Without Repeating Characters (#3) — Medium
 * Pattern: Sliding Window
 * Date: 2026-03-26
 * NeetCode: Yes
 *
 * Approach:
 *   If you encounter a duplicate as you traverse the string,
 *   move the left pointer one index past the previous appearance.
 *
 * Time:  O(n)
 * Space: O(n)
 *
 * Comfort: 3
 *
 * Revisit: Yes
 */

function lengthOfLongestSubstring(s: string): number {
  let maxLen = 0;
  let left = 0;
  const lastSeen = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    if (lastSeen.has(s[i]) && lastSeen.get(s[i])! >= left) {
      left = Math.max(left, lastSeen.get(s[i])! + 1);
    }
    lastSeen.set(s[i], i);
    maxLen = Math.max(maxLen, i - left + 1);
  }

  return maxLen;
}

// ─── Test Cases ───────────────────────────────────────────────────────────────

console.log(lengthOfLongestSubstring("abcabcbb")); // expected: 3
console.log(lengthOfLongestSubstring("bbbbb")); // expected: 1
console.log(lengthOfLongestSubstring("pwwkew")); // expected: 3
console.log(lengthOfLongestSubstring("tmmzuxt")); // expected: 5
