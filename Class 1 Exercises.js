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
// so we have to use Math.ceil and we have to get highest 13
const card = Math.ceil(Math.random() * HIGHEST_CARD);

console.log("The random card is", card);


// 4. Draw 3 cards and use Math to determine the highest
// card

// const card1 = Math.ceil(Math.random() * HIGHEST_CARD);
// const card2 = Math.ceil(Math.random() * HIGHEST_CARD);
// const card3 = Math.ceil(Math.random() * HIGHEST_CARD);
// const highestCard = Math.max(card1, card2, card3);
// console.log(`The highest card from ${card1}, ${card2}, and ${card3} is ${highestCard}.`);

let cards = [];
const NUM_CARDS = 3;

for (i = 0; i < NUM_CARDS; i++) {
	cards[i] = Math.ceil(Math.random() * HIGHEST_CARD); // Variable in Q3
}

highestCardDrawn = Math.max(...cards);

console.log(`The highest card drawn from ${cards} is ${highestCardDrawn}`);


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

// Create variables
const firstName = 'firstName';
const lastName = 'lastName';
const streetAddress = 'streetAddress';
const city = 'city';
const state = 'state';
const zipCode = 'zipCode';

// Create formatted address block
let addressBlock = `${firstName} ${lastName}
${streetAddress}
${city}, ${state} ${zipCode}`; // \n for non literals

console.log(addressBlock);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

// Create formatted block from Q1
let string = `${firstName} ${lastName} 
${streetAddress} 
${city}, ${state}, ${zipCode}`;

// Identify space as delimiter
const searchSpace = ' ';

// Search index of first delimiter
const indexOfSpace = string.indexOf(searchSpace);

// Print firstName
console.log("First name in string is", string.substring(0, indexOfSpace));


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

const endDate = new Date(2020, 3, 1);
const startDate = new Date(2020, 0, 1); // January is 0

// Get difference between dates in seconds (endDate object converts to seconds without getTime())
const elapsedTime = (endDate.getTime() - startDate.getTime()) / 2;

// Get new date from elapsed time
const midDate = new Date(endDate.getTime() - elapsedTime);

console.log(`The midpoint between ${startDate} and ${endDate} is ${midDate}`);