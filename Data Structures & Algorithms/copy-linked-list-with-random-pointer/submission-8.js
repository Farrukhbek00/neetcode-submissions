// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        let node = head
        let clonedHead = new Node(0)
        let clonedNode = clonedHead 
        let map = new Map()
        while (node) {
            clonedNode.next = new Node(node.val)
            map.set(node, clonedNode.next)
            node = node.next
            clonedNode = clonedNode.next
        }

        clonedNode = clonedHead.next
        node = head
        while (node) {
            clonedNode.random = map.get(node.random)

            node = node.next
            clonedNode = clonedNode.next
        }

        return clonedHead.next
    }
}
