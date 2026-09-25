class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let length = numbers.length;
        let j = 0;
        for (let i = length - 1; i >= 0; i--) {
            if (numbers[i] + numbers[j] > target) {
                continue;
            } else if (numbers[i] + numbers[j] < target) {
                j++
                i++
            } else {
                return [j + 1, i + 1]
            }
        }
    }
}
