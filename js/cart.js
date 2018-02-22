'use strict';

// var allImagesRetrieved = localStorage.getItem('allImages');
// var allImages = JSON.parse(allImagesRetrieved);
// var allImagesStringify = JSON.stringify(BusMall.allImages);
// localStorage.setItem('allImages', allImagesStringify);
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