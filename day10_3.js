//Find Duplicates in an Array
const findDuplicates = (arr) => {
    const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
    return [...new Set(duplicates)];
  };
  console.log(findDuplicates([1, 2, 3, 2, 4, 5, 6, 5, 7])); 
  // Output: [2, 5]
  