//Sum of Digits of a Number
const sumOfDigits = (num) => {
    return num.toString().split('').reduce((sum, digit) => sum + Number(digit), 0);
  };
  console.log(sumOfDigits(1234)); // Output: 10
  