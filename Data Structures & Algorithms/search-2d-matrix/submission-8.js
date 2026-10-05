class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        return this.search(matrix, target, 0, matrix.length - 1)
    }

    search(matrix, target, i, j) {
        if (i > j) return false
        const mid = Math.floor((i + j) / 2)

        if (i == j) {
            const row = matrix[mid]
            const rowMid = Math.floor((row.length) / 2)
            if (row[rowMid] === target) return true 


            if (target <= row[rowMid - 1]) {
                return this.searchRow(row, target, 0, rowMid - 1);
            } else {
                return this.searchRow(row, target, rowMid + 1, row.length - 1);
            }
        }

        // Matrix
        if (target <= matrix[mid][matrix[mid].length - 1]) {
            return this.search(matrix, target, i, mid);
        } else {
            return this.search(matrix, target, mid + 1, j);
        }
    }

    searchRow(row, target, i, j) {
        if (i > j) return false

        const rowMid = Math.floor((i + j) / 2)
        if (row[rowMid] === target) return true 

        if (target <= row[rowMid - 1]) {
            return this.searchRow(row, target, i, rowMid - 1);
        } else {
            return this.searchRow(row, target, rowMid + 1, j);
        }
    }
}
