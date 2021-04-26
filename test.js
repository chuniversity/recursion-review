// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function (obj) {
  // your code goes here
  var result = [];
  if (Array.isArray(obj)) {
    var arrayResults = [];
    obj.forEach(function (value) {
      result.push(stringifyJSON(value));
    });
  }
  return result;
}




var output = stringifyJSON([1, 2, 3])
console.log(output)