/*
 * Problem: Group Anagrams (#49) — Medium
 * Pattern: Arrays & Hashing
 * Date: 2026-03-03
 * NeetCode: Yes
 *
 * Approach:
 *   Sort each string into alphabetical characters.
 *   Map each sorted string to an array of matching strings.
 *
 * Time:  O(n)
 * Space: O(n)
 *
 * Gotchas: N/A
 *   
 * Comfort: 3
 * Revisit: Yes
 */

function groupAnagrams(strs: string[]): string[][] {
  const seen = new Map<string, string[]>();

  for (const str of strs) {
    const key = str.split("").sort().join("");
    if(!seen.has(key)) seen.set(key, []);
    seen.get(key)!.push(str);
  }

  return [...seen.values()];
}

// ─── Test Cases ───────────────────────────────────────────────────────────────

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])); // expected: [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""])); // expected: [[""]]
console.log(groupAnagrams(["a"])); // expected: [["a"]]
