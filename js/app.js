'use strict';

var hours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM'
];

//variables to be used later to make sales table thing
var newRow;
Store.stores = [];

var addNewStore = document.getElementById('addNewStore');

//fill an array with 0s to be equal in length to array of times-so this is what it does! Is it like place holders? and as the function runs the zeros are replaced?
var hourlyTotals = [];
for (var i = 0; i < hours.length; i++) {
  hourlyTotals[i] = 0;
}

function Store(name, min, max, avg,) {
  this.name = name;
  this.customerMin = min;
  this.customerMax = max;
  this.avgCookies = avg;
  this.hourlySales = [];
  Store.stores.push(this);
}


Store.prototype.customers = function () {
  return (
    Math.floor(Math.random() * (this.customerMax - this.customerMin + 1)) +
    this.customerMin
  );
};


Store.prototype.cookies = function () {
  for (var i = 0; i < hours.length; i++) {
    this.hourlySales[i] = Math.floor(this.customers() * this.avgCookies);
  }
};

Store.prototype.render = function () {
  if (this.hourlySales.length === 0) {
    this.cookies();
    var body = document.querySelector('tbody');
    newRow = addElement('tr', '', body);
    addElement('th', this.name, newRow);
    var storeTotal = 0;
    for (var i = 0; i < this.hourlySales.length; i++) {
      storeTotal += this.hourlySales[i];
      addElement('td', this.hourlySales[i], newRow);
    }
    addElement('td', storeTotal, newRow);
    // console.log(newRow)
  }
};


new Store('seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 3.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);


function addElement(element, content, parent) {
  var newEl = document.createElement(element);
  var newContent = document.createTextNode(content);
  newEl.appendChild(newContent);
  parent.appendChild(newEl);
  return newEl;
}

function createHeader() {
  var head = document.querySelector('thead');
  newRow = addElement('tr', '', head);
  addElement('th', '', newRow);

  for (var i = 0; i < hours.length; i++) {
    addElement('th', hours[i], newRow);
  }

  addElement('th', 'Total', newRow);
}

function renderBody() {
  for (var i = 0; i < Store.stores.length; i++) {
    Store.stores[i].render();
  }
}

function createFooter() {
  var foot = document.querySelector('tfoot');
  foot.innerHTML = '';
  newRow = addElement('tr', ' ', foot);
  addElement('th', 'Totals', newRow);
  for (var i = 0; i < hours.length; i++) {
    var hourTotal = 0;
    for (var j = 0; j < Store.stores.length; j++) {
      hourTotal += Store.stores[j].hourlySales[i];
    }
    addElement('td', hourTotal, newRow);
  }
}


function addStore(newStore) {
  newStore.preventDefault();
  var minCust = parseInt(newStore.target.minCust.value);
  var maxCust = parseInt(newStore.target.maxCust.value);
  var avgCookies = parseFloat(newStore.target.avgCookies.value);
  var storeName = newStore.target.storeName.value;

  new Store(storeName, minCust, maxCust, avgCookies,);

  renderBody();
  createFooter();
}

addNewStore.addEventListener('submit', addStore);

createHeader();
renderBody();
createFooter();