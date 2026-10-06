class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const start = this.findRotatedIndex(nums, 0, nums.length - 1)

        if (target > nums[nums.length - 1]) {
            return this.findTarget(nums, target, 0, start - 1)
        } else {
            return this.findTarget(nums, target, start, nums.length -1)
        }
    }

    findRotatedIndex(nums, i, j) {
        const mid = Math.floor((i + j) / 2)

        if (nums[i] > nums[mid]) {
            return this.findRotatedIndex(nums, i, mid)
        } else if (nums[mid] > nums[j]) {
            return this.findRotatedIndex(nums, mid + 1, j)
        }

        return (nums[i] < nums[mid]) ? i : mid
    }

    findTarget(nums, target, i, j) {
        if (i > j) return -1

        const mid = Math.floor((i + j) / 2)

        if (nums[mid] === target) return mid

        if (nums[mid] > target) {
            return this.findTarget(nums, target, i, mid - 1)
        } else {
            return this.findTarget(nums, target, mid + 1, j)
        }
    }
}
