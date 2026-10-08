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
            if (map.has(s[right]) && (map.get(s[right]) >= left)) {
                left = map.get(s[right]) + 1
            }

            map.set(s[right], right)
            longest = Math.max(longest, right - left + 1)
        }

        return longest
    }
}
