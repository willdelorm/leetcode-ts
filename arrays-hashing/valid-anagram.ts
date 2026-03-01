/*
 * Problem: Valid Anagram (#242) — Easy
 * Pattern: Arrays & Hashing
 * Date: 2026-02/28
 * NeetCode: Yes
 *
 * Approach:
 *   Map the number of appearances of each character in string "s"
 *   Confirm number of apperances of each character in string "t" against the map.
 *   If the number of appearances differ, return false. Otherwise, return true.
 *
 * Time:  O(n)
 * Space: O(n)
 *
 * Gotchas:
 *   When checking if two strings match, confirm they are the same length first.
 *
 * Comfort: 5
 *
 * Revisit: No
 */

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const seen = new Map<string, number>();
  for (const char of s) {
    seen.set(char, (seen.get(char) ?? 0) + 1);
  }

  for (const char of t) {
    const sCount = seen.get(char) ?? 0;
    if (sCount == 0) {
      return false;
    } else {
      seen.set(char, sCount - 1);
    }
  }

  return true;
}

// ─── Test Cases ───────────────────────────────────────────────────────────────

console.log(isAnagram("anagram", "nagaram")); // expected: true
console.log(isAnagram("rat", "car")); // expected: false
console.log(isAnagram("ab", "a")); // expected: false
