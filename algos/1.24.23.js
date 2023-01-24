/* 
  Array: Binary Search (non recursive)
  Given a sorted array and a value, return whether the array contains that value.
  Do not sequentially iterate the array. Instead, ‘divide and conquer’,
  taking advantage of the fact that the array is sorted.
*/
//                v
const nums1 = [1, 3, 5, 6];
const searchNum1 = 4;
const expected1 = false;

//                   v
const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

function binarySearch(sortedNums, searchNum) {
    leftSide = 0
    rightSide = sortedNums.length - 1
    
    while(leftSide <= rightSide){
        middleNumber = Math.floor((leftSide + rightSide) / 2)
        console.log(middleNumber)
        if(sortedNums[middleNumber] === searchNum){
            return true
        }else if(sortedNums[middleNumber] > searchNum){
            rightSide = middleNumber - 1
        }else{
            leftSide = middleNumber + 1
        }
    }
    return false
}


console.log(binarySearch(nums1, searchNum1)); // false
console.log(binarySearch(nums2, searchNum2)); // true
console.log(binarySearch(nums3, searchNum3)); // true
