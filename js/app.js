'use-strict';

var parentElement = document.getElementById('sales');
var cookieLocations = [];
var headerArrayHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


function SalesLocation(name, minimumHourlyCustomers, maximumHourlyCustomers, averageCookiePerCustomer) {
  this.name = name;
  this.min = minimumHourlyCustomers;
  this.max = maximumHourlyCustomers;
  this.average = averageCookiePerCustomer;
  this.totalCookiesPerHour = [];
  this.customersEachHour = [];
  this.totalCookiesPerDay = 0;

  cookieLocations.push(this);
};

SalesLocation.prototype.generateHourlyCookies = function () {
  for (var i = 0; i < headerArrayHours.length; i++) {
    var customersForTheHour = generateRandomNumber(this.min, this.max);
    this.customersEachHour.push(customersForTheHour);
  }
  for (var i = 0; i < this.customersEachHour.length; i++) {
    var cookiesForTheHour = Math.ceil(this.customersEachHour[i] * this.average);
    this.totalCookiesPerHour.push(cookiesForTheHour);

    this.totalCookiesPerDay += cookiesForTheHour;
  }
}

SalesLocation.prototype.render = function () {
  var tableRowElement = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableHeader.textContent = this.name;
  tableRowElement.appendChild(tableHeader);
  for (var i = 0; i < this.totalCookiesPerHour.length; i++) {
    var totalCookiesData = document.createElement('td');
    totalCookiesData.textContent = this.totalCookiesPerHour[i];

    tableRowElement.appendChild(totalCookiesData);
  }

  parentElement.appendChild(tableRowElement);
}

new SalesLocation('seattle', 23, 65, 6.3);
new SalesLocation('Tokyo', 3, 24, 1.2);
new SalesLocation('Dubai', 11, 38, 3.7);
new SalesLocation('Paris', 20, 38, 2.3);
new SalesLocation('Lima', 2, 16, 4.6);

var storeForm = document.getElementById('form');
var newStoreLocationArray = [];

function storeLocationsForm(newStore, min, max, average) {
  this.newStore = newStore;
  this.min = min;
  this.max = max;
  this.average = average;

  newStoreLocationArray.push(this);
}

function handleSubmit(Event) {
  Event.preventDefault();

  console.log('this is my event.target.newStore.value', Event.target.newStore.value);
  var newStore = Event.target.newStore.value;
  var min = Event.target.min.value;
  var max = Event.target.max.value;
  var average = Event.target.average.value;

  new SalesLocation(newStore, min, max, average);
}

// storeLocationsForm.addEventlistener('submit', handleSubmit);

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function headerRow() {

  var trElement = document.createElement('tr');
  for (var i = -1; i < headerArrayHours.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = headerArrayHours[i];
    trElement.appendChild(thElement);
  }
  parentElement.appendChild(trElement);
}

function footerRow() {
  var totalOfAll = 0;
  var hourlyTotals = [];

  var trElement = document.createElement('tr');

  for (var i = 0; i < headerArrayHours.length; i++) {

    var hourlyCookieSales = 0;

    for (var j = 0; j < cookieLocations.length; j++) {

      hourlyCookieSales += cookieLocations[j].totalCookiesPerHour[i];

      totalOfAll += cookieLocations[j].totalCookiesPerHour[i];
    }

    hourlyTotals.push(hourlyCookieSales);

  }
  for (var k = -1; k < hourlyTotals.length; k++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = hourlyTotals[k];
    trElement.appendChild(tdElement);
  }
  parentElement.appendChild(trElement);
}

headerRow();
for (var i = 0; i < cookieLocations.length; i++) {
  cookieLocations[i].generateHourlyCookies();
  cookieLocations[i].render();
}
footerRow();
