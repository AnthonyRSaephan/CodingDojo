const arr1 = [1, 2, 3];
const separator1 = ", ";
const expected1 = "1, 2, 3";

const arr2 = [1, 2, 3];
const separator2 = "-";
const expected2 = "1-2-3";

const arr3 = [1, 2, 3];
const separator3 = " - ";
const expected3 = "1 - 2 - 3";

const arr4 = [1];
const separator4 = ", ";
const expected4 = "1";

const arr5 = [];
const separator5 = ", ";
const expected5 = "";

function join(arr, sep){
    newString = ""
    for(var i = 0; i < arr.length; i++){
        var add = i == arr.length - 1 ? arr[i] : arr[i] + sep
        newString += add
    }
    return newString
}

var x = join(arr3,separator3)
console.log(x)
console.log(x == expected3)