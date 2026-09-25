class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;

        let maxUnit = 0;

        while (i < j) {
            let minHeight = Math.min(heights[i], heights[j]);

            maxUnit = Math.max(maxUnit, minHeight * (j - i));

            if (heights[i] > heights[j]) {
                j--
            } else {
                i++
            }
        }

        return maxUnit
    }
}
