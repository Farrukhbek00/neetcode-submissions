/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */

    nums = []
    kthSmallest(root, k) {
    
    this.dps(root, k) 

    return this.nums[k - 1]
    }

    dps(node, k) {
        if (this.nums.length === k) return
        if (node === null) return

        this.dps(node.left, k)
        this.nums.push(node.val)
        this.dps(node.right, k)
    }
}
