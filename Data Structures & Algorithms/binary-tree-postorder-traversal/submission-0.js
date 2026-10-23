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

    postorderTraversal(root) {
        this.dfs(root)

        return this.result
    }

    dfs(node) {
        if (node === null) return

       
        this.dfs(node.left)
        this.dfs(node.right)
        this.result.push(node.val)
    }
}
