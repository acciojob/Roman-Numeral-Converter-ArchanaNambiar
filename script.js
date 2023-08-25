function intToRoman(num) {
  if (num <= 0 || num >= 4000) {
    return 'Invalid input';
  }

  const values = [
    1000, 900, 500, 400,
    100, 90, 50, 40,
    10, 9, 5, 4, 1
  ];

  const symbols = [
    'M', 'CM', 'D', 'CD',
    'C', 'XC', 'L', 'XL',
    'X', 'IX', 'V', 'IV',
    'I'
  ];

  let result = '';

  for (let i = 0; i < values.length; i++) {
    while (num >= values[i]) {
      result += symbols[i];
      num -= values[i];
    }
  }

  return result;
}

// Example usage
// const number = 1984;
// const romanNumeral = intToRoman(number);
// console.log(romanNumeral); // Output: 'MCMLXXXIV'
