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

// Creo nella DOM, all'interno del file HTML, elementi separati per contenere nome, cognome, colore e password e li seleziono tramite ID, assegnandoli contemporaneamente a delle costanti
const nameElement = document.getElementById(`name`);
const surnameElement = document.getElementById(`surname`);
const colorElement = document.getElementById(`color`);
const passwordElement = document.getElementById(`password`);

// Assegno alla proprietà innerHTML degli elementi precedentemente selezionati i valori singoli, ed a "passwordElement" la concatenazione delle tre costanti contenenti gli input dell'utente e la stringa "23"
nameElement.innerHTML = userName;
surnameElement.innerHTML = userSurname;
colorElement.innerHTML = userColor;
passwordElement.innerHTML = `${userName}${userSurname}${userColor}23`;
