"use strict"

window.onload = function(){

    let estimateForm = document.querySelector("#estimateStayForm");

    estimateForm.addEventListener("submit", estimateStay);
}

function estimateStay (event){
    event.preventDefault();

let theStay = event.target

let stayRate = 150 * Number(theStay.numberOfNights.value)

let getRoomRate = 0;
if(theStay.roomType.value === "suite"){
    getRoomRate = stayRate + 60;
}

let discountRate = 0;
if(theStay.discount.value === "aaa"){
    discountRate = stayRate * (10/100);

}

if(theStay.discount.value === "military"){
    discountRate = stayRate * (20/100);

}

let discountedRoom = stayRate - discountRate;

let tax = stayRate - discountRate * (8.25/100)

let totalDue = stayRate - discountRate + tax;

let message = `
<div>The room cost: ${stayRate}</div>
<div>the discount: ${discountRate}</div>
<div>The room after discount: ${discountedRoom}</div>
<div>The total: ${totalDue}</div>
`

document.querySelector("#results").innerHTML = message


}


