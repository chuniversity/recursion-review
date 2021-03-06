// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function (className
) {
  var result = [];
  var recursionFunction = function (element) {
    var children = element.childNodes
    if (element.classList && element.classList.contains(className)) {
      result.push(element)
    }
    for (var i = 0; i < children.length; i++) {
      recursionFunction(children[i])
    }
  }
  recursionFunction(document)
  return result
};
