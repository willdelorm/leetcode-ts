/*
 * Problem: Permutation in String (#567) — Medium
 * Pattern: Sliding Window
 * Date: 2026-04-09
 * NeetCode: Yes
 *
 * Approach:
 *   [2–3 sentences. Explain the core idea in plain English.
 *    If you can't explain it simply, you don't own it yet.]
 *
 * Time:  O(n)
 * Space: O(n)
 *
 * Gotchas:
 *   [Edge cases that tripped you up, or things to remember next time.]
 *
 * Comfort: 3
 *
 * Revisit: Yes
 */

function checkInclusion(s1: string, s2: string): boolean {
  const map1 = new Map<string, number>();
  for (let ch of s1) map1.set(ch, (map1.get(ch) || 0) + 1);
  const map2 = new Map<string, number>();
  let start = 0;
  let matches = 0;
  for (let end = 0; end < s2.length; end++) {
    // Add next character to map
    if (map1.has(s2[end]) && map2.get(s2[end]) === map1.get(s2[end])) matches--;
    map2.set(s2[end], (map2.get(s2[end]) || 0) + 1);
    if (map1.has(s2[end]) && map2.get(s2[end]) === map1.get(s2[end])) matches++;
    // Shift start once window size equals s1 length
    if (end - start + 1 > s1.length) {
      if (map1.has(s2[start]) && map2.get(s2[start]) === map1.get(s2[start]))
        matches--;
      map2.set(s2[start], map2.get(s2[start])! - 1);
      if (map1.has(s2[start]) && map2.get(s2[start]) === map1.get(s2[start]))
        matches++;
      start++;
    }
    if (matches === map1.size) {
      return true;
    }
  }
  return false;
}

// ─── Test Cases ───────────────────────────────────────────────────────────────

console.log(checkInclusion("ab", "eidbaooo")); // expected: true
console.log(checkInclusion("ab", "eidboaoo")); // expected: false
console.log(checkInclusion("hello", "ooolleoooleh")); // expected: false
