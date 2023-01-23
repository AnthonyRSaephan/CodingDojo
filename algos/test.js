const nums1 = [-2, 5, 7, 0, 3];
const expected1 = 2;

const nums2 = [9, 9];
const expected2 = -1;

const nums3 = [3,0,1,1,1]
const expected3 = 1


function balanceIndex(nums) {
    var leftSum = 0
    var rightSum = 0

    if (nums.length < 3) {
        return -1
    } else {
        for (var i = 0; i < nums.length; i++) {
            for (var x = 0; x <= i; x++) {
                leftSum += nums[x]
            }
            for (var j = nums.length - 1; j >= i; j--) {
                rightSum += nums[j]
            }
            if (leftSum != rightSum) {
                leftSum = 0
                rightSum = 0
            }
            else {
                return i
            }
        }
    }
}

console.log(balanceIndex(nums1))
console.log(balanceIndex(nums2))
console.log(balanceIndex(nums3))