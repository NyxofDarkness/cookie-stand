'use-strict';

// Uses a method of that object to generate a random number of customers per hour. Objects/Math/random

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var randomNumber = math.floor(math.random() * (max - min) + min);
  console.log(`Random Number: ${randomNumber}`);
  return randomNumber;
}

//  Stores the min/max hourly customers, and the average cookies per customer, in object properties


var seattleHourlyCustomers = {
  hoursOpen: 14,
  minimumHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  averageCookiePerCustomer: 6.3,
  hourlyCookies: [],
  generateHourlyCookies: function () {
    for (var i = 0; i < this.hours; i++) {
      var hourlyCookies = math.round(getRandomNumber(this.minimumHourlyCustomers, this.maxHourlyCustomers) * this.averageCookiePerCustomer);
      this.hourlyCookies.push(generateHourlyCookies);
    }
    return this.generateHourlyCookies;
  },
}
var storeSpecific = seattleHourlyCustomers.generateHourlyCookies();
console.log(storeSpecific);


// Calculate and store the simulated amounts of cookies purchased for each hour at each location using average cookies purchased and the random number of customers generated



// Store the results for each location in a separate array… perhaps as a property of the object representing that location
// Display the values of each array as unordered lists in the browser



// Calculating the sum of these hourly totals; your output for each location should look like this:

// Seattle

// 6am: 16 cookies
// 7am: 20 cookies
// 8am: 35 cookies
// 9am: 48 cookies
// 10am: 56 cookies
// 11am: 77 cookies
// 12pm: 93 cookies
// 1pm: 144 cookies
// 2pm: 119 cookies
// 3pm: 84 cookies
// 4pm: 61 cookies
// 5pm: 23 cookies
// 6pm: 42 cookies
// 7pm: 57 cookies
// Total: 875 cookies