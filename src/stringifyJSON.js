// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch: 

var stringifyJSON = function (obj) {

  if (typeof obj === 'number') {
    return '' + obj
  }
  if (obj === null) {
    return '' + obj
  }
  if (typeof obj === 'boolean') {
    return '' + obj
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"'
  }
  if (Array.isArray(obj)) {
    var arrayResults = [];
    obj.forEach(function (value) {
      arrayResults.push(stringifyJSON(value));
    });
    return '[' + arrayResults.join(',') + ']'
  }
  if (typeof obj === 'object') {
    var objectResults = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      } else {
        objectResults.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]))
      }
    };
    return '{' + objectResults.join(',') + '}'
  }
}
