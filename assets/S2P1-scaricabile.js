

//ESERCIZIO 1
// Scrivi un algoritmo per trovare il più grande tra due numeri interi.//

function trovaMaggiore(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return "i numeri sono uguali";
  }
}

const numero1 = 10;
const numero2 = 20;

console.log("il numero piu grande è:" + trovaMaggiore(numero1, numero2));

/*
ESERCIZIO 2
 Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

 num < 5 - mostra in console "Tiny"
 num < 10 - mostra in console "Small"
 num < 15 - mostra in console "Medium"
 num < 20 - mostra in console "Large"
 num >= 20 - mostra in console "Huge"
*/

function mostraMessaggio(num) {
  if (num < 5) {
    console.log("Tiny");
  } else if (num < 10) {
    console.log("Small");
  } else if (num < 15) {
    console.log("Medium");
  } else if (num < 20) {
    console.log("Large");
  } else {
    console.log("Huge");
  }
}

// Esempio 
mostraMessaggio(3);  // Tiny
mostraMessaggio(7);  // Small
mostraMessaggio(12); // Medium
mostraMessaggio(18); // Large
mostraMessaggio(25); // Huge

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/
for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
    continue; // Salta l'iterazione corrente se il numero è 3 o 8
  }
  console.log(i); // Mostra il numero
}

/* ESERCIZIO 11 (ma perchè 11??!)
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " è pari");
  } else {
    console.log(i + " è dispari");
  }
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function verificaOtto(num1, num2) {
  if (num1 === 8 || num2 === 8) {
    return true; // Uno dei due numeri è 8
  } else if (num1 + num2 === 8 || (num1 - num2) === 8) {
    return true; // La somma o la differenza è 8
  } else {
    return false; // Nessuna delle condizioni è soddisfatta
  }
}

// Esempio di utilizzo
console.log(verificaOtto(8, 5)); // true (num1 è 8)
console.log(verificaOtto(3, 5)); // true (3 + 5 = 8)
console.log(verificaOtto(16, 8)); // true (16 - 8 = 8)
console.log(verificaOtto(4, 10)); // false (nessuna condizione soddisfatta)

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
function totalShoppingCart(subTotal, shipping, freeShipping) {
  if (subTotal > freeShipping) {
    return subTotal
  }
  return subTotal + shipping
}

const freeShipping = 50
const subTotal = 40
const shipping = 10
const total = totalShoppingCart(subTotal, shipping, freeShipping)
console.log("il totale è : " + total)

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function discountBlackFriday(totalParam, discountParam){
  const discount = totalParam / 100 * discountParam   
  return totalParam - discount

}

const discount = 20
const totalBlackFriday = discountBlackFriday(total, discount)
console.log(totalBlackFriday)



/*  ESERCIZIO EXTRA 4
  Usa un operatore ternario per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const gender = "male"
const isMale = (gender === "male") ? true : false;
console.log(isMale)

/* ESERCIZIO EXTRA
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0){
    console.log(i + "FizzBuzz");
  }else if (i % 3 === 0) {
    console.log(i + " + Fizz");

  } else if (i % 5 === 0){
    console.log(i + " + Buzz");
  }
}


