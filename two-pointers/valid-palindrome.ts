/*
 * Problem: Valid Palindrome (#125) — Easy
 * Pattern: Two Pointers
 * Date: 2026-03-13
 * NeetCode: Yes
 *
 * Approach:
 *   Filter out non-alphanumeric values.
 *   Use two pointers to check mirrored positions in array.
 *   Returns false if pointers don't match, true if palindrome.
 *
 * Time:  O(n)
 * Space: O(n)
 *
 * Gotchas:
 *   On odd-length strings, middle index requires while loop to run when `left <= right`
 *
 * Comfort: 5
 *
 * Revisit: No
 */

function isPalindrome(s: string): boolean {
    const arr = s.split("").filter((ch) => /[a-zA-Z0-9]/.test(ch));

    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        if (arr[left].toLowerCase() !== arr[right].toLowerCase()) return false;
        left++;
        right--;
    }
    return true;
}

// ─── Test Cases ───────────────────────────────────────────────────────────────

console.log(isPalindrome("A man, a plan, a canal: Panama")); // expected: true
console.log(isPalindrome("race a car")); // expected: false
console.log(isPalindrome(" ")); // expected: true
