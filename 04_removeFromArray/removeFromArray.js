const removeFromArray = function(arrayVal) {
  // Loops through each val in array and checks if value is equal to target value to remove.
  for (let i = 0; i < arguments.length-1; i++) {
    for (x in arrayVal) {
      if (arrayVal[x] === arguments[i+1])
        arrayVal.splice(x,1);
    }
  }
  
  return arrayVal;
};

// Do not edit below this line
module.exports = removeFromArray;
