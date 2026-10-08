class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxP = 0;
        let left = 0;
        for (let right = 0; right < prices.length; right++) {
            if (prices[right] < prices[left]) {
                left = right
            }

            maxP = Math.max(maxP, prices[right] - prices[left])
        }

        return maxP
    }
}
