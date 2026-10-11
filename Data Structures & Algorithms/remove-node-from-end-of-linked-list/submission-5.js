/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        let node = head
        let total = 0

        while (node) {
            node = node.next
            total++
        }

        node = head
        let nodeToRemove = total - n
        let prev = null
        while(nodeToRemove > 0) {
            nodeToRemove--

            prev = node
            node = node.next
        }

        if (prev === null) return node.next
        
        prev.next = node.next

        return head
    }
}
