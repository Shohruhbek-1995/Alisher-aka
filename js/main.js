var resultEl = document.querySelector(".resultEl");
var balance = prompt("Aka qanch puliz bor?");

const usd_to_uzs = 11000;
const eur_to_uzs = 14000;

var plane = usd_to_uzs* 500;
var hotel = usd_to_uzs* 250;
var museum = eur_to_uzs* 120;
var obsum = plane + hotel + museum;


document.querySelector(".result1").innerHTML = obsum;
document.querySelector(".result2").innerHTML = balance;


if(balance < (hotel+plane)*usd_to_uzs + museum* eur_to_uzs ){
   resultEl.textContent = "Sabr qilin aka !!!";
}else{
    resultEl.textContent = "Oq yo'l Brat!!!";
    
}

