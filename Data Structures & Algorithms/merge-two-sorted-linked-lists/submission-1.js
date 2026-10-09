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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        if (list1 === null) return list2
        if (list2 === null) return list1

        let [head, node2, node1] = [null, null, null]
        if (list2.val >= list1.val) {
            [head, node1, node2] = [list1, list1, list2]
        } else {
            [head, node1, node2] = [list2, list2, list1]
        }
        
        while (node2 && node1) {
            const node1next = node1.next

            if ((node1.val <= node2.val) && (node1.next?.val >= node2.val)) {
                const node2Next = node2.next
                node2.next = node1next
                node1.next = node2

                node2 = node2Next
            } else {
                if (node1.next === null){
                    node1.next = node2
                    break
                }
            
            }

            node1 = node1.next
        }

        return head
    }
}
