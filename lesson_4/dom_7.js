document; // це глобальний дом об'єкт
let i = 0;
const button = document.createElement('button'); // дозволяє створити dom елемент

button.innerHTML = 'Click me'; // це буде текст всередині кнопки

button.onclick = () => {
  i++
  button.innerHTML = 'You clicked me ' + i + ' times !';
} // ця функція буде виконуватись кожен раз коли ви натискаєте кнопку

