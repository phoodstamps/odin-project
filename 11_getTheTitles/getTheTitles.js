const getTheTitles = function(obj) {
  let titles = [];

  //return obj.map(book => book.title); Solution

  for (i in obj)
    titles.push(obj[i]['title']);

  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
