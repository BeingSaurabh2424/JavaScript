// Primitive Data Types and Objects
//NNSSBBU NULL NUMBER SYMBOL STRING BOOLEAN BIGINT UNDEFINED

// Primitive DT
let a = null;
let b = 360;
let c = true;
let d = BigInt("546");
let e = "Harsita";
let f = Symbol("I am dumb");
let g = undefined;

console.log(a,b,c,d,e,f,g);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);
console.log(typeof g);

//Objects in JS (Non-Primitive)

const item = {
 "isPass":true,
 "isActive":false, 
 "marksIn":87,
 "gender?": undefined
}
console.log(item["isPass"])
console.log(item["isActive"])
console.log(item["marksIn"])
console.log(item["gender?"])
