/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
/**
 * Description
 * @param {string} name
 * @returns {string}
 */

const helloFunction = (name) => {
  // Variabile contenente la stringa di ritorno
  let saluto = "";

  // Variabile contenente istanza Date()
  const time = new Date();

  // Variabile contenente ora presa tramite metodo getHours
  const ora = time.getHours();

  // Serie di if per confrontare l'orario e cambiare di conseguenza la stringa di return
  if (ora >= 0 && ora < 13) saluto = `Buongiorno ${name}`;
  else if (ora >= 13 && ora < 17) saluto = `Buon Pomeriggio ${name}`;
  else if (ora >= 17 && ora <= 23) saluto = `Buonasera ${name}`;

  // Ritorniamo la stringa modificata.
  return saluto;
};

// Invoca la funzione qui e stampa il risultato in console
const saluto = helloFunction(name);
console.log(saluto);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
