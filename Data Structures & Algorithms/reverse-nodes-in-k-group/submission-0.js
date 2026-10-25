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
        let lists = []
        let node = head
        let isLeftOut = false

        while (node) {
            let eachHead = node
            let temp = k

            let prev = null
            while (node && temp > 0) {
                prev = node
                node = node.next
                temp--
            }

            if (temp !== 0) isLeftOut = true

            if (prev) prev.next = null

            lists.push(eachHead)
        }

        for (let i = 0; i < lists.length; i++) {
            if (i === lists.length - 1 && isLeftOut) {
                lists[i] = [lists[i], lists[i]]
                break
            }
            lists[i] = this.revserse(lists[i])
        }

        for (let i = 0; i < lists.length - 1; i++) {
            lists[i][1].next = lists[i + 1][0]
        }

        return lists[0][0]
    }

    revserse(node) {
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
