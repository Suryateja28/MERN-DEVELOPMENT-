document.getElementById("btn").onclick = function () {

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let course = document.getElementById("text").value;

    let table = document.getElementById("table");
    let row = table.insertRow();

    row.insertCell(0).innerText = name;
    row.insertCell(1).innerText = age;
    row.insertCell(2).innerText = course;

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("text").value = "";
};
