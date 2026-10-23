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
     * @return {number[]}
     */
    result = []

    inorderTraversal(root) {
        this.dps(root)

        return this.result
    }

    dps(node) {
        if (node === null) return

        this.dps(node.left)
        this.result.push(node.val)
        this.dps(node.right)
    }
}
