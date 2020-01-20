// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var resultStr = ''
  //numbers
  if(typeof obj === 'number'){
    resultStr+= obj
  }

  //null
  if(obj === null){
    return 'null'
  }

  //boolean
  if(typeof obj === 'boolean'){
    resultStr+= obj
  }

  //already string
  if(typeof obj === 'string'){
    var strObj = '"' + obj + '"'
    resultStr+= strObj
  }

  if(Array.isArray(obj) && obj.length === 0){
    return '[]'
  }

  //for array with elements

  //for type object

  return resultStr
};
