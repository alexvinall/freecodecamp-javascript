function rot13(str) {
  return str
    .split("")
    .map.call(str, function(c) {
      let x = c.charCodeAt(0);
      
      if (x < 65 || x > 90) {
        // Don't convert anything that isn't A-Z
        return String.fromCharCode(x);
      } else if (x < 78) {
        // First half of the alphabet can be bumped 13 characters forward
        return String.fromCharCode(x + 13);
      } else {
        // Otherwise shift the character 13 places backward
        return String.fromCharCode(x - 13);
      }
    })
    .join("");
}

module.exports = rot13;