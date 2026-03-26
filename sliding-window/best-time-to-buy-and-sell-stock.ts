/*
 * Problem: Best Time to Buy and Sell Stock (#121) — Easy
 * Pattern: Sliding Window
 * Date: 2026-03-26
 * NeetCode: Yes
 *
 * Approach:
 *   On each item in the list, update the minimum price to the lower of two values.
 *   Then, calculate the potential profit and update the max profit if greater.
 *
 * Time:  O(n)
 * Space: O(1)
 *
 * Comfort: 5
 *
 * Revisit: No
 */

function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (const p of prices) {
    if (p < minPrice) minPrice = p;
    const potentialProfit = p - minPrice;
    if (potentialProfit > maxProfit) maxProfit = potentialProfit;
  }
  return maxProfit;
}

// ─── Test Cases ───────────────────────────────────────────────────────────────

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // expected: 5
console.log(maxProfit([7, 6, 4, 3, 1])); // expected: 0
