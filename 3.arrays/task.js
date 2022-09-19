function compareArrays(arr1, arr2) {
  let result;
  result = arr1.every(element => element === arr2[arr1.indexOf(element)] && arr1.length === arr2.length);

  return result; 
}




function advancedFilter(arr) {
  let resultArr = arr.filter(element => element > 0 && element % 3 === 0).map(element => element * 10);

  return resultArr;
}
