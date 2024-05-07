"use strict"

window.onload = function(){

    let estimateForm = document.querySelector("#estimateStayForm");

    estimateForm.addEventListener("submit", estimateStay);
}

function estimateStay (event){
    event.preventDefault();

let theStay = event.target

let thedate = event.target


let stayRate =  Number(theStay.numberOfNights.value) * getRoomRate(theStay.roomType.value)

function getRoomRate(roomType){

    //logic goes here to determine the room rate based on the check-in date and room type
    //for now just return 150

    if(roomType === "suite"){
        return 250;
    }

    return 150;

}

let discountRate = 0;
if(theStay.discount.value === "aaa"){
    discountRate = stayRate * (10/100);

}

if(theStay.discount.value === "military"){
    discountRate = stayRate * (20/100);

}

let discountedRoom = stayRate - discountRate;

let tax = stayRate * (12/100)

let totalDue = stayRate - discountRate + tax;

let message = `
<div>The room cost: $${stayRate}</div>
<div>the discount: $${discountRate}</div>
<div>The room after discount: $${discountedRoom}</div>
<div>Tax: $${tax.toFixed(2)}</div>
<div>The total: ${totalDue.toFixed(2)}</div>
`

document.querySelector("#results").innerHTML = message


}


