const palindromes = function (stringVal) {
  let reverseString = "";
  let cleanString = "";

  for (s in stringVal) {
    if ((stringVal.charAt(s)).match(/[a-z]/i))
      cleanString += stringVal.charAt(s);
  }

  for (i = cleanString.length-1; i >= 0; i--) {
      reverseString += cleanString.charAt(i);
  }
  
  if (reverseString.toLowerCase() === cleanString.toLowerCase())
    return true;
  else
    return false;
};

// Solution from repo
const palindromesSolution = function(string) {
  processedString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
  return (
    processedString
      .split("")
      .reverse()
      .join("") == processedString
  );
};

// Do not edit below this line
module.exports = palindromes;
