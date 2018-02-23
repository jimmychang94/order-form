'use strict';

var allImages = [];
var tableEl = document.getElementById('cartDisplay');
var theCart = document.getElementsByTagName('form');

function retrieveStorage () {
  var allImagesRetrieved = localStorage.getItem('toTheCart');
  allImages = JSON.parse(allImagesRetrieved);
}

function render() {
  var trEl = document.createElement('tr');
  for(var i = 0; i < allImages.length; i ++) {
    var tdEl = document.createElement('td');
    var formEl = document.createElement('form');
    newElement('img', formEl, '', allImages[i].filepath);
    newElement('figcaption', formEl, allImages[i].title);
    newElement('button', formEl, 'Delete', '', 'submit');
    formEl.createAttribute = 'id';
    formEl.setAttribute('id', 'form'+i);
    allImages[i].id = formEl.id;
    tdEl.appendChild(formEl);
    trEl.appendChild(tdEl);
    if ((i+1) % 5 === 0) {
      tableEl.appendChild(trEl);
      trEl = document.createElement('tr');
    } else if (i - allImages.length + 5 > 0) {
      tableEl.appendChild(trEl);
    }
  }
}

function newElement (elementType, parent, content, filePathIfNeeded, typeIfNeeded) {
  var newEl = document.createElement(elementType);
  newEl.textContent = content;
  newEl.src = filePathIfNeeded;
  newEl.type = typeIfNeeded;
  parent.appendChild(newEl);
}

function handleEvent() {

  event.preventDefault();

  console.log(event.target.id);
  // var formA = document.getElementById(event.target.id);
  event.target.style.display = 'none';

  for (var i = 0; i < allImages.length; i ++) {
    if (allImages[i].id === event.target.id) {
      allImages.splice(i, 1);
      var allImagesStringify = JSON.stringify(allImages);
      localStorage.setItem('toTheCart', allImagesStringify);
    }
  }

}

function eventListener() {
  for(var i = 0; i < theCart.length; i ++) {
    theCart[i].addEventListener('submit', handleEvent);
  }
}
retrieveStorage();
render();
eventListener();