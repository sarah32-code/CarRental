"use strict";

// Input elements
const inputPickupDate = document.getElementById("inputPickupDate");
const inputNumOfDays = document.getElementById("inputNumOfDays");
const inputOptElectronicTollTagCheckbox = document.getElementById("inputOptElectronicTollTagCheckbox");
const inputOptGPSCheckbox = document.getElementById("inputOptGPSCheckbox");
const inputOptRoadsideAssistCheckbox = document.getElementById("inputOptRoadsideAssistCheckbox");
const inputUnder25NoRadio = document.getElementById("under25No");
const inputUnder25YesRadio = document.getElementById("under25Yes");

// Button
const estimateTotalCostButton = document.getElementById("estimateTotalCostButton");

// Output elements
const outputCarRental = document.getElementById("outputCarRental");
const outputOptions = document.getElementById("outputOptions");
const outputSurcharge = document.getElementById("outputSurcharge");
const outputTotal = document.getElementById("outputTotal");

window.onload = function () {
    estimateTotalCostButton.onclick = onEstimateTotalCostButtonClick;
};

function onEstimateTotalCostButtonClick() {
    // Get known values
    let numOfDays = inputNumOfDays.value;
    let isOptElectronicTollTag = inputOptElectronicTollTagCheckbox.checked;
    let isOptGPS = inputOptGPSCheckbox.checked;
    let isOptRoadAsst = inputOptRoadsideAssistCheckbox.checked;
    let isUnder25 = inputUnder25YesRadio.checked;

    // Calculate unknown values
    let carRentalAmount = 29.99 * numOfDays;

    let optionsAmount = 0;
    if (isOptElectronicTollTag) {
        optionsAmount += (3.95 * numOfDays);
    }
    if (isOptGPS) {
        optionsAmount += (2.95 * numOfDays);
    }
    if (isOptRoadAsst) {
        optionsAmount += (2.95 * numOfDays);
    }

    let surchargeAmount;
    if (isUnder25) {
        surchargeAmount = 0.30 * (carRentalAmount + optionsAmount);
    } else {
        surchargeAmount = 0;
    }

    let totalDueAmount = carRentalAmount + optionsAmount + surchargeAmount;

    // Display the results
    outputCarRental.textContent = carRentalAmount.toFixed(2);
    outputOptions.textContent = optionsAmount.toFixed(2);
    outputSurcharge.textContent = surchargeAmount.toFixed(2);
    outputTotal.textContent = totalDueAmount.toFixed(2);
}
