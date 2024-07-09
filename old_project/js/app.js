import {init as initFront} from './front.js';

const init = function () {
    initFront();
};

document.addEventListener('DOMContentLoaded', () => {
    init();
});