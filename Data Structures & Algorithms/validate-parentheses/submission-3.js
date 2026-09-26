class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        if (s.length % 2 !== 0) return false

        let map = {
            "(": ")",
            "[": "]",
            "{": "}",
        }

        let arr = s.split('')
        let stack = []

        for (let each of arr) {
            if (each in map) {
                stack.push(each)
            } else{
                if (map[stack.pop()] !== each) return false
            }
        }

        if (stack.length !== 0) return false

        return true
    }
}
