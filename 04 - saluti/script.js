/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = "Mario";

// Dichiara la funzione qui.
/**
 * Description
 * @param {string} name
 * @returns {string}
 */

const helloFunction = (name) => `Ciao ${name}`;

// Invoca la funzione qui e stampa il risultato in console
const saluto = helloFunction(name);
console.log(saluto);

//Risultato atteso se si passa 'Mario': // ciao Mario
