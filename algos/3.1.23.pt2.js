// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/* 
  Given a string, find the length of the longest substring without repeating characters.
*/


// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf";
const expected4 = 4;
// Explanation: "vadf"

/**
 * Determines the length of the longest substring in the given str.
 * @param {string} str
 * @returns {number} Length of the longest substring from the given str.
 * - Time: O(?).
 * - Space: O(?).
 */
const str1 = "abcabcbb";
const expected1 = 3;
[]
function lengthOfLongestSubString(str) {
	let currentLetters = []
	let maxLength = 0
	for (let i = 0; i < str.length; i++) {
		for (let j = i; j < str.length; j++) {
			if (currentLetters.includes(str[j])) {
				if (currentLetters.length > maxLength) {
					maxLength = currentLetters.length
					currentLetters = []
					break
				}
			} else {
				currentLetters.push(str[j])
			}
		}
	}
	return maxLength
}

console.log("=========== lengthOfLongestSubString =============")
const test1 = lengthOfLongestSubString(str1)
console.log(test1, expected1)
console.log("=======================")
const test2 = lengthOfLongestSubString(str2)
console.log(test2, expected2)
console.log("=======================")
const test3 = lengthOfLongestSubString(str3)
console.log(test3, expected3)
console.log("=======================")
const test4 = lengthOfLongestSubString(str4)
console.log(test4, expected4)

