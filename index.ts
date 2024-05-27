// // Basic function

// import { log } from "console";

// function info(){
//  let name = "areeba"
//  console.log("Name: " , name);
//  console.log("Age: ", 22);
//  console.log("GIAIC Student");
//  console.log("Learn Typescript");
// }


// // // function call 
// info()

// // info()

// // info()

// // return function

// let a = 40// global variable 

// function add(){
//     // a = 30
//     // console.log(a)
//     let sum = 24 + 42;// local variable
//     return sum;
    
// }

// // store in variable 
// let result = add();
// console.log(result);

// // function 2 
// function sum2() {
//     console.log(result);
    
// }

// sum2()

// parameters & arguments 

// function name(firstName: string , lastName: string , age: number): string{
//     return firstName + " " + lastName + " " + age;
// }

// let personName: string = name("Areeba","Bano", 22)
// console.log(personName);


// let person2Name: string = name("Javeriya", "Nigar", 15)
// console.log(person2Name);




// Default Parameters 

// function name(firstName: string = "Areeba" , lastName: string = "Bano" , age: number = 22): string|number{
//     return firstName + " " + lastName + " " + age;
// }


// let personName: string|number = name()
// console.log(personName);


// let person2Name: string|number = name("Javeriya","Nigar", 15)
// console.log(person2Name);


// Optional Parameters 


function fullName(firstName: string , lastName: string , age?: number): string|number{
    return firstName + " " + lastName + " " + age;
}


let person2Name: string|number = fullName("Javeriya","Nigar",22)
console.log(person2Name);







































