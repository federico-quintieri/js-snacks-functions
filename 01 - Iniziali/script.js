/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
const inizialiArray = (array) => {
  let returnArray = [];

  // Ciclo che itera ogni elemento dell'array
  for (let i = 0; i < array.length; i++) {
    // Salviamo l'elemento i dell'array
    let currElement = array[i];
    // Prendiamo l'indice 0 della stringa elemento
    let inizialeElement = currElement[0];
    // Pushiamo questo carattere nell'array da ritornare
    returnArray.push(inizialeElement);
  }
  // Ritorno nuovo array con solo iniziali di elementi del precedente array
  return returnArray;
};

// Invoca la funzione qui e stampa il risultato in console
// Passiamo l'array names come parametro d'ingresso
const returnArray = inizialiArray(names);
console.log(returnArray);
//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
