// Converts a decimal number into Roman numerals.
function convertToRoman(num) {
  let decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let numerals = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

  let result = "";

  for (let i = 0; i < decimals.length; i++) {
    while (decimals[i] <= num) {
      result += numerals[i];
      num -= decimals[i];
    }
  }

  return result;
}

module.exports = convertToRoman;
