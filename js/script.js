
var km = prompt("Numero Di Chilometri");
var Age = prompt("Età del passaggero");

var costo  = 0.21 * km ;
var sconto = costo / 100 * 20;
var risultatoMinore = costo - sconto 

var costo  = 0.21 * km ;
var scontoSenior = costo / 100 * 40;
var risultatoSenior = costo - scontoSenior 


if(Age < 18 ) {
    document.getElementById("costo").innerHTML = risultatoMinore + " €";

}

else{ if(Age >= 65 ) {
    document.getElementById("costo").innerHTML = risultatoSenior + " €";
    }
}

if(Age < 18 ) {
    document.getElementById("costo").innerHTML = risultatoMinore + " €";

}

else
 {
    document.getElementById("costo").innerHTML = costo + " €";
    
}
