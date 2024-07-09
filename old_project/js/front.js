import {insertCardsFromObject} from './populate.js';
import data from './data.js';

export const init = () => {
    document.getElementById('repos').textContent = '';
    insertCardsFromObject(data);
};

export const addCardToDom = (data_name, data_avatar, data_owner, data_url, data_descr) => {
    // Récupération du conteneur des cartes
    const cardsContainer = document.getElementById('repos');

    // Création d'une nouvelle carte
    const card = document.createElement('a');
    card.href = data_url;
    card.target = '_blank';
    card.classList.add('repo');

    // Création de l'image
    const cardOwnerAvatar = document.createElement('img');
    // Définition des attributs src et alt
    cardOwnerAvatar.src = data_avatar;
    cardOwnerAvatar.alt = 'avatar';

    // Ajout de l'image à la carte
    card.append(cardOwnerAvatar);

    // Création de la div contenant les infos
    const infos = document.createElement('div');
    infos.classList.add('repo-info');

    // Création du nom du repo
    const nameRepo = document.createElement('h2');
    nameRepo.textContent = data_name;

    // Création du nom du propriétaire
    const ownerRepo = document.createElement('h3');
    ownerRepo.textContent = data_owner;

    // Création de la description
    const repoDescr = document.createElement('p');
    repoDescr.textContent = data_descr;

    // Ajout des infos à la carte
    infos.append(nameRepo);
    infos.append(ownerRepo);
    infos.append(repoDescr);
    card.append(infos);

    // Ajout de la carte au conteneur
    cardsContainer.append(card);
}