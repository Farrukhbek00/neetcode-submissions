class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let length = numbers.length;
        let j = 0;
        let i = length - 1
        while (i > j) {
            if (numbers[i] + numbers[j] < target) {
                j++
                i++
            } else if (numbers[i] + numbers[j] === target) {
                return [j + 1, i + 1]
            }
            i--
        }
    }
}
