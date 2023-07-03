
//sum to array in single iteration

var array1 = [1,2,3,4];
var array2 = [5,6,7,8];

var sum    = [6,8,10,12];

for(var i = 0; i < array1.length; i++){
  sum.push(array1[i] + array2[i]);
}