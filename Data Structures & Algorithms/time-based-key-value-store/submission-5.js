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

            timestamps.set(timestamp, value)
        } else {
            this.keyStore.set(key, new Map([[ timestamp, value ]])) 
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const timestampsWithValues = this.keyStore.get(key)
        if (!timestampsWithValues) return ""
        const timestamps = [...timestampsWithValues.keys()]

        const keyTimestamp = search(timestamps, timestamp, 0, timestamps.length - 1)

        return timestampsWithValues.get(keyTimestamp) ?? ""
    }
}

function search(nums, target, i, j) {
    if (i > j) return nums[j]

    const mid = Math.floor((i + j) / 2)

    if (nums[mid] === target) return target
        
    if (target < nums[mid]) {
        return search(nums, target, i, mid - 1)
    } else {
        return search(nums, target, mid + 1, j)
    }
}
