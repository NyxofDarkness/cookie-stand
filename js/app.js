'use-strict';

var parentElement = document.getElementById('sales');

function headerRow() {
  var trElement = document.createElement('tr');
  var headerArrayHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
  for (var i = 0; i < headerArrayHours.length; i++) {
    var thElement = document.createElement('th');
    thElement.textContent = headerArrayHours[i];
    trElement.appendChild(thElement);
  }
  parentElement.appendChild(trElement);
}
var cookieLocations = [];


function namesColumn() {
  var trElement = document.createElement('tr');
  var nameArray = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima', 1];
  for (var i = 0; i < namesColumn.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = namesColumn[i];
    trElement.appendChild(tdElement);
  }
  parentElement.appendChild(trElement);
}
namesColumn();
headerRow();


function salesLocation(name, minimumHourlyCustomers, maximumHourlyCustomers, averageCookiePerCustomer, totalCookiesPerHour, totalCookiesPerDay) {
  this.name = name;
  this.min = minimumHourlyCustomers;
  this.max = maximumHourlyCustomers;
  this.average = averageCookiePerCustomer;
  this.cookiesHour = totalCookiesPerHour;
  this.cookiesDay = totalCookiesPerDay;

  cookieLocations.push(this);
};

salesLocation.prototype.speak = function () {
  console.log(`${this.name} is a sales location`)
}

var seattle = new salesLocation('seattle', 23, 65, 6.3, hourlyCookies, cookiesDay);
var Tokyo = new salesLocation('Tokyo', 3, 24, 1.2, hourlyCookies, cookiesDay);
var Dubai = new salesLocation('Dubai', 11, 38, 3.7, hourlyCookies, cookiesDay);
var Paris = new salesLocation('Paris', 20, 38, 2.3, hourlyCookies, cookiesDay);
var Lima = new salesLocation('Lima', 2, 16, 4.6, hourlyCookies, cookiesDay);




// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm',];

// var seattle = {
//   name: 'seattle',
//   minimumHourlyCustomers: 23,
//   maxHourlyCustomers: 65,
//   averageCookiePerCustomer: 6.3,
//   totalCookiePerDay: 0,
//   hourlyCookies: [],
//   customersEachHour: [],


//   },

//     render: function () {
//       var parentSection = document.getElementById('seattle');
//   var headingSeattle = document.createElement('h2');
//   headingSeattle.textContent = this.name;
//   parentSection.appendChild(headingSeattle);
//   var salesList = document.getElementById('seattle-sales');
//   for (var i = 0; i < this.hourlyCookies.length; i++) {
//     var listElement = document.createElement('li');
//     listElement.textContent = `${this.hourlyCookies[i]} cookies`;
//     salesList.appendChild(listElement);
//   }
// },
// }


seattle.generateHourlyCookies();
seattle.render();

// var tokyo = {
//   name: 'Tokyo',
//   minimumHourlyCustomers: 3,
//   maxHourlyCustomers: 24,
//   averageCookiePerCustomer: 1.2,
//   totalCookiePerDay: 0,
//   hourlyCookies: [],
//   customersEachHour: [],

//   generateCustomersHour: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var randomNumber = Math.ceil(Math.random() * (this.maxHourlyCustomers - this.minimumHourlyCustomers + 1) + this.minimumHourlyCustomers);

//       this.customersEachHour.push(randomNumber);
//     }
//   },

//   generateHourlyCookies: function () {
//     this.generateCustomersHour();
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.averageCookiePerCustomer);

//       this.totalCookiePerDay += hourlyCookies;

//       this.hourlyCookies.push(hourlyCookies);
//     }
//   },

//   render: function () {
//     var parentSection = document.getElementById('tokyo');
//     var headingTokyo = document.createElement('h2');
//     headingTokyo.textContent = this.name;
//     parentSection.appendChild(headingTokyo);
//     var salesList = document.getElementById('tokyo-sales');
//     for (var i = 0; i < this.hourlyCookies.length; i++) {
//       var listElement = document.createElement('li');
//       listElement.textContent = `${this.hourlyCookies[i]} cookies`;
//       salesList.appendChild(listElement);
//     }
//   },
// }

// tokyo.generateHourlyCookies();
// tokyo.render();

// var dubai = {
//   name: 'Dubai',
//   minimumHourlyCustomers: 11,
//   maxHourlyCustomers: 38,
//   averageCookiePerCustomer: 3.7,
//   totalCookiePerDay: 0,
//   hourlyCookies: [],
//   customersEachHour: [],

//   generateCustomersHour: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var randomNumber = Math.ceil(Math.random() * (this.maxHourlyCustomers - this.minimumHourlyCustomers + 1) + this.minimumHourlyCustomers);

//       this.customersEachHour.push(randomNumber);
//     }
//   },

//   generateHourlyCookies: function () {
//     this.generateCustomersHour();
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.averageCookiePerCustomer);

//       this.totalCookiePerDay += hourlyCookies;

//       this.hourlyCookies.push(hourlyCookies);
//     }
//   },

//   render: function () {
//     var parentSection = document.getElementById('dubai');
//     var headingDubai = document.createElement('h2');
//     headingDubai.textContent = this.name;
//     parentSection.appendChild(headingDubai);
//     var salesList = document.getElementById('dubai-sales');
//     for (var i = 0; i < this.hourlyCookies.length; i++) {
//       var listElement = document.createElement('li');
//       listElement.textContent = `${this.hourlyCookies[i]} cookies`;
//       salesList.appendChild(listElement);
//     }
//   },
// }

// dubai.generateHourlyCookies();
// dubai.render();

// var paris = {
//   name: 'Paris',
//   minimumHourlyCustomers: 20,
//   maxHourlyCustomers: 38,
//   averageCookiePerCustomer: 2.3,
//   totalCookiePerDay: 0,
//   hourlyCookies: [],
//   customersEachHour: [],

//   generateCustomersHour: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var randomNumber = Math.ceil(Math.random() * (this.maxHourlyCustomers - this.minimumHourlyCustomers + 1) + this.minimumHourlyCustomers);

//       this.customersEachHour.push(randomNumber);
//     }
//   },

//   generateHourlyCookies: function () {
//     this.generateCustomersHour();
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.averageCookiePerCustomer);

//       this.totalCookiePerDay += hourlyCookies;

//       this.hourlyCookies.push(hourlyCookies);
//     }
//   },

//   render: function () {
//     var parentSection = document.getElementById('paris');
//     var headingParis = document.createElement('h2');
//     headingParis.textContent = this.name;
//     parentSection.appendChild(headingParis);
//     var salesList = document.getElementById('paris-sales');
//     for (var i = 0; i < this.hourlyCookies.length; i++) {
//       var listElement = document.createElement('li');
//       listElement.textContent = `${this.hourlyCookies[i]} cookies`;
//       salesList.appendChild(listElement);
//     }
//   },
// }

// paris.generateHourlyCookies();
// paris.render();

// var lima = {
//   name: 'Lima',
//   minimumHourlyCustomers: 2,
//   maxHourlyCustomers: 16,
//   averageCookiePerCustomer: 4.6,
//   totalCookiePerDay: 0,
//   hourlyCookies: [],
//   customersEachHour: [],

//   generateCustomersHour: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var randomNumber = Math.ceil(Math.random() * (this.maxHourlyCustomers - this.minimumHourlyCustomers + 1) + this.minimumHourlyCustomers);

//       this.customersEachHour.push(randomNumber);
//     }
//   },

//   generateHourlyCookies: function () {
//     this.generateCustomersHour();
//     for (var i = 0; i < hours.length; i++) {
//       var hourlyCookies = Math.ceil(this.customersEachHour[i] * this.averageCookiePerCustomer);

//       this.totalCookiePerDay += hourlyCookies;

//       this.hourlyCookies.push(hourlyCookies);
//     }
//   },

//   render: function () {
//     var parentSection = document.getElementById('lima');
//     var headingLima = document.createElement('h2');
//     headingLima.textContent = this.name;
//     parentSection.appendChild(headingLima);
//     var salesList = document.getElementById('lima-sales');
//     for (var i = 0; i < this.hourlyCookies.length; i++) {
//       var listElement = document.createElement('li');
//       listElement.textContent = `${this.hourlyCookies[i]} cookies`;
//       salesList.appendChild(listElement);
//     }
//   },
// }

// lima.generateHourlyCookies();
// lima.render();
