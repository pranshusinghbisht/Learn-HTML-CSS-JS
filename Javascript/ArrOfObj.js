let employees = [
    {
        firstName: 'john',
        lastName: 'doe',
        age: 27,
        joinedDate: 'December 15, 2017'
    },

    {
        firstName: 'ana',
        lastName: 'rosy',
        age: 25,
        joinedDate: 'January 15, 2019'
    },

    {
        firstName: 'zion',
        lastName: 'albert',
        age: 30,
        joinedDate: 'February 15, 2011'
    }
];

// Ascending Order

employees.sort(function (a, b) {
    if (a.firstName > b.firstName) return 1;
    if (a.firstName < b.firstName) return -1;
})

console.log(employees);

// Descending Order 

employees.sort(function (a, b) {
    if (a.firstName > b.firstName) return -1;
    if (a.firstName < b.firstName) return 1;
})

console.log(employees);

// Ascending Order

employees.sort(function (a, b) {
    if (a.age > b.age) return 1;
    if (a.age < b.age) return -1;
})

console.log(employees);

// Descending Order 

employees.sort(function (a, b) {
    if (a.age > b.age) return -1;
    if (a.age < b.age) return 1;
})

console.log(employees);

