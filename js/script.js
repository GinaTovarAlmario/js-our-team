
/*MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede (allego qualche immagine per darvi ispirazione

Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
E ricordiamoci che console.log() è nostro amico!
Buon lavoro!

 # DATI
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg */


// controllo che veda il mio script.js
console.log('Js ok');
// ho fatto un file a parte per le mie funzioni faccio il controllo
window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
});

/*Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.*/

// FASE DI PREPARAZIONE
const teamMembers = [
    {fullName:'Wayne Barnett',job:'Founder & CEO',photo:'wayne-barnett-founder-ceo.jpg'},
    {fullName:'Angela Caroll',job:'Chief Editor',photo:'angela-caroll-chief-editor.jpg'},
    {fullName:'Walter Gordon',job:'Office Manager',photo:'walter-gordon-office-manager.jpg'},
    {fullName:'Angela Lopez',job:'Social Media Manager',photo:'angela-lopez-social-media-manager.jpg'},
    {fullName:'Scott Estrada',job:'Developer',photo:'scott-estrada-developer.jpg'},
    {fullName:'Barbara Ramos',job:'Graphic Designer',photo:'barbara-ramos-graphic-designer.jpg'}
];
console.table(teamMembers);