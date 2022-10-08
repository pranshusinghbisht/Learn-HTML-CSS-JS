document.querySelector("form").addEventListener("submit", doctorRecord)

let dArr = [];
function doctorRecord(event) {
    event.preventDefault();
    let dname = document.querySelector("#name").value;
    let docid = document.querySelector("#docID").value;
    let dspl = document.querySelector("#dept").value;
    let dexp = document.querySelector("#exp").value;
    let demail = document.querySelector("#email").value;
    let dmbl = document.querySelector("#mbl").value;
console.log(dname,docid,dspl,dexp,demail,dmbl)
    let dObj = {
        ddname: dname,
        ddid: docid,
        ddspl: dspl,
        ddexp: dexp,
        ddemail: demail,
        ddmbl: dmbl,
    };

    dArr.push(dObj)
    tableDisplay(dArr);
}

function tableDisplay(dArr) {
    document.querySelector('tbody').innerHtml = ""
    dArr.map(function (e){
        let row = document.createElement("tr");
        let col1 = document.createElement("td");
        col1.innerText = e.ddname;

        let col2 = document.createElement("td");
        col2.innerText = e.ddid;

        let col3 = document.createElement("td");
        col3.innerText = e.ddspl;

        let col4 = document.createElement("td");
        col4.innerText = e.ddexp;

        let col5 = document.createElement("td");
        col5.innerText = e.ddemail;

        let col6 = document.createElement("td");
        col6.innerText = e.ddmbl;

        let col7 = document.createElement("td");
        if (e.ddexp > 5) {
            col7.innerText = "Senior";
        }
        else if (e.ddexp >= 2 && e.ddexp <= 5) {
            col7.innerText = "Junior";
        }
        else if (e.ddexp <= 1) {
            col7.innerText = "Trainee";
        }

        let col8 = document.createElement("td");
        col8.innerText = "Delete";
        col8.addEventListener("click", function (e) {
            e.target.parentNode.remove();
        });
        col8.style.backgroundColor = "red"
        row.append(col1, col2, col3, col4, col5, col6, col7, col8);
        document.querySelector("tbody").append(row);
    });
}

