document.querySelector("form").addEventListener("submit",todoApp);
let taskArr = [];
function todoApp(event){
    event.preventDefault();
    let taskName = document.querySelector("#task").value;
    let priority = document.querySelector("#priority").value;
    console.log(taskName,priority)
    let taskObj = {
        task: taskName,
        prior: priority,
    };
    taskArr.push(taskObj);
    displayTable(taskArr);
}
function displayTable(taskArr){
    document.querySelector('tbody').innerHTML = "";
    taskArr.forEach(function (e){
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.innerText = e.task;
        let col2 = document.createElement("td");
        col2.innerText = e.prior;
        if(e.prior== "High") {
            col2.style.backgroundColor = "red";}
            else{
                col2.style.backgroundColor= "green";
            }
            let col3 = document.createElement("td");
            col3.innerText = "Delete";
            col3.addEventListener("click", function (e){
            e.target.parentNode.remove();
        });
        col3.style.color = "red";
    row.append(col1,col2,col3);
    document.querySelector("tbody").append(row);
});
}
