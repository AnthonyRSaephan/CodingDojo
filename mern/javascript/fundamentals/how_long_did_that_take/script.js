//! Calculating prime numbers
// Number.prototype.isPrime = function () {
//     for (let i = 2; i < Math.sqrt(this); i++) {
//         if (this % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }


// const { performance } = require('perf_hooks');
// const start = performance.now();
// let primeCount = 0;
// let num = 2; // for math reasons, 1 is considered prime
// while (primeCount < 1e6) {
//     if (num.isPrime()) {
//         primeCount++;
//     }
//     num++;
// }

// // 100,000th prime number took 9360.630099999718 milliseconds to run
// console.log(`The 1,000,000th prime number is ${num - 1}`); // This took 310567.4051999999 milliseconds to run
// console.log(`This took ${performance.now() - start} milliseconds to run`);

//! Fibonacci : Iterative is faster
// // recursive
// function rFib(n) {
//     if (n < 2) {
//         return n;
//     }
//     return rFib(n - 1) + rFib(n - 2);
// }

// // iterative
// function iFib(n) {
//     const vals = [0, 1];
//     while (vals.length - 1 < n) {
//         let len = vals.length;
//         vals.push(vals[len - 1] + vals[len - 2]);
//     }
//     return vals[n];
// }


// const {performance} = require("perf_hooks")
// let start = performance.now()
// rFib(20);
// console.log("Time for recursive is" , performance.now() - start)
// start = performance.now()
// iFib(20);
// console.log("Time for while loop is" , performance.now()- start)

//! Reverse a string
// const {performance} = require("perf_hooks")
// const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// let start = performance.now()
// const reversed1 = story.split("").reverse().join("");
// console.log(reversed1)
// console.log("split,reverse,join took", performance.now() - start)


// const reverse_string = str => {
//     let newString = ""
//     for(let i = str.length - 1; i >= 0; i--){
//         newString += str[i]
//     }
//     return newString
// }
// console.log("===========================")

// start = performance.now()
// let newString = reverse_string(story)
// console.log("for loop took", performance.now() - start)
// console.log(newString)