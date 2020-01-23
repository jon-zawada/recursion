// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  // your code here
  //FROM MDN
  //returns an array-like object of all child elements which have all of the given class names. When called on the document object, the complete document is searched, including the root node. You may also call getElementsByClassName() on any element; it will return only elements which are descendants of the specified root element with the given class names.

  //from google
  //The childNodes property is a property of Node in Javascript and is used to return a Nodelist of child nodes. Nodelist items are objects, not strings and they can be accessed using index numbers. The first childNode starts at index 0.

  //our array we return at end
  var elemsWthClassName = []
  //element.classList.contains will let us know if the element has that class name
  function elemsContainingClass(element){
    //if the element.classList exists and it contains the one we are looking for
    if(element.classList && element.classList.contains(className)){
      //we can push it to our result array
      elemsWthClassName.push(element)
    }
    //read more about childnodes
    //check if element childnodes
    if(element.childNodes)
  }

};
