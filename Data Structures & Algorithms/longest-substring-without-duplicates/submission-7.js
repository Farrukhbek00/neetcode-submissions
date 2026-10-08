class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const map = new Map()
        let longest = 0
        let left = 0
        for (let right = 0; right < s.length; right++) {

            while (left <= right && map.has(s[right])) {
                map.delete(s[left])
                left++
            }

            map.set(s[right], 1)
            longest = Math.max(longest, map.size)
        }

        return longest
    }
}
