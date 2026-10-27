class PrefixTree {
    constructor(map = new Map, isEnd = false) {
        this.children = map
        this.isEnd = isEnd
    }

    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let root = this; 

        for (let i = 0; i < word.length; i++) {
            let isEnd = false
            if (i === word.length - 1) isEnd = true
            if (!root.children.get(word[i])) {
                let node = new PrefixTree(new Map(), isEnd)
                root.children.set(word[i], node)
            }

            root = root.children.get(word[i])

            if (isEnd) root.isEnd = isEnd
        }
    }

    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this
        let i = 0
        while (node) {
            let child = node.children.get(word[i])
            if (child) {
                i++
                node = child
            } else {
                return false
            }

            if ((i === word.length) && child?.isEnd) return true
        }
    }

    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this
        let i = 0
        while (node) {
            let child = node.children.get(prefix[i])
        
            if (child) {
                i++
                node = child
            } else {
                return false
            }

            if ((i === prefix.length)) return true
        }
    }
}
