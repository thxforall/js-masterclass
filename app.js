const mainTitleElement = document.getElementById('main-title');
const redBg = document.getElementsByClassName('red-bg')[0];

mainTitleElement.textContent = 'Some new Title';
mainTitleElement.style.color = 'white';
mainTitleElement.style.backgroundColor = 'black';

const listItemElement = document.querySelectorAll('li');
const li = document.getElementsByClassName('list-item');

for (const item of listItemElement) {
  console.log(item);
}
