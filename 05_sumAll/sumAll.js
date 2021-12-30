const sumAll = function(val1,val2) {
  let min,max, output;
  let sum = 0;

  // Checks for incorrect inputs and prints error
  if (val1 < 0 || val2 < 0)
    output = 'ERROR';
  if (typeof(val1) != 'number' || typeof(val2) != 'number')
    output = 'ERROR';

  if (output != 'ERROR') {
    if (val1 < val2) {
      min = val1;
      max = val2;
    }
    else {
      min = val2;
      max = val1;
    }
    
    for (let i = min; i <= max; i++)
      sum += i;

    output = sum;
  }

  return output;
};

// Do not edit below this line
module.exports = sumAll;
