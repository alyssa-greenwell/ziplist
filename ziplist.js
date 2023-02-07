function zipList(arr1, arr2) {
  let newArr = [];
  for(let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
    newArr.push(arr2[i]);
  }
  return newArr;
}

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

console.log(zipList([1,3,5,7], [2,4,6,8]));
console.log(zipListTheSimpleWay([1,3,5,7], [2,4,6,8]));
