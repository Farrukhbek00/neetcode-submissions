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
     * @return {number[][]}
     */
    levelOrder(root) {
        if (root === null) return []
        let ans = []
        let queue = [root]

        while (queue.length > 0) {
            let temp = []

            let result = []
            for (let i = 0; i < queue.length; i++) {
                let node = queue[i]
                result.push(node.val)

                if (node.left) temp.push(node.left)
                if (node.right) temp.push(node.right)
            }
        
            ans.push(result)

            queue = temp
        }

        return ans
    }
}
