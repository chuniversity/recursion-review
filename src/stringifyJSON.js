// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  var result = '';
  if (Array.isArray(obj)) {
    var arrayResults = [];
    obj.forEach(function (value) {
      arrayResults.push(stringifyJSON(value));
    });
    return result += '[' + arrayResults.join(',') + ']'
  }
  return result;
}
