function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };

  //your code here
	let roman = '';

  for (let i = 0; i < Object.keys(obj).length; i++) {
    const symbol = obj[i][0];
    const value = obj[i][1];

    if (value <= num) {
      const count = Math.floor(num / value);
      roman += symbol.repeat(count);
      num -= count * value;
    }

    // Check for cases like IV, IX, XL, XC, CD, CM
    if (i % 2 === 0) {
      const nextSymbol = obj[i - 2][0];
      const nextValue = obj[i - 2][1];
      const diff = nextValue - value;

      if (num >= diff) {
        roman += symbol + nextSymbol;
        num -= diff;
      }
    }
  }

  return roman;


}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
