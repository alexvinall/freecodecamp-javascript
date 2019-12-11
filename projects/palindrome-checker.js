// Checks whether a given string is a palindrome.
function palindrome(str) {
  if (str === null) return false;

  // Sanitise your inputs folks
  let s = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (let i = 0, len = s.length - 1; i < len / 2; i++) {
    if (s[i] !== s[len - i]) {
      return false;
    }
  }
  
  return true;
}

module.exports = palindrome;