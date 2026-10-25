class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let i = 0
        let j = 0
        let word3 = ''

        while (i < word1.length || j < word2.length) {
            word3 += (word1[i] ?? '') + (word2[j] ?? '')
            i++
            j++
        }

        return word3

    }
}
