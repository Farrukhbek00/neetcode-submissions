class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const cars = []
        const stack = [];

        for (let i = 0; i < position.length; i++) {
            cars.push({ 'position': position[i], 'speed': speed[i] })
        }

        cars.sort((a, b) => b.position - a.position)

        for (let i = 0; i < cars.length; i++) {
            const time = (target - cars[i].position) / cars[i].speed

            if (stack.length === 0) {
                stack.push(time)
            }

            if (stack.length > 0 && stack[stack.length - 1] < time) {
                stack.push(time)
            }
        } 

        return stack.length
    }
}
