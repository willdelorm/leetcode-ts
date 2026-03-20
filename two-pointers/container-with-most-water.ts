/*
 * Problem: Container With Most Water (#11) — Medium
 * Pattern: Two Pointers
 * Date: 2026-03-19
 * NeetCode: Yes
 *
 * Approach:
 *   Using two pointers, calculate the area between them each time a pointer moves.
 *   The area is the smaller of the two values times the difference in their indeces.
 *
 * Time:  O(n)
 * Space: O(1)
 *
 * Comfort: 5
 *
 * Revisit: No
 */

function maxArea(height: number[]): number {
  let maxArea = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const minH = Math.min(height[left], height[right]);
    const area = minH * (right - left);
    maxArea = Math.max(area, maxArea);
    if (height[left] < height[right]) left++;
    else if (height[right] < height[left]) right--;
    else {
      left++;
      right--;
    }
  }

  return maxArea;
}

// ─── Test Cases ───────────────────────────────────────────────────────────────

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // expected: 49
console.log(maxArea([1, 1])); // expected: 1
