// funzione per creare un immagine
function createImage(foto){
    let image = document.createElement('img');
    image.src ="img/" + foto;
    listTeamMembers.appendChild(image);
    return image;
}

// funzione per creare un elemento in pagina
function createCard(foto,fullName,job,){
    let card = document.createElement('div');
    card.classList.add('card');
    card.append(foto);
    card.append(fullName);
    card.append(job);
    return card;
}