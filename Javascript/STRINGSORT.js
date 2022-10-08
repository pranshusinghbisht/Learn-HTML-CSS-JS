let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];

// Ascending Order 

animals.sort(function (a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
})
console.log(animals)

// Descending Order 

animals.sort(function (a, b) {
    if (a > b) return -1;
    if (a < b) return 1;
})
console.log(animals)