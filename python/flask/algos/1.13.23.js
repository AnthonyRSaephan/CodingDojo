/* 
  String: Is Palindrome
  Create a function that returns a boolean whether the string is a strict palindrome. 
    - palindrome = string that is same forwards and backwards
  
  Do not ignore spaces, punctuation and capitalization
 */

// level
// bob
// tacocat
// 

//            v
const str1 = "a x a";
const expected1 = true;

const str2 = "racecar";
const expected2 = true;

const str3 = "Dud";
const expected3 = false;

const str4 = "ohox";
const expected4 = false;

// RIOT
// create a newString
// loop through the string in reverse
    // push string to newString
// check if newString == str
    // return true
// return false

function isPalindrome(str) {
    // Solution 1
    // newString = ""
    // for(var i = str.length-1; i >= 0; i--){
    //     newString += str[i]
    // }
    // console.log(str, newString)
    // if(newString == str){
    //     return true
    // }else{
    //     return false
    // }

    // Solution 2
    for(var i = 0; i < Math.floor(str.length/2); i++){
        if(str[i] != str[str.length-1-i]){
            console.log("Does not equal",str[i])
            return false
        }
        console.log(str[i])
    }
    return true
}

console.log(isPalindrome(str1))
console.log(isPalindrome(str2))
console.log(isPalindrome(str3))
console.log(isPalindrome(str4))