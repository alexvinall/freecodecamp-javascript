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

// Tests
let assert = require("assert");

assert(convertToRoman(1000) === "M");
assert(convertToRoman(1004) === "MIV");
assert(convertToRoman(1006) === "MVI");
assert(convertToRoman(1023) === "MXXIII");
assert(convertToRoman(12) === "XII");
assert(convertToRoman(16) === "XVI");
assert(convertToRoman(2) === "II");
assert(convertToRoman(2014) === "MMXIV");
assert(convertToRoman(29) === "XXIX");
assert(convertToRoman(3) === "III");
assert(convertToRoman(3999) === "MMMCMXCIX");
assert(convertToRoman(4) === "IV");
assert(convertToRoman(400) === "CD");
assert(convertToRoman(44) === "XLIV");
assert(convertToRoman(45) === "XLV");
assert(convertToRoman(5) === "V");
assert(convertToRoman(500) === "D");
assert(convertToRoman(501) === "DI");
assert(convertToRoman(649) === "DCXLIX");
assert(convertToRoman(68) === "LXVIII");
assert(convertToRoman(798) === "DCCXCVIII");
assert(convertToRoman(83) === "LXXXIII");
assert(convertToRoman(891) === "DCCCXCI");
assert(convertToRoman(9) === "IX");
assert(convertToRoman(97) === "XCVII");
assert(convertToRoman(99) === "XCIX");
