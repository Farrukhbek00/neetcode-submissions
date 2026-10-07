class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            const timestamps = this.keyStore.get(key)

            timestamps.push([timestamp, value])
        } else {
            this.keyStore.set(key, [[ timestamp, value ]]) 
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const timestampsWithValues = this.keyStore.get(key) ?? []

        if (timestampsWithValues.length === 0) return ""

        const index = search(timestampsWithValues, timestamp, 0, timestampsWithValues.length - 1)

        if (index === -1) return ""

        return timestampsWithValues[index][1]
    }
}

function search(nums, target, i, j) {
    if (i > j) return j

    const mid = Math.floor((i + j) / 2)

    if (nums[mid][0] === target) return mid
        
    if (target < nums[mid][0]) {
        return search(nums, target, i, mid - 1)
    } else {
        return search(nums, target, mid + 1, j)
    }
}
