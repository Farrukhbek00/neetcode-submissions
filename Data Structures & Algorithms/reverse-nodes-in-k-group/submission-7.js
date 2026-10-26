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
     * @param {number} k
     * @return {ListNode}
     */
    reverseKGroup(head, k) {
        let node = head
        let left = null

        while (node) {
            let temp = k
            let eachHead = node
            let prev = null
            while(node && temp > 0) {
                prev = node
                node = node.next
                temp--
            }

            if (temp !== 0) {
                if (left) left.next = eachHead
                break
            }

            prev.next = null
            let [h, tail] = this.reverse(eachHead)

            if (left === null) head = h
            if (left) left.next = h

            left = tail
        }

        return head
    }

    reverse(node) {
        let head = node
        let prev = null
        while (node) {
            let next = node.next
            node.next = prev
            prev = node
            node = next
        }

        return [prev, head]
    }
}
