'use strict';

BusMall.allImages = [];
// var allImagesRetrieved = localStorage.getItem('allImages');
// var allImages = JSON.parse(allImagesRetrieved);
// var allImagesStringify = JSON.stringify(BusMall.allImages);
// localStorage.setItem('allImages', allImagesStringify);
var figureEl = document.getElementById('pictureDisplay');
var nameArray = ['R2D2 Bag', 'Banana Slicer', 'Bathroom I-pad Holder', 'Open-Toed Rain Boots', 'All-in-One Breakfast Maker', 'Meatball Bubblegum', 'Dome Chair', 'Cthulu Doll', 'Duck-bill Dog', 'Freshly Slain Dragon Meat', 'Utensil Pens', 'Pet Sweep', 'Pizza Scissors', 'Shark Sleeping Bag', 'Baby Sweeper', 'Tauntaun Sleeping Bag', 'Packaged Unicorn Meat', 'Moving Tentacle USB', 'Self-filling Watering Can', 'Odd Wine Glass'];

function BusMall(name, filepath, title) {
  this.name = name;
  this.filepath = filepath;
  this.title = title;
  BusMall.allImages.push(this);
}

function render() {
  for(var i = 0; i < BusMall.allImages.length; i ++) {

    newElement('img', BusMall.allImages[i].filepath, figureEl);

  }
}

function newElement (elementType, content, parent) {
  var newEl = document.createElement(elementType);
  newEl.src = content;
  parent.appendChild(newEl);
}

new BusMall('bag', 'img/bag.jpg');
new BusMall('banana', 'img/banana.jpg');
new BusMall('bathroom', 'img/bathroom.jpg');
new BusMall('boots', 'img/boots.jpg');
new BusMall('breakfast', 'img/breakfast.jpg');
new BusMall('bubblegum', 'img/bubblegum.jpg');
new BusMall('chair', 'img/chair.jpg');
new BusMall('cthulhu', 'img/cthulhu.jpg');
new BusMall('dog-duck', 'img/dog-duck.jpg');
new BusMall('dragon', 'img/dragon.jpg');
new BusMall('pen', 'img/pen.jpg');
new BusMall('pet-sweep', 'img/pet-sweep.jpg');
new BusMall('scissors', 'img/scissors.jpg');
new BusMall('shark', 'img/shark.jpg');
new BusMall('sweep', 'img/sweep.png');
new BusMall('tauntaun', 'img/tauntaun.jpg');
new BusMall('unicorn', 'img/unicorn.jpg');
new BusMall('usb', 'img/usb.gif');
new BusMall('water-can', 'img/water-can.jpg');
new BusMall('wine-glass', 'img/wine-glass.jpg');

render();