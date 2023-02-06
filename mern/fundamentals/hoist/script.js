// // 1 ==================================================================
// console.log(hello);                                   
// var hello = 'world';                                 

// var hello
// console.log(hello);                                   
// hello = 'world'
// //? undefined

// 2 // ==================================================================
// var needle = 'haystack';
// test();
// function test() {
//     var needle = 'magnet';
//     console.log(needle);
// }
// //? magnet

// var needle
// function test() {
//     var needle
//     needle = 'magnet';
//     console.log(needle);
// }
// needle = 'haystack'
// test()

// Expected: error on line 20

// // 3 ==================================================================
// var brendan = 'super cool';
// function print() {
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// var brendan
// brendan = 'super cool';
// function print() {
//     var brendan
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);
// //? super cool

// // 4 ==================================================================
// // var food = 'chicken';
// // console.log(food);
// // eat();
// // function eat() {
// //     food = 'half-chicken';
// //     console.log(food);
// //     var food = 'gone';
// // }
// //? chicken half-chicken

// var food
// function eat() {
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// food = 'chicken';
// console.log(food);
// eat();

// 5 ==================================================================
// mean();
// console.log(food);
// var mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
//? error

// var mean
// mean();
// console.log(food);
// mean = function () {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//6 ==================================================================
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
//? undefined rock r&b disco

// var genre
// function rewind() {
//     var genre
//     genre = "rock";
//     console.log(genre);
//     genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);
// genre = "disco"
// rewind();
// console.log(genre);

// 7 ==================================================================
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);
//? san jose seattle burbank san jose

// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);

// 8 ==================================================================
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}

//? name: Chicago, students: 65, hiring: true
//? error: cannot reassign a const

// function makeDojo(name, students) {
//     const dojo = {};
//     dojo.name = name;
//     dojo.students = students;
//     if (dojo.students > 50) {
//         dojo.hiring = true;
//     }
//     else if (dojo.students <= 0) {
//         dojo = "closed for now";
//     }
//     return dojo;
// }
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
