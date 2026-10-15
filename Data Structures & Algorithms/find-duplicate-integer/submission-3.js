class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let map = new Map()

        for (let num of nums) {
            if (map.has(num)) {
                return num
            } 

            map.set(num, 1)
        }
    }
}
