// ARRAY STRING FIRST CHARACTER - HOF
// Given an array of string generate an array with their first characters

// Sample Input - ["Masai", "School"]

// Sample Output - ["M", "S"]


let ms = ["Masai", "School"];

let F = function(el){
  return (el[0]);
}
let res = ms.map(F);
console.log(res);