/* 
  Acronyms
  Create a function that, given a string, returns the string’s acronym 
  (first letter of each word capitalized). 
  Do it with .split first if you need to, then try to do it without
*/
//                           v
const str1 = "object oriented programming";
const expected1 = "OOP";

// The 4 pillars of OOP
const str2 = "abstraction polymorphism inheritance encapsulation";
const expected2 = "APIE";

const str3 = "software development life cycle";
const expected3 = "SDLC";

// Bonus: ignore extra spaces
const str4 = "  global   information tracker    ";
const expected4 = "GIT";

function acronymize(str) {
    var split = str.split(" ")
    var newString = ""
    for(var i = 0; i < split.length; i++){
        var newWord = split[i]
        if(newWord != ""){
            newString += split[i][0]
        }
    }
    return newString.toUpperCase()
}

var words = [str1, str2, str3, str4]

for(var i = 0; i < words.length; i++){
    console.log(words[i])
    var newWord = acronymize(words[i])
    console.log(newWord)
}