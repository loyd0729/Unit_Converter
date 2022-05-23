
function myLen() {
    let num1 = document.getElementById("nmbrCon").value;
    let num1a = num1 + " meters = " + parseFloat(num1) * 3.28084 +
    " feet " + "| " + num1 + " feet = "+ parseFloat(num1) * 0.3048 + " meters";
    document.getElementById("conlen").textContent = num1a;
   
}

function myVol() {
    let num1 = document.getElementById("nmbrCon").value;
    let num1a = num1 + " liters = " + parseFloat(num1) * 0.2641 +
    " gallons " + "| " + num1 + " gallons = "+ parseFloat(num1) * 3.7854 + " liters";
    document.getElementById("convol").textContent = num1a;
   
}

function myMas() {
    let num1 = document.getElementById("nmbrCon").value;
    let num1a = num1 + " kilos = " + parseFloat(num1) * 2.2046 +
    " pounds " + "| " + num1 + " pounds = " + parseFloat(num1) * 0.45359 + " kilos";
    document.getElementById("conmas").textContent = num1a;
   
}