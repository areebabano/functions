"use strict";
// // Basic function
let friend1 = {
    name: "Areeba",
    age: 22,
    isStudent: true
};
let friend2 = {
    name: "Rubab",
    age: 21,
    isStudent: false
};
// let friend3: friendType = {
//     name: "Fabiha",
//     age: 17,
//     isStudent: true
// }
// let friend4: friendType = {
//     name: "Nigar",
//     age: 15,
//     isStudent: true
// }
// let friend5: friendType = {
//     name: "Javeriya",
//     age: 20,
//     isStudent: true
// }
function isEqual(friend1, friend2) {
    return friend1.name === friend2.name ||
        friend1.age === friend2.age ||
        friend1.isStudent === friend2.isStudent;
}
let equalityResult = isEqual(friend1, friend2);
console.log(equalityResult);
