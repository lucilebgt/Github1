import {addCardToDom} from './front.js';

export const insertCardsFromObject = function (data) {

  data.items.forEach((repo) => {
    if(repo.description != null && repo.description.length > 65){
      repo.description = repo.description.substring(0, 65) + '...';
    }

    addCardToDom(repo.name, repo.owner.avatar_url, repo.owner.login, repo.html_url, repo.description);
  });
};