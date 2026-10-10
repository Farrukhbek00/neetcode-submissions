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
     * @return {void}
     */
    reorderList(head) {
        let mid = head
        let node = head
        while(node.next && node.next.next) {
            mid = mid.next
            node = node.next.next
        }

        let prev = null
        let next = null
        next = mid.next
        mid.next = null
        mid = next
        while (mid) {
            next = mid.next
            mid.next = prev
            prev = mid
            mid = next
        }

        let revserseHead = prev
        node = head
        while (revserseHead) {
            let next = node.next
            let revserseHeadNext = revserseHead.next
            revserseHead.next = next
            node.next = revserseHead
            node = node.next.next
            revserseHead = revserseHeadNext
        }

        return head
    }
}
