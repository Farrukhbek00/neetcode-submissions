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
     * @return {boolean}
     */
    isBalanced(root) {
        let result = this.check(root)

        if (result === -1) return false
        else return true
    }

    check(node) {
        if (node === null) return 0
        if (node.left === null && node.right === null) return 1

        let left = 0
        let right = 0

        if (node.left) left = this.check(node.left)
        if (node.right) right = this.check(node.right)

        if (left === -1) return -1
        if (right === -1) return -1

        if (Math.abs(left - right) > 1) return -1

        return 1 + Math.max(left, right)
    }
}
