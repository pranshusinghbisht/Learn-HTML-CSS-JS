// ARRAY ODD LENGTH STRINGS SUM- HOF
// Given an array of strings print the sum of lengths if the characters in the string are odd
// Sample Input - ["A", "Good", "Problem"]
// Sample Output - 8

let arr = ["A", "Good", "Problem"];

let F = function(el){
  let count=0;
  for(let i=0; i<el.length; i++){
  count++;
    // sum+=count;
  }
   return count;
}

let O = function(count){
  return count%2==1;
}

let A = function (a,b){
  return a+b;
}
let res = arr.map(F).filter(O).reduce(A)
console.log(res);














