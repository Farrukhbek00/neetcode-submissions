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
     * @return {TreeNode}
     */
    invertTree(root) {
        let left = null
        let right = null

        if (root == null) return null

        if (root.right) left = this.invert(root.right)
        if (root.left) right = this.invert(root.left)

        root.left = left
        root.right = right

        return root
    }

    invert(node) {
    let left = null
    let right = null
    if (node.right) left = this.invert(node.right)
    if (node.left) right = this.invert(node.left)

    node.left = left
    node.right = right

    return node
}
}
