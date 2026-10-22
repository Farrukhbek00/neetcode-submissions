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
    goodNodes(root) {
        let count = 0

        function dps(node, greatestParent) {
            if (node === null) return;

            let greatest = greatestParent
            if (node.val >= greatestParent) {
                count++
                greatest = node.val
            }

            dps(node.left, greatest)
            dps(node.right, greatest)
        }


        dps(root, root.val)

        return count
    }
}
