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

// Tests
let assert = require("assert");

assert(palindrome("eye b0ll 3 ll0b eye"));
assert(palindrome("eye"));
assert(palindrome("_eye"));
assert(palindrome("race cAr"));
assert(!palindrome("not a palindrome"));
assert(!palindrome("nope"));
assert(!palindrome("almostomla"));