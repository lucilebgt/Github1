import './css/reset.css';
import './css/style.css';
import App from './components/app/index.js';
import { createRoot } from 'react-dom/client';

// container est l'élément qui va contenir l'ensemble de l'app, il récupère une div avec un id donné
const container = document.getElementById("app");

// root est l'élément racine créé à partir de la cible du rendu dans le DOM
const root = createRoot(container);


// On appelle render sur le container et lui donne en paramètre le composant dont on veut faire le rendu
root.render(<App />);
