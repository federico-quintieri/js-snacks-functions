/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

/**
 * Description
 * @param {array} array
 * @param {string} carattere
 * @returns {array}
 */

const inizialiArray = (array, carattere) => {
  let returnArray = [];

  // Ciclo che itera ogni elemento dell'array
  for (let i = 0; i < array.length; i++) {
    // Salviamo l'elemento i dell'array
    let currElement = array[i];
    // Prendiamo l'indice 0 della stringa elemento e lo mettiamo minuscolo
    let inizialeElement = currElement[0].toLowerCase();

    // Se inizialeElement lower case è uguale a carattere allora pushiamo l'elemento intero
    if (inizialeElement === carattere) returnArray.push(currElement);
  }
  // Ritorno nuovo array con solo iniziali di elementi del precedente array
  return returnArray;
};

// Invoca la funzione qui e stampa il risultato in console
// Passiamo l'array names come parametro d'ingresso
const returnArray = inizialiArray(names, "a");
console.log(returnArray);

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
