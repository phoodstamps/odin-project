const leapYears = function(year) {
  let flag = false;

  if (year % 4 == 0 && (!(year % 100 == 0) || (year % 100 == 0 && year % 400 == 0)))
    flag = true;
  
  return flag;
};

// Do not edit below this line
module.exports = leapYears;
