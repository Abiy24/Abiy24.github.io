//Console Log
// console.log("Hello There!");
// alert("This alert used everytime the page is refreshed!");

//Alert
document.getElementById("nama").innerHTML ="Abiyansyah Meidy Laksono";
document.getElementById("nama").style.color = "Black";

function halo(){
    alert("This alert is using Function in js");
}

let nama = document.getElementById("nama");
nama.addEventListener("click", function nama(){
    alert("This alert pop up everytime name is Clicked");
})

//Time
Date()
let tanggal = new Date()
document.getElementById("tanggal").innerHTML = tanggal


//Header & Footer


//Audio