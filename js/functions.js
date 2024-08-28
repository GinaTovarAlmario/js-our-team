// funzione per creare un immagine
function createImage(foto){
    let image = document.createElement('img');
    image.src ="img/" + foto;
    listTeamMembers.appendChild(image);
    return image;
}

// funzione per creare un elemento in pagina
function createCard(fullName,job,foto){
    let card = document.createElement('div');
    card.classList.add('card');
    card.append(fullName);
    card.append(job);
    card.append(foto);
    return card;
}