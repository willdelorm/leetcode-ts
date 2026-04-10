/*
 * Problem: [Name] (#[LC Number]) — [Easy / Medium / Hard]
 * Pattern: [e.g. Arrays & Hashing, Two Pointers, Trees]
 * Date: [YYYY-MM-DD]
 * NeetCode: [Yes / No]
 *
 * Approach:
 *   [2–3 sentences. Explain the core idea in plain English.
 *    If you can't explain it simply, you don't own it yet.]
 *
 * Time:  O(?)
 * Space: O(?)
 *
 * Gotchas:
 *   [Edge cases that tripped you up, or things to remember next time.]
 *
 * Comfort: [1–5]
 *   1 = Had to look up solution
 *   2 = Struggled significantly
 *   3 = Got there but slow / shaky
 *   4 = Solid with minor hesitation
 *   5 = Clean and confident
 *
 * Revisit: [Yes / No]  ← set Yes if Comfort <= 3
 */

/*
Thoughts
  Window grows to length of s1, then slides



Pseudocode
  Ingest s1 to a map { a=1, b=1 }
  Loop through s2
    If a char isn't in s1,
      move start to next index
      remove any counts from s2 map
    If a char is in s1,
      Add to s2 map { b=1 }
      Compare curr char count to s1's count ()
      If too many, move start up
        If window's length = s1 length, return true
  Return false
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
