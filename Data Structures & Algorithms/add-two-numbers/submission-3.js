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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummyNodeHead = new ListNode(0)
        let dummyNode = dummyNodeHead

        let carry = 0
        while (l1 || l2) {
            let total = (l1?.val || 0) + (l2?.val || 0) + carry

            carry = Math.floor(total / 10)
            total = total % 10 

            dummyNode.next = new ListNode(total)
            dummyNode = dummyNode.next 
            if (l1 ) l1 = l1.next
            if (l2 ) l2 = l2.next
        }

        if (carry > 0) {
            dummyNode.next = new ListNode(carry)
        }

        return dummyNodeHead.next
    }
}
