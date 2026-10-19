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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        let result = this.check(p, q)
    
        if (result === -1) return false
        else return true
    }

    check(p, q) {
        if (p === null && q === null) return 0
        if (p === null || q === null) return -1
        if (p.val !== q.val) return -1

        let left = this.check(p.left, q.left)
        if (left === -1) return -1


        let right = this.check(p.right, q.right)
        if (right === -1) return -1

        return 0
    }
}
