// ARRAY STRING PATTERN- HOF
// Given an array of string generate an array whose first or last character is a
// Sample Input - ["assignment", "problem", "media", "upload"]
// Sample Output - ["assignment", "media"]

let arr = ["assignment", "problem", "media", "upload"];
let F = function(el){
  for(let i=0; i<el.length; i++){
    if(el[0]=="a" || el[el.length-1]=="a"){
    return el;
    }
  }
}
let res = arr.filter(F);
console.log(res);