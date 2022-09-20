function compareArrays(arr1, arr2) {
  if (arr1.length === arr2.length){
  result = arr1.every((element, index) => element === arr2[index]);
  } else {
    return false;
  }
  
  return result; 
}


function advancedFilter(arr) {
  let resultArr = arr.filter(element => element > 0 && element % 3 === 0).map(element => element * 10);

  return resultArr;
}
