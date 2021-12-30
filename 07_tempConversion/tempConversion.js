const ftoc = function(fah) {
  let cels = 0;

  // Formula is (F - 32) * 5/9
  cels = (fah - 32) * (5/9)
  
  return Math.round(cels * 10) / 10;
};

const ctof = function(cels) {
  let fah = 0;

  // Formula is (C * 9/5) + 32
  fah = ((cels * 9/5) + 32);

  return Math.round(fah * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
