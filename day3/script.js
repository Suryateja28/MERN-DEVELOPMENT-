document.getElementById("div-button").onclick = function () {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);

    let table = document.getElementById("bmi-table");
    let row = table.insertRow();    
    row.insertCell(0).innerText = height;
    row.insertCell(1).innerText = weight;
    row.insertCell(2).innerText = bmi;      

    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
}
