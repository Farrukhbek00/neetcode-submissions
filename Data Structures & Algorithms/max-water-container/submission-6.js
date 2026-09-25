class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length - 1;

        let units = [];

        while (i < j) {
            let minHeight = Math.min(heights[i], heights[j]);

            units.push(minHeight * (j - i));

            if (heights[i] > heights[j]) {
                j--
            } else {
                i++
            }
        }

        return Math.max(...units)
    }
}
