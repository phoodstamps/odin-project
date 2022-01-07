// Sum of two preceding numbers
const fibonacci = function(n) {
  let ans;

  if (n < 0)
    ans = 'OOPS';
  else if (n == 0)
    ans = 0;
  else if (n == 1 || n == 2)
    ans = 1;
  else if (n > 2)
    ans = fibonacci(n-1) + fibonacci(n-2);
  
  return ans;
};

// Do not edit below this line
module.exports = fibonacci;
