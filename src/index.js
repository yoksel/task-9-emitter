import './styles.css';

import {Emitter} from './emitter';

const emitter = new Emitter();

const inputElem = document.querySelector('.input');
const changesBtn = document.querySelector('.button--listen-changes');
const changesBtnSubscribed = 'button--subscribed';
const outputElem = document.querySelector('.output');
const outputElemSubscribed = 'output--subscribed';
let isSubscribed = false;
const eventName = 'event:changes';

// ------------------------------
// Включить/выключить события

changesBtn.addEventListener('click', function () {
    if (isSubscribed) {
        // Отписываемся
        emitter.off(eventName, handler);

    } else {
        // Подписываемся
        emitter.on(eventName, handler);
    }

    outputElem.classList.toggle(outputElemSubscribed);
    this.classList.toggle(changesBtnSubscribed);

    isSubscribed = !isSubscribed;
});

// ------------------------------
// Рассылаем события при вводе текста

inputElem.addEventListener('input', function () {
    emitter.emit(eventName, this.value);
});

// ------------------------------
// Обработчик события

function handler(text) {
    outputElem.value = `${text}`;
}
