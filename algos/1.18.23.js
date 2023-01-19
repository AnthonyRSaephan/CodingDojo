/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABCabcABCabcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

//bonus
const str5 = "aba";
const expected5 = "ba";

function stringDedupe(str){
    var newString = "" // create new empty String
    frequencyDict = {} // create new frequency dictionary
    for(var i = str.length - 1; i >= 0; i--){ // iterate through string starting from the end
        if(frequencyDict[str[i]]){ // check to see if key of character exists
            frequencyDict[str[i]]++ // if it does we increment key's value
        }else{
            frequencyDict[str[i]] = 1 // else add key to the string
            newString = str[i] + newString // append new character to beginning of newString
        }
    }
    // console.log(frequencyDict)
    return newString // return newString
}

tests = {
    test1 : [str1, expected1],
    test1 : [str2, expected2],
    test1 : [str3, expected3],
    test1 : [str4, expected4],
    test1 : [str5, expected5]
}

for(let test in tests){
    result = test[0]
    console.log(result)
    console.log(test[1])
    if(result == test[1]){
        console.log("✅\n=================")
    }
}