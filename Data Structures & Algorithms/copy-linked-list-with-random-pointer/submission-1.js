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
        let index = 0
        while(node) {
            node.index = index
            index++
            node = node.next
        }

        node = head
        let map = new Map()
        while(node) {
            map.set(node.index, node.random?.index ?? null)
            node = node.next
        }

        node = head
        let clonedHead = new Node(0)
        let clonedNode = clonedHead 
        index = 0
        while (node) {
            clonedNode.next = new Node(node.val, null, map.get(index))
            node = node.next
            clonedNode = clonedNode.next
            index++
        }

        clonedNode = clonedHead.next
        let indexToNode = new Map()
        index = 0
        while (clonedNode) {
            indexToNode.set(index, clonedNode)

            clonedNode = clonedNode.next
            index++
        }


        clonedNode = clonedHead.next
        while (clonedNode) {
            clonedNode.random = indexToNode.get(clonedNode.random)

            clonedNode = clonedNode.next
        }

        return clonedHead.next
    }
}
