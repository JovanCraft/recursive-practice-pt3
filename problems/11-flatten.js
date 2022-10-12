/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Do not use the built in Array.flat.

if (arr.length === 0){
    return [];
  } else if (arr.length === 1){
    return arr[0]
  }
  if (Array.isArray(arr[0])){
    var newArr = arr[0]
    arr.shift()
  } else {
    var newArr = [arr[0]];
    arr.shift()
  }
  if (Array.isArray(arr[0])){
    return newArr.concat(flatten(arr[0]))
  } else {
    return newArr.concat(flatten(arr))
  }
Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

function flatten(arr) {
  //Your code here
  const flat = [];

    arr.forEach(ele => {
      if (Array.isArray(ele)) {
        flat.push(...flatten(ele));
      } else {
        flat.push(ele);
      }
    });

    return flat;
  }



//flatten([]); // []
//flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]//fix 3rd one!!!
flatten([1, [2, [3],5]])//
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
module.exports = flatten;
