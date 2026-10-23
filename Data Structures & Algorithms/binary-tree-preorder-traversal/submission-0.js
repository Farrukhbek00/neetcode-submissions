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

    preorderTraversal(root) {

        this.dps(root)

        return this.result
    }

    dps(node) {
        if (node === null) return

        this.result.push(node.val)
        this.dps(node.left)
        this.dps(node.right)
    }
}
