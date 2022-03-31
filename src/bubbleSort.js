const array = [777, 445, 34, 674, 32, 4, 89, 123, 0, 4]

for (let i = 0; i < array.length; i++) {
    if (array[i] > array[i + 1]) {
        let temp = array[i + 1]
        array[i + 1] = array[i]
        array[i] = temp
    }
}








