/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s";
const expected1 = true;

const str2 = "N(0(p)3";
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k";
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.

const str4 = "a(b))(c";
const expected4 = false;
// Explanation: same number of opens and closes but the 2nd closing closes nothing.


function parensValid(str) {
    count = 0
    for(var i = 0; i < str.length; i++){
        if(str[i] == "("){ // if there's a "(" increment count by 1
            count++
        }else if(str[i] == ")"){ // else if there's a ")" increment count by 1
            count--
            if(count < 0){ // if count goes below 0 return false immediately
                return false
            }
        }
    }
    if(count > 0){ // if count above 0 return false
        return false
    }
    return true // count is 0, return true
}

testDict = {
    test1 : [str1, expected1],
    test2 : [str2, expected2],
    test3 : [str3, expected3],
    test4 : [str4, expected4]
}

for(let test in testDict){
    result = parensValid(testDict[test][0])
    
    console.log(result + "  -  " + testDict[test][1] + "\t" + (result == testDict[test][1] ? "✅" : "❌").toString())
}







