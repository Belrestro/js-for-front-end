// у DOM моделі багато що посилає події
// такі речі називают еммітерами (випромінювачами), типо випромінюють події
// щоб підписатися на події треба використовути методи addEventListener
// таким чином можна підписатися на події

const button = document.createElement('button');

document.body.appendChild(button);
button.innerHTML = 'Hey hey';

// щоб створити підписку на будь яку подію треба 3 речі
// 1 - використати метод addEventListener
// 2 - знати назву події на яку підписуєтесь наприклад (click, mouseover, mousedown, keydown)
// 3 - передати функцію яка буде виконуватись коли трапится подія

// наприклад:

const eventName = 'click';
const handler = (event) => { // коли функція буде викликана, в неї передадуть 1 аргумент
  // об'єкт event який дає змогу дізнатися про саму подію яка була спричинена
  // і керувати самою подією
  alert('Success');
};
button.addEventListener(eventName, handler);
