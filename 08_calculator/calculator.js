const add = function() {
	return arguments[0] + arguments[1];
};

const subtract = function() {
	return arguments[0] - arguments[1];
};

// Go through array
const sum = function() {
  let ans = 0;
  let input = arguments[0]

  for (i in input) {
    ans += input[i];
  }

  return ans;
};

const multiply = function() {
  let ans = 0;
  let input = arguments[0]

  for (i in input) {
    ans *= input[i];
  }

  return ans;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
