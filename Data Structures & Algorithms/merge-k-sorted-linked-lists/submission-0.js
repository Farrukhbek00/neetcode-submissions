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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null
    
        while (lists.length > 1) {
            let mergedLists = []
            for (let i = 0; i < lists.length; i = i + 2) {
                mergedLists.push(this.merge(lists[i], lists[i + 1]))
            }

            lists = mergedLists
        }

        return lists[0]
    }

    merge(node1, node2) {
        if (node2 === undefined) return node1
        let dummyNode = new ListNode(0)
        let dummyNodeHead = dummyNode


        while (node1 || node2) {
            if (node1 === null)  {
                dummyNode.next = node2
                break
            }

            if (node2 === null)  {
                dummyNode.next = node1
                break
            }

            if (node1.val < node2.val) {
                let node1Next = node1.next
                node1.next = null
                dummyNode.next = node1
                node1 = node1Next
                dummyNode = dummyNode.next
            } else {
                let node2Next = node2.next
                node2.next = null
                dummyNode.next = node2
                node2 = node2Next
                dummyNode = dummyNode.next
            }
        }

        return dummyNodeHead.next
    }
}
