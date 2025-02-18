//Capitalize First Letter of Every Word
const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, char => char.toUpperCase());
  };
  console.log(capitalizeWords("hello world from javascript")); 
  // Output: "Hello World From Javascript"
  