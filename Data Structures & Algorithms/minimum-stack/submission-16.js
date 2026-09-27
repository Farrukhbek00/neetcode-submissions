class MinStack {
    constructor() {
        this.stack = []
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push({ "val": val, "currMin": Math.min(this.stack[this.stack.length - 1]?.currMin ?? (2 ** 31), val) })
    }

    /**
     * @return {void}
     */
    pop() {
        this.stack.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1].val
    }

    /**
     * @return {number}
     */
    getMin() {
        // console.log(this.stack)
        return this.stack[this.stack.length - 1].currMin
    }
}
