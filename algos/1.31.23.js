/* 
    Recursive Factorial
    Input: integer
    Output: integer, product of ints from 1 up to given integer
    
    If less than zero, treat as zero.
    Bonus: If not integer, truncate (remove decimals).
    
    Experts tell us 0! is 1.
    
    rFact(3) = 6 (1*2*3)
    rFact(6.8) = 720 (1*2*3*4*5*6)
*/

const num1 = 3;
const expected1 = 6; // 3*2*1 = 6
// Explanation: 1*2*3 = 6

const num2 = 6.8;
const expected2 = 720;
// Explanation: 1*2*3*4*5*6 = 720

const num3 = 0;
const expected3 = 1;

function factorial(n) {
    if(isNaN(n)){
        return "Not a number"
    }

    n = Math.floor(n);
    if(n <= 0){
        return 1;
    }
    return n * factorial(n-1)
}



testsDict = [
    [num1, expected1],
    [num2, expected2],
    [num3, expected3],
    [-5.312576, 0],
    ["Bob's Burgers", "Not a number"]
]

for(testList of testsDict){
    testNum = testList[0]
    fact = factorial(testNum)
    result = fact == testList[1]
    console.log("Factorial of " + testNum + " is " + fact + " : " + result)
}


// function recursiveSigma(num) {
//     if (num <= 0){
//         return 0
//     }
//     else {
//         console.log(num);
//         return num+ recursiveSigma(Math.floor(num-1))
//     }
// }

// console.log(recursiveSigma(num1));