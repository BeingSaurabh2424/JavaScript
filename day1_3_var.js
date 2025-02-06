  console.log("Var vs Let vs Const");
  var a = 45;
  var b = "Saurabh";
  var c = null;
  var d = undefined

  let e = "RutujaCutie";
  {
    let e = "Rutuja";
    console.log(e);
  }
  console.log(e);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

const author = "Harry Brook";

// author = "Saurabh Wadekar";  // will throw an error

// console.log(author);   cannot do since author is declared as constant
console.log(author); 