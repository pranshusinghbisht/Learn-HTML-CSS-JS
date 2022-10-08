// Write code related to dashboard page here
let list = JSON.parse(localStorage.getItem("task-list")) || [];
let addArr = JSON.parse(localStorage.getItem("priority-list")) || [];
let nlist = JSON.parse(localStorage.getItem("lst")) || [];

let count=0;

if(list.length !== nlist.length){
    displayTable(nlist);
}
else{
    displayTable(list)
}

displayTable(list)

document.querySelector("#filter").addEventListener("change", filterF)
function filterF(){
    let select = document.querySelector("#filter").value;
 let filtered = list.filter(function(e){
    if(select==e.prior){
        return e.prior==select;
    }
    if(select==""){
    displayTable(list)
    }
 })
 displayTable(filtered)
}


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

let col6 =  document.createElement("td");
col6.innerText = "Add";

col6.addEventListener("click",function(el){
    add(e);
el.target.parentNode.remove();
list.splice(i,1)
localStorage.setItem("lst",JSON.stringify(list))
})

count++;
// console.log(count++)

row.append(col1,col2,col3,col4,col5,col6)
document.querySelector("tbody").append(row);

})

}
function add(e){
    addArr.push(e);
    localStorage.setItem("priority-list",JSON.stringify(addArr));
}
document.getElementById("task-count").innerText=count;
