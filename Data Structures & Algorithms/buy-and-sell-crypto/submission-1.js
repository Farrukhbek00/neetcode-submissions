class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0;
        let left = 0;
        for (let right = 0; right < prices.length; right++) {
            while ((left < right) && (prices[right] - prices[left] <= 0)) {
                left++
            }

            maxP = Math.max(maxP, prices[right] - prices[left])
        }

        return maxP
    }
}
