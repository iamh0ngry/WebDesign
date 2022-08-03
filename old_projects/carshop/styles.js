function turnred() {
    var car = document.getElementById("car");
    car.style.color = "red";
}
function turnorange() {
    var car = document.getElementById("car");
    car.style.color = "orange";
}
function turnyellow() {
    var car = document.getElementById("car");
    car.style.color = "yellow";
}
function turngreen() {
    var car = document.getElementById("car");
    car.style.color = "green";
}
function turnblue() {
    var car = document.getElementById("car");
    car.style.color = "blue";
}
function turnpurple() {
    var car = document.getElementById("car");
    car.style.color = "purple";
}

var size = 30;
function makebigger() {
    var car = document.getElementById("car");
    size = size + 5;
    car.style.fontSize = size + "pt";
}
function makesmaller() {
    var car = document.getElementById("car");
    size = size - 5;
    car.style.fontSize = size + "pt";
}
function morefancy() {
    var car = document.getElementById("car");
    car.style.fontFamily = "fantasy";
}
function morecasual() {
    var car = document.getElementById("car");
    car.style.fontFamily = "cursive";
}
function backtonormal() {
    var car = document.getElementById("car");
    car.style.fontFamily = "'Times New Roman', Times, serif";
    car.style.fontSize = "30pt";
    car.style.color = "black";
}