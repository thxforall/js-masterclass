// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = new Array(5, 3);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItem = document.querySelectorAll('li');
// console.log(listItem);

// const arrayListItems = Array.from(listItem);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', { moreDetail: [] }];

// const analyticsData = [
//   [1, 1.6],
//   [-5, 1, 3, 4],
// ];
// for (const data of analyticsData) {
//   for (const dataPoints of data) {
//     console.log(dataPoints);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Sprots', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Movie');
// const popwsValues = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'reading';
// console.log(hobbies);

// hobbies.splice(1, 0, 'Good Food', 'Coding');
// console.log(hobbies);

// const removeElement = hobbies.splice(-1, 1);
// console.log(hobbies);
// console.log(removeElement);

// const testResult = [1, 5.3, 1.5, 10.99, , 1.5, -5, 10];
// const storedResults = testResult.slice(0, 2);
// const storedResults = testResult.concat([1, 4, 5]);

// testResult.push(1);

// console.log(storedResults, testResult);
// console.log(testResult.indexOf(1.5));
// console.log(testResult.lastIndexOf(1.5));

// console.log(testResult.includes(10.99));
// console.log(testResult.indexOf(10.99) !== -1);

// const personData = [{ name: 'Max' }, { name: 'Kiyori' }];
// console.log(personData.indexOf({ name: 'Max' }));

// const kiyori = personData.find((person, index, persons) => {
//   return person.name === 'Kiyori';
// });

// kiyori.name = 'Baek';

// console.log(kiyori, personData);

// const maxIndex = personData.findIndex((person, index, persons) => {
//   return person.name === 'Max';
// });

// console.log(maxIndex);

// for (const price of prices) {
//   taxAdjustedprices.push(price * (1 + tax));
// }

const prices = [10.99, 9.99, 3.57, 6.55, 7.22];
const tax = 0.19;

const taxAdjustedprices = prices.map((price, index, prices) => {
  const priceObj = { index: index, taxAdjustedprices: price * (1 + tax) };
  return priceObj;
});

// console.log(taxAdjustedprices);

const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});

// console.log(sortedPrices.reverse);
console.log(sortedPrices);

const filteredArray = prices.filter((price) => price > 6);

console.log(filteredArray);

// let sum = 0;

// prices.forEach((price) => (sum += price));

// console.log(sum);

const sum = prices.reduce((preValue, curValue, curIndex, prices) => {
  return preValue + curValue;
}, 0);

console.log(sum);

const data = 'new york;10.99.2000;499';

const trasformData = data.split(';');

console.log(trasformData);

const nameFragments = ['Baek', 'Kiyori'];
const name = nameFragments.join(' ');
console.log(name);

const copiedNameFragments = [...nameFragments];
nameFragments.unshift('Mr');
console.log(nameFragments, copiedNameFragments);

const minPrice = Math.min(...prices);
console.log(minPrice);

const persons = [
  { name: 'Max', age: 30 },
  { name: 'Kiyori', age: 27 },
];

const copiedPersons = [
  persons.map((person) => ({ name: person.name, age: person.age })),
];

persons.push({ name: 'Anna', age: 30 });
persons[0].age = 21;

console.log(persons, copiedPersons);
