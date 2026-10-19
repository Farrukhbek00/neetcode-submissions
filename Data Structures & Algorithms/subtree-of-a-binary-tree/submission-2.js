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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        if (root === null) return false
        if (this.isSameTree(root, subRoot)) return true

        let left = this.isSubtree(root.left, subRoot)
        let right = this.isSubtree(root.right, subRoot)

        if (left === false && right === false) return false
        else return true
    }

    isSameTree(root, subRoot) {
        let result = this.checkIfSameTree(root, subRoot)

        if (result === -1) return false
        else return true
    }

    checkIfSameTree(a, b) {
        if (a === null && b === null) return 0
        if (a === null || b === null) return -1
        if (a.val !== b.val) return -1

        let left = this.checkIfSameTree(a.left, b.left)
        if (left === -1) return -1

        let right = this.checkIfSameTree(a.right, b.right)
        if (right === -1) return -1

        return 0
    }
}
