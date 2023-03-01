/* 
Given by Riot games.
*/
// final index: 15
const str1 = "b70a164c32a20c10";
//               i
//            j
const expected1 = "a184b70c42";
/*
{
    b: 70
    a: 184
    c: 42
}

loop through ASCII 97-122 (inclusive)

["a184", "b70", "c42"].join("") -> "a184b70c42"
*/


/**
 * Rehashes an incorrectly hashed string by combining letter count occurrences
 * and alphabetizing them.
 * Time: O(?).
 * Space: O(?).
 * @param {string} str An incorrectly hashed string.
 * @returns {string} The correctly rehashed string alphabetized.
 */

function rehash(str) {
    str+="x"
    const sumDictionary = {}
    let letterIndex = 0
    for(let i = 0; i < str.length; i++){
        if(isNaN(str[i]) || i === str.length-1){
            console.log("==========")
            let numberString = ""
            for(let j = letterIndex+1; j < i; j++){
                numberString += str[j]
            }
            const num = +numberString
            console.log(num)
            if(sumDictionary.hasOwnProperty(str[i])){
                sumDictionary[str[i]] += num
            }else{
                sumDictionary[str[i]] = num
            }
            letterIndex = i
        }else{

        }
    }

    console.log(sumDictionary)
}

rehash(str1)