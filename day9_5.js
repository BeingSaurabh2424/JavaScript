//Count Vowels in a String
const countVowels = (str) => {
    return (str.match(/[aeiou]/gi) || []).length;
  };
  console.log(countVowels("Hello World!")); // Output: 3
  