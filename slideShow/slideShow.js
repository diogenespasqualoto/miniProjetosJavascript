'use strict';

const images = [
    { 'id': '1', 'url': './img/skull_nuke.jpg' },
    { 'id': '2', 'url': './img/Landscape.jpg' },
    { 'id': '3', 'url': './img/jdm2.jpg' },
    { 'id': '4', 'url': './img/devil.png' },
    { 'id': '5', 'url': './img/catbones.jpg' },
]

const containerItems = document.querySelector('#container-items');

const loadImages = (images, container) => {
    images.forEach(image => {
        container.innerHTML += `
            <div class='item'>
                <img src='${image.url}'
            </div>
        `
    })
}

loadImages(images, containerItems);

let items = document.querySelectorAll('.item');

const previous = () => {
    containerItems.appendChild(items[0]);
    items = document.querySelectorAll('.item');
}

const next = () => {
    const lastItem = items[items.length - 1];
    containerItems.insertBefore(lastItem, items[0]);
    items = document.querySelectorAll('.item');
}

document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);