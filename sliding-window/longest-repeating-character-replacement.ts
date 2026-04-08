/*
 * Problem: Longest Repeating Character Replacement (#424) — Medium
 * Pattern: Sliding Window
 * Date: 2026-04-08
 * NeetCode: Yes
 *
 * Approach:
 *   Grow the window until there are more than k characters, then slide the window forward.
 *
 * Time:  O(n)
 * Space: O(n)
 *
 * Gotchas:
 *   The left side of the window only needs to shift once per loop because the window does not need to shrink.
 *
 * Comfort: 2
 *
 * Revisit: Yes
 */

function characterReplacement(s: string, k: number): number {
  const freqSeen = new Map<string, number>();
  let favChar = s[0];
  let maxCount = 0;
  let start = 0;

  for (let end = 0; end < s.length; end++) {
    // Add next character
    freqSeen.set(s[end], (freqSeen.get(s[end]) || 0) + 1);
    // Determine most popular character
    if (freqSeen.get(s[end])! > freqSeen.get(favChar)!) {
      favChar = s[end];
    }
    // Shift start forward if too many k
    if (end - start + 1 - freqSeen.get(favChar)! > k) {
      freqSeen.set(s[start], freqSeen.get(s[start])! - 1);
      start++;
    }
    // Compare maxCount to current window
    maxCount = Math.max(maxCount, end - start + 1);
  }

  return maxCount;
}

// ─── Test Cases ───────────────────────────────────────────────────────────────

console.log(characterReplacement("ABAB", 2)); // expected: 4
console.log(characterReplacement("AABABBA", 1)); // expected: 4
console.log(
  characterReplacement(
    "EQQEJDOBDPDPFPEIAQLQGDNIRDDGEHJIORMJPKGPLCPDFMIGHJNIIRSDSBRNJNROBALNSHCRFBASTLRMENCCIBJLGAITBFCSMPRO",
    2,
  ),
); // expected: 5
