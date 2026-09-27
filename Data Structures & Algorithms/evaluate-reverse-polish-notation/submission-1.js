class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operations = {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
            "*": (a, b) => a * b,
            "/": (a, b) => Math.trunc(a / b)
        }

        for (let token of tokens) {
            if (operations[token]) {
                const num2 = stack.pop()
                const num1 = stack.pop()

                stack.push(operations[token](num1, num2))
            } else {
                stack.push(parseInt(token))
            }
        }

        return stack.pop()
    }
}
