'use strict';

BusMall.allImages = [];
// var allImagesRetrieved = localStorage.getItem('allImages');
// var allImages = JSON.parse(allImagesRetrieved);
// var allImagesStringify = JSON.stringify(BusMall.allImages);
// localStorage.setItem('allImages', allImagesStringify);
var tableEl = document.getElementById('pictureDisplay');
var selectEl = document.getElementById('selectDisplay');
BusMall.nameArray = ['R2D2 Bag', 'Banana Slicer', 'Bathroom I-pad Holder', 'Open-Toed Rain Boots', 'All-in-One Breakfast Maker', 'Meatball Bubblegum', 'Dome Chair', 'Cthulu Doll', 'Duck-bill Dog', 'Freshly Slain Dragon Meat', 'Utensil Pens', 'Pet Sweep', 'Pizza Scissors', 'Shark Sleeping Bag', 'Baby Sweeper', 'Tauntaun Sleeping Bag', 'Packaged Unicorn Meat', 'Moving Tentacle USB', 'Self-filling Watering Can', 'Odd Wine Glass'];
var storageArray = [];

function BusMall(name, filepath) {
  this.name = name;
  this.filepath = filepath;
  this.title = '';
  BusMall.allImages.push(this);
}

function setTitle () {
  for(var i = 0; i < BusMall.allImages.length; i ++) {
    var title = BusMall.nameArray[i];
    BusMall.allImages[i].title = title;
  }
}

function render() {
  var trEl = document.createElement('tr');
  for(var i = 0; i < BusMall.allImages.length; i ++) {
    var tdEl = document.createElement('td');
    newElement('img', tdEl, '', BusMall.allImages[i].filepath);
    newElement('figcaption', tdEl, BusMall.nameArray[i]);
    trEl.appendChild(tdEl);
    if ((i+1) % 5 === 0) {
      tableEl.appendChild(trEl);
      trEl = document.createElement('tr');
    }
    newElement('option', selectEl, BusMall.nameArray[i]);
  }
}

function newElement (elementType, parent, content, filePathIfNeeded) {
  var newEl = document.createElement(elementType);
  newEl.textContent = content;
  newEl.src = filePathIfNeeded;
  parent.appendChild(newEl);
}

function handleEvent(event) {
  for (var i = 0; i < BusMall.allImages.length; i ++) {
    if (BusMall.allImages[i].title === event.target.value) {
      if (localStorage.length === 0) {
        storageArray.push(BusMall.allImages[i]);
        var imageStringify = JSON.stringify(BusMall.allImages[i]);
        localStorage.setItem('toTheCart', imageStringify);
      } else if (storageArray.length === 0) {
        var imageRetrieved = localStorage.getItem('toTheCart');
        storageArray = (JSON.parse(imageRetrieved));
        storageArray.push(BusMall.allImages[i]);
        imageStringify = JSON.stringify(storageArray);
        localStorage.setItem('toTheCart', imageStringify);
      } else {
        storageArray.push(BusMall.allImages[i]);
        imageStringify = JSON.stringify(storageArray);
        localStorage.setItem('toTheCart', imageStringify);
      }
    }
  }
}

function populateImages() {
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
}

populateImages();
setTitle();
render();

selectEl.addEventListener('change', handleEvent);