class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        return this.find(nums, 0, nums.length - 1)
    }

    find(nums, i, j) {
        const mid = Math.floor((i + j) / 2)

        if (nums[mid] < nums[i]) {
            return this.find(nums, i, mid)
        } else if (nums[mid] > nums[j]) {
            return this.find(nums, mid + 1, j)
        }


        return Math.min(nums[i], nums[mid])
    }
}
