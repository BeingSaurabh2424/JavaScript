// Find the Longest Word in a Sentence
const longestWord = (str) => {
    return str.split(' ').reduce((longest, word) => 
      word.length > longest.length ? word : longest, ""
    );
  };
  console.log(longestWord("JavaScript is super fun")); // Output: "JavaScript"
  