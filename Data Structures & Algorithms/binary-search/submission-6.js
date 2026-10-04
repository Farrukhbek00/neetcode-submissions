class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const left = this.searchTarget(nums, target, 0, Math.floor((nums.length - 1) / 2))
        const right = this.searchTarget(nums, target, Math.ceil((nums.length - 1 ) / 2), nums.length - 1)

        return left != -1 ? left : right
    }

    searchTarget(nums, target, i, j) {
        if (target === nums[i]) return i
        if (target === nums[j]) return j

        if (i >= j) {
            return -1
        }

        const left = this.searchTarget(nums, target, i, Math.floor((i + j) / 2))
        const right = this.searchTarget(nums, target, Math.ceil((i + j) / 2), j)

        return left != -1 ? left : right
    }
}

