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
     * @return {number}
     */
    longest = 0

    diameterOfBinaryTree(root) {
        this.longest = 0
        this.getLongestPath(root)

        return this.longest
    }

    getLongestPath(node) {
        if ((node.left === null) && (node.right === null)) return 1

        let left = 0
        let right = 0

        if (node.left) left = this.getLongestPath(node.left)
        if (node.right) right = this.getLongestPath(node.right)

        this.longest = Math.max(this.longest, left + right)

        return 1 + Math.max(left, right)
    }
}
