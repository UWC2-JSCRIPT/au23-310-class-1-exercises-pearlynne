/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

const SMALL_PIZZA_DIAMETER = 13;
const LARGE_PIZZA_DIAMETER = 17;
const SMALL_PIZZA_PRICE = 16.99;
const LARGE_PIZZA_PRICE = 19.99;

const smallPizzaArea = Math.PI * ((SMALL_PIZZA_DIAMETER / 2) ** 2); // Math.pow is an alternative
const largePizzaArea = Math.PI * ((LARGE_PIZZA_DIAMETER / 2) ** 2);

console.log("The area of the small pizza is", smallPizzaArea);
console.log("The area of the large pizza is", largePizzaArea);

// 2. What is the cost per square inch of each pizza?

const smallPizzaCostPerSqInch = SMALL_PIZZA_PRICE / smallPizzaArea;
const largePizzaCostPerSqInch = LARGE_PIZZA_PRICE / largePizzaArea;

console.log("The cost per square inch of the small pizza is", smallPizzaCostPerSqInch);
console.log("The cost per square inch of the large pizza is", largePizzaCostPerSqInch);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

const LOWEST_CARD = 1;
const HIGHEST_CARD = 13;

// Math.random gives fraction and between 0 and 1. 
// so we have to use Math.ceil and we have to get highlest 13

const card = Math.ceil(Math.random() * HIGHEST_CARD);

console.log("The random card is", card);

// 4. Draw 3 cards and use Math to determine the highest
// card

const card1 = Math.ceil(Math.random() * HIGHEST_CARD);
const card2 = Math.ceil(Math.random() * HIGHEST_CARD);
const card3 = Math.ceil(Math.random() * HIGHEST_CARD);

const HighestCard = Math.max(card1, card2, card3);

console.log("The highest card is:", HighestCard);


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = 'Pearl';
const lastName = 'Chong'
const streetAddress = '123 4th Main St'
const city = 'Seattle'
const state = 'Washingtion'
const zipCode = '98100'

let addressBlock = `${firstName} ${lastName} \n${streetAddress} \n${city}, ${state}, ${zipCode}`

console.log(addressBlock)

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const endDate = new Date(2019, 3, 1);
