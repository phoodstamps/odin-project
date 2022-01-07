const findTheOldest = function(array) {
  return array.reduce( 
    (oldest,curr) => {
      if (( (curr.yearOfDeath == undefined ? new Date().getFullYear() : curr.yearOfDeath) - curr.yearOfBirth) > ((oldest.yearOfDeath == undefined ? new Date().getFullYear() : oldest.yearOfDeath) - oldest.yearOfBirth))
        oldest = curr;
      return oldest;
    })
};

// Do not edit below this line
module.exports = findTheOldest;
