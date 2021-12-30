const repeatString = function(textInput,repeatCount) {
  let output = '';

  if (repeatCount < 0)
    output = 'ERROR';
  else {
    for (i=0; i<repeatCount; i++) {
      output+=textInput;
    }
  }
  
  return output;
};

// Do not edit below this line
module.exports = repeatString;
