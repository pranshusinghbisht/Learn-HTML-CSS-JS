// Write all the Javascript here
let form = document.querySelector("form");
let tbody = document.querySelector("tbody");
let sum=0;
let pArr=[];
form.addEventListener("submit", function (event){
    event.preventDefault();
    let obj = {
        pName : form.name.value,
        pCat : form.category.value,
        pBrand : form.brand.value,
        pPrice : form.price.value,
        pDelivery : form.deliveredBy.value

    }
    pArr.push(obj)
    console.log(pArr)
    display(obj);
})
function display(e){
    document.querySelector('tbody').innerHTML="";
    pArr.forEach(function (e){
        // document.querySelector('tbody').innerHTML = ""
    let row = document.createElement("tr");
    let col1 = document.createElement("td");
    col1.innerText = e.pName;
    let col2 = document.createElement("td");
    col2.innerText = e.pCat;
    let col3 = document.createElement("td");
    col3.innerText = e.pBrand;
    let col4 = document.createElement("td");;
    col4.innerText = e.pPrice;
    let col5 = document.createElement("td");
    col5.innerText = e.pDelivery;
    console.log(col1,col2,col3,col4,col5)
        let col6 =document.createElement("td");
        let col66 = f(e.pPrice);
        col6.innerText = col66;
    if(e.Pprice>1000){
        let col6 =document.createElement("td").innerText = "Expensive";

    }
    else{
    let col6 =document.createElement("td").innerText = "Not-Expensive";
    }
        
    let col7 = document.createElement("td");
    col7.innerText = "Delete";
    col7.addEventListener("click", function (e){
        e.target.parentNode.remove();
    });
    row.append(col1,col2,col3,col4,col5,col6,col7);
    document.querySelector("tbody").append(row);
    sum+=Number(e.pPrice);
document.getElementById("total-price").innerText="Total Price:- "+sum;


})
function f(price){
    if(price > 1000){
        return "Expensive";
    }
    else{
        return "Not-Expensive";
    }
}




}

