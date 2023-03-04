/* 
Amazon is developing a new song selection algorithm that will sync with the
duration of your bus ride.

Given a positive integer representing a duration of a bus ride and
an array of positive integers representing song times, find a pair of two songs
where the song pair ends 30 seconds before the bus ride ends.

return an array of the song indices or [-1, -1] if no pair is found.

If there are multiple song pairs that match, return the pair that contains the
longest song. The order of the returned indexes doesn't matter.
*/

const busDuration1 = 300;
const songDurations1 = [70, 120, 200, 45, 210, 40, 60, 50];
const expected1 = [4, 6]; // 210, 60
/* Explanation:
There are multiple pairs that add up to 30 seconds before the bus duration.
The pair at indexes 4 and 6 is the pair with the longest song that is chosen.
*/

const busDuration2 = 300;
const songDurations2 = [70, 120, 200, 230, 45, 210, 40, 60, 50];
const expected2 = [3, 6]; // 230, 40
/* Explanation:
This is the pair with the longest song.
*/

const busDuration3 = 300;
const songDurations3 = [70, 120, 20, 23, 45, 21, 40, 60, 50];
const expected3 = [-1, -1]; // not found.

/**
 * Finds the pair of song durations that adds up to 30 seconds before the bus
 * ride ends.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} busDuration Seconds.
 * @param {number} songDurations Seconds.
 * @returns {Array<number, number>} The song pair indexes, or [-1, -1] if no
 *    pair is found.
 */
function musicRuntime(busDuration, songDurations) {
    const targetDuration = busDuration-30
    const possiblePairs = []
    for(let i = 0; i < songDurations.length; i++){
        for(let j = i+1; j < songDurations.length; j++){
            if(songDurations[i] + songDurations[j] === targetDuration){
                possiblePairs.push([i,j])
            }
        }
    }

    if(possiblePairs.length === 0) return  [-1, -1]

    let longestSong = 0
    let longestSongIndex = 0
    for(let i = 0; i < possiblePairs.length; i++){
        const song1 = songDurations[possiblePairs[i][0]]
        const song2 = songDurations[possiblePairs[i][1]]
        if(song1 > longestSong || song2 > longestSong){
            longestSong = song1 > song2 ? song1 : song2
            longestSongIndex = i
        }
    }

    return possiblePairs[longestSongIndex]
}

console.log("============== musicRuntime ==============")
const test1 = musicRuntime(busDuration1, songDurations1)
console.log(test1, expected1)
console.log("====================================")
const test2 = musicRuntime(busDuration2, songDurations2)
console.log(test2, expected2)
console.log("====================================")
const test3 = musicRuntime(busDuration3, songDurations3)
console.log(test3, expected3)


/* 
Given two strings,
return true if the first string can be built from the letters in the 2nd string
Ignore case

.indexOf will only tell you if the letter is found one time
*/

const strA1 = "Hello World";
const strB1 = "lloeh wordl";
const expectedA1 = true;

const strA2 = "Hey";
const strB2 = "hello";
const expectedA2 = false;
// Explanation: second string is missing a "y"

const strA3 = "hello";
const strB3 = "helo";
const expectedA3 = false;
// Explanation: second string doesn't have enough "l" letters

const strA4 = "hello";
const strB4 = "lllheo";
const expectedA4 = true;

const strA5 = "hello";
const strB5 = "heloxyz";
const expectedA5 = false;
// Explanation: strB5 does not have enough "l" chars.

/**
 * Determines whether s1 can be built using the chars of s2.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean}
 */

function canBuildS1FromS2(s1, s2) {
    if(s1.length > s2.length) return false

    s1 = s1.toLowerCase()
    s2 = s2.toLowerCase()

    for(const character of s1){
        const foundIndex = s2.indexOf(character)
        if(foundIndex >= 0){
            s2 = s2.slice(0, foundIndex) + s2.slice(foundIndex+1)
        }else{
            return false
        }
    }
    return true
}

console.log("============= canBuildS1FromS2 ================")
const test4 = canBuildS1FromS2(strA1, strB1)
console.log(test4, expectedA1)
console.log("==========================")
const test5 = canBuildS1FromS2(strA2, strB2)
console.log(test5, expectedA2)
console.log("==========================")
const test6 = canBuildS1FromS2(strA3, strB3)
console.log(test6, expectedA3)
console.log("==========================")
const test7 = canBuildS1FromS2(strA4, strB4)
console.log(test7, expectedA4)
console.log("==========================")
const test8 = canBuildS1FromS2(strA5, strB5)
console.log(test8, expectedA5)

