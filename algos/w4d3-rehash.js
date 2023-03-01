/* 
Given by Riot games.
*/

const str1 = "b70a164c32a20c10";
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
    for(const character of str){
        console.log(character)
    }
}

rehash(str1)