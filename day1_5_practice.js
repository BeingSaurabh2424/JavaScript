// 1. Create a var of type string and try to add a number in it

let a = "Saurabh";
let b = 24;

console.log(a+b);

// 2. Use typeof operator to find the datatype of the string in problem 1

console.log(typeof (a+b));

// 3. Create a const object in JS. Can you change it to hold a number later?

const item = {
    "isPass":true,
    "isActive":false, 
    "marksIn":87,
    "gender?": undefined
   }

   // item = "Fibonacii";    will throw an error

// 4. Try to add a new key to the const object in problem 3

item['calcuLus'] = 65
console.log(item);

// 5. Write a JS program to create a word meaning dictionary of 5 words and display in the terminal

const dict = 
{
    Aditya:"Payal",
    Saurabh:"Rutuja",
    Rotion:"Paurnima",
    Suraj:"Janhavi",
    Kunal:"Asha"
}

console.log(dict)
console.log(dict.Aditya)
console.log(dict.Kunal)
console.log(dict.Rotion)
console.log(dict.Saurabh)
console.log(dict.Suraj)

