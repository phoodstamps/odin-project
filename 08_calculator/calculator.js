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
  let input = arguments[0]
  let ans = input[0] * input[1];

  if (input.length > 2) {
    for (i = 2; i < input.length; i++) {
      ans = ans * input[i];
    }
  }

  return ans;
};

// Two arguments. First is the primary number. Second is the number of times to multiply it
const power = function() {
  let primNum = arguments[0];
  let powerNum = arguments[1];
  let ans = primNum;

  for (i = 1; i < powerNum; i++)
    ans *= primNum;
	
  return ans;
};

const factorial = function() {
  let ans = 1;
  if (arguments[0] > 1) {
    for (i = 2; i <= arguments[0]; i++)
        ans *= i;
  }

  return ans;
};

const recursiveFactorial = function(n) {
  if (n === 0)
    return 1;
  return n * recursiveFactorial(n-1);
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
