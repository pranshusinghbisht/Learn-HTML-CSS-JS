// Write code related to Done page here
// 

let list = JSON.parse(localStorage.getItem("done-list")) || [];
// let adddArr = JSON.parse(localStorage.getItem("done-list")) || [];

displayTable(list)


function displayTable(list){
document.querySelector("tbody").innerHTML="";
list.forEach(function(e, i){
let row = document.createElement("tr");
let col1 =  document.createElement("td");
col1.innerText = e.name;

let col2 =  document.createElement("td");
col2.innerText = e.des;

let col3 =  document.createElement("td");
col3.innerText = e.dateS;

let col4 =  document.createElement("td");
col4.innerText = e.dateE;

let col5 =  document.createElement("td");
col5.innerText = e.prior;

row.append(col1,col2,col3,col4,col5)
document.querySelector("tbody").append(row);

})

}
// function add(e){
//     adddArr.push(e);
//     localStorage.setItem("done-list",JSON.stringify(adddArr));
// }