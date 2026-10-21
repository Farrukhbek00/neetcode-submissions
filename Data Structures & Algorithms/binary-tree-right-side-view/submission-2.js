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
    rightSideView(root) {
        if (root === null) return []
        let result = []
        let queue = [root]

        while (queue.length > 0) {
            result.push(queue[queue.length - 1].val)
            let temp = []
            for (let i = 0; i < queue.length; i++) {
                let node = queue[i]
                if(node.left) temp.push(node.left)
                if(node.right) temp.push(node.right)
            }

            queue = temp
        }

        return result
    }
}
