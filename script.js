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

  for (let i = 0; i < 7; i++) {
    const symbol = obj[i][0];
    const value = obj[i][1];
    const count = Math.floor(num / value);

    if (count > 0) {
      if (symbol === 'M') {
        roman += symbol.repeat(count);
      } else if (count === 4 && i > 0) {
        roman += obj[i][0] + obj[i - 1][0];
      } else if (count === 4) {
        roman += obj[i][0] + obj[i - 2][0];
      } else {
        roman += symbol.repeat(count);
      }
      num %= value;
    }
  }

  return roman;

}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
