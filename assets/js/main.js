/*

Decrizione passaggi:
Chiedi all'utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina il risultato usando questo formato: nomecognomecolorepreferito23

*/

// Chiedo all'utente il suo nome e lo salvo in una costante
const userName = prompt(`Inserisci il tuo nome`);

// Chiedo all'utente il suo cognome e lo salvo in un'altra costante
const userSurname = prompt(`Inserisci il tuo cognome`);

// Chiedo all'utente il suo colore preferito e lo salvo in un'altra costante
const userColor = prompt(`Inserisci il tuo colore preferito`);

// Creo un elemento nella DOM, all'interno del file HTML, e lo seleziono tramite ID, assegnandolo contemporaneamente ad una costante
const sentenceElement = document.getElementById(`sentence`);

// Assegno alla proprietà innerHTML dell'elemento precedentemente selezionato la concatenazione delle tre costanti contenenti gli input dell'utente e la stringa "23"
sentenceElement.innerHTML = `${userName}${userSurname}${userColor}23`;
