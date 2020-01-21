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

  if(Array.isArray(obj) && obj.length > 0){
    var strArr = []
    for(var i = 0; i < obj.length; i++){
      var strElem = stringifyJSON(obj[i])
      strArr.push(strElem)
    }
    //join  with.join(',')
    //NOTE join wont do anything to an array with
    return resultStr+= '[' + strArr.join(',') + ']'
  }

  //for type object
  if(typeof obj === 'object'){
    for(var key in obj){
      if(obj[key] !== undefined && typeof obj[key] !== 'function'){
        strProperty = stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ','
        resultStr+= strProperty//with comma
      }
    }
    //splice everything but make sure to take that last comma off
    return '{' + resultStr.slice(0, resultStr.length-1) + '}'
  }

  return resultStr
};
