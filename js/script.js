// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca :lente_a_destra:.
const kmPrice = "0.21"

const kilo = (prompt("Quanti chilometri vuoi percorrere?")) * kmPrice;
const age = (prompt("Quanti anni hai?"));
let message = ""
if (isNaN(kilo && age)) {
    message = "Questo non e un numero inserisci un numero ";
    document.getElementById("trainticket").innerHTML = message
} else {
    let price = ""
    if (age < 18) {
        price = kilo * 0.8;
    } else if (age > 65) {
        price = kilo * 0.6;
    } else {
        price = kilo
    }

    console.log(price.toFixed(2));
    document.getElementById("trainticket").innerHTML = "Il tuo biglietto costa " + price.toFixed(2)
}






