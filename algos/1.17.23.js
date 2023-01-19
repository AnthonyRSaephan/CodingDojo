/* 
  Given an array of strings
return the number of times each string occurs (a frequency / hash table)
*/
//           
const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};

//             v
const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

// loop through array
// if new character
  // create new entry
//else
  // append

function makeFrequencyTable(arr) {
    // your code here
    // if(arr.length == 0){
    //   return {}
    // }

    newDict = {}

    for(var i = 0; i < arr.length ;i++ ){
      if(!(arr[i] in newDict)){
        newDict[arr[i]] = 1
      }else{
        newDict[arr[i]] += 1
      }
    }
    return newDict
}

tests = {
  "test1" : [arr1, expected1],
  "test2" : [arr2, expected2],
  "test3" : [arr3, expected3]
}

for(let key in tests){
  array = tests[key]
  result = makeFrequencyTable(array[0])
  console.log(result)
  console.log(array[1])
  console.log("=============")
}