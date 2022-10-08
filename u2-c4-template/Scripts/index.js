// Write code related to Home page here 
document.querySelector("form").addEventListener("submit", taskManager);
let taskArr = [];

function taskManager(e){
    e.preventDefault();

    let taskObj = {
        name : document.querySelector("#name").value,
        des : document.querySelector("#desc").value,

        dateS : document.querySelector("#start").value,
        dateE : document.querySelector("#end").value,

        prior : document.querySelector("#priority").value,
    }
    
    taskArr.push(taskObj);
    console.log(taskArr)
    localStorage.setItem("task-list",JSON.stringify(taskArr))
    
}