class Solution {
    pattern = Symbol('a').toString()
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return null
        return strs.join(this.pattern)
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === null) return []
        return str.split(this.pattern + '')
    }
}
