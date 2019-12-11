let assert = require("assert");
let palindrome = require("../src/projects/palindrome-checker.js");
let convertToRoman = require("../src/projects/roman-numeral-converter.js");
let rot13 = require("../src/projects/ceasars-cipher.js");
let telephoneCheck = require("../src/projects/telephone-number-validator.js");

// Test palindrome checker
describe("Palindrome checker", function() {
  it("Correctly identifies palindromes", function() {
    assert(palindrome("eye b0ll 3 ll0b eye"));
    assert(palindrome("eye"));
    assert(palindrome("_eye"));
    assert(palindrome("race cAr"));
    assert(!palindrome("not a palindrome"));
    assert(!palindrome("nope"));
    assert(!palindrome("almostomla"));
  });
});

// Test Roman numeral converter
describe("Roman numeral converter", function() {
  it("Correctly converts Roman numerals", function() {
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
  });
});

// Test Caesar's cipher
describe("Caesar's cipher", function() {
  it("Correctly ciphers using ROT13", function() {
    assert(rot13("SERR PBQR PNZC") === "FREE CODE CAMP");
    assert(rot13("SERR CVMMN!") === "FREE PIZZA!");
    assert(rot13("SERR YBIR?") === "FREE LOVE?");
    assert(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") === "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.");
  });
});

// Test telephone number validator
describe("Telephone number validator", function() {
  it("Correctly validates telephone numbers", function() {
    assert(!telephoneCheck());
    assert(telephoneCheck("555-555-5555"));
    assert(telephoneCheck("1 555-555-5555"));
    assert(telephoneCheck("1 (555) 555-5555"));
    assert(telephoneCheck("5555555555"));
    assert(telephoneCheck("555-555-5555"));
    assert(telephoneCheck("(555)555-5555"));
    assert(telephoneCheck("1(555)555-5555"));
    assert(!telephoneCheck("555-5555"));
    assert(!telephoneCheck("5555555"));
    assert(!telephoneCheck("1 555)555-5555"));
    assert(telephoneCheck("1 555 555 5555"));
    assert(telephoneCheck("1 456 789 4444"));
    assert(!telephoneCheck("123**&!!asdf#"));
    assert(!telephoneCheck("55555555"));
    assert(!telephoneCheck("(6054756961)"));
    assert(!telephoneCheck("2 (757) 622-7382"));
    assert(!telephoneCheck("0 (757) 622-7382"));
    assert(!telephoneCheck("-1 (757) 622-7382"));
    assert(!telephoneCheck("2 757 622-7382"));
    assert(!telephoneCheck("10 (757) 622-7382"));
    assert(!telephoneCheck("27576227382"));
    assert(!telephoneCheck("(275)76227382"));
    assert(!telephoneCheck("2(757)6227382"));
    assert(!telephoneCheck("2(757)622-7382"));
    assert(!telephoneCheck("555)-555-5555"));
    assert(!telephoneCheck("(555-555-5555"));
    assert(!telephoneCheck("(555)5(55?)-5555"));
  });
});
