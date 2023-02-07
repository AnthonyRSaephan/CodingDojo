let array_to_sort = [4,8,5,7,1,6,10,2,3,9]

const partition = (array, i = 0, j = array.length-1) => {
    pivot = Math.floor((i + j) / 2)
    console.log(i,j,pivot,"before while loop")
    while(i != j && i < j){
        console.log(i,j,pivot,"inside while loop before")
        while(array[i] < array[pivot]){
            i++
            console.log(i,j,pivot,"inside i")
        }
        while(array[j] > array[pivot]){
            j--
            console.log(i,j,pivot,"inside j")
        }
        array[i], array[j] = array[j], array[i]
        console.log("SWAP")
        i++
        j--
        console.log(i,j,pivot,"inside while loop after")
    }
    return j
}

console.log(array_to_sort)
partition(array_to_sort)
console.log(array_to_sort)