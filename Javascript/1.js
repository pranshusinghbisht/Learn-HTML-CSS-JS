// Given an array of strings print the length of each string

let example = ["apple", "windows", "ubuntu"];

// using forEach
example.forEach(myFunction);

function myFunction(item) {
let count = 0;
  for(let i=0; i<item.length; i++){
    count++
  }
    console.log(count);
}
