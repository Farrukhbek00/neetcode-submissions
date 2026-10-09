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
        let dummyNode = new ListNode(0)
        let dummyNodeHead = dummyNode.next

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
        while (head || revserseHead) {
            let headNext = head.next
            head.next = null
            dummyNode.next = head
            dummyNode = dummyNode.next
            head = headNext

            if (revserseHead) {
                let revserseHeadNext = revserseHead.next
                revserseHead.next = null
                dummyNode.next = revserseHead
                dummyNode = dummyNode.next
                revserseHead = revserseHeadNext
            }
        }

        return dummyNodeHead
    }
}
