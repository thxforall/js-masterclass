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

const hobbies = ['Sprots', 'Cooking'];
hobbies.push('Reading');
hobbies.unshift('Movie');
const popwsValues = hobbies.pop();
hobbies.shift();
console.log(hobbies);

hobbies[1] = 'Coding';
// hobbies[5] = 'reading';
console.log(hobbies);

hobbies.splice(1, 0, 'Good Food', 'Coding');
console.log(hobbies);

const removeElement = hobbies.splice(-1, 1);
console.log(hobbies);
console.log(removeElement);
