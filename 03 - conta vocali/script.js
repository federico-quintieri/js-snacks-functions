/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
/**
 * Description
 * @param {stringa} stringa
 * @returns {number}
 */
const vocalNum = (stringa) => {
  const vocaliArray = ["a", "e", "i", "o", "u"];
  let contVocali = 0;

  // Primo ciclo iteriamo ogni carattere della stringa
  for (let i = 0; i < stringa.length; i++) {
    // Immagazziniamo questo carattere in una variabile e lo mettiamo minuscolo
    let currCarattere = stringa[i].toLowerCase();

    // Controlliamo con un altro ciclo se il carattere è uguale a un elemento dell'array vocali
    for (let i = 0; i < vocaliArray.length; i++) {
      if (currCarattere === vocaliArray[i]) {
        contVocali++;
        break;
      }
    }
  }
  return contVocali;
};

// Invoca la funzione qui e stampa il risultato in console
const numVocali = vocalNum("javascript");
console.log(numVocali);
//Risultato atteso se si passa 'javascript': 3 (a, a, i)
