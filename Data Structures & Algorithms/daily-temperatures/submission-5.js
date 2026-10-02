class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const result = new Array(temperatures.length).fill(0)

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0) {
                if (temperatures[i] > stack[stack.length - 1][1]) {
                    const j = stack[stack.length - 1][0]
                    result[j] = i - j
                    stack.pop()
                } else {
                    break
                }
            }

            stack.push([i, temperatures[i]])
        }

        return result
    }
}
