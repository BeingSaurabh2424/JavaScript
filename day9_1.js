//Check for Palindrome (Ignoring Spaces and Case)
const isPalindrome = (str) => {
    const cleaned = str.toLowerCase().replace(/[\W_]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  };
  console.log(isPalindrome("A man a plan a canal Panama")); // Output: true
  