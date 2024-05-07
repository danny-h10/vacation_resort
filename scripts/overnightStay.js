"use strict"

window.onload = function () {

    let estimateForm = document.querySelector("#estimateStayForm");

    estimateForm.addEventListener("submit", estimateStay);
}

function estimateStay(event) {
    event.preventDefault();

    let theStay = event.target

  
    


    let stayRate = Number(theStay.numberOfNights.value) * getRoomRate(theStay.checkInDate.value, theStay.roomType.value)



    let discountRate = 0;
    if (theStay.discount.value === "aaa") {
        discountRate = stayRate * (10 / 100);

    }

    if (theStay.discount.value === "military") {
        discountRate = stayRate * (20 / 100);

    }

    let discountedRoom = stayRate - discountRate;

    let tax = stayRate * (12 / 100)

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

function getRoomRate(checkInDate, roomType) {

    let theDate = new Date(checkInDate)
    console.log(theDate)
    console.log(theDate.getMonth())
    let roomPrice
    if (theDate.getMonth() > 4 && theDate.getMonth() < 8) {
        if (roomType === "suite") {
            roomPrice = 350
            console.log(roomPrice)
        }
        else {
            roomPrice = 250
            console.log(roomPrice)
        }

    }
    else {
        if (roomType === "suite") {
            roomPrice = 210
            console.log(roomPrice)
        }
        else {
            roomPrice = 150
            console.log(roomPrice)
        }

    }
    return roomPrice
}

