// funzione per creare un immagine
function createImage(foto){
    let image = document.createElement('img');
    image.src ="img/" + foto;
    listTeamMembers.appendChild(image);
    return image;
}