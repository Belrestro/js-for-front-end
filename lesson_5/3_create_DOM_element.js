// DOM елемент можна розглядати як обгортку навого HTML елементів
// вона дозволяє міняти і спілкуватися з HTML розміткою дуже просто і зручно
// це буде називатися моделлю елемента, і це об'єкт 
// об'єкти зручні для того щоб керувати чимось
// вони мають приховувати в собі скаладність
// щоб можна було простіше і зрозуміліше писати код

const button = document.createElement('button'); 

// коли ми пишемо  document.createElement ми створюємо модель елемента, але вона ще не на нашій сторінці
// для того щоб елемент потрапив з javascript коду у вікно, потрібно його туди монтувати
// є багато способів як це зробити
// у нашому випадку потрібно просто використати метод appendChild
// він є у багатьох DOM об'єктів, і навіть у button
// але наразі користуйтесь document.body.appendChild бо document.body
// загально доступний


document.body.appendChild(button); // додаємо кнопу на сторінку
button.innerHTML = 'Click me'; // задаємо текст кнопки
button.onclick = () => button.innerHTML = 'You clicked me !' // міняємо текст кнопки
// кожну з цих написана окремо і стосується лише кнопки
// а що якщо ми підемо далі і можна буде ставитись до будь якого
// елементу як до кнопки, створити обгортку

const wrapClickable = (element) => { // ця функція приймає DOM елемент і повертає інший об'єкт
  // він дає змогу простіше робити деякі речі пов'язані з DOM операціями
  return {
    mount: () => document.body.appendChild(element),
    unmount: () => document.body.removeChild(element),
    setText: (text) => (element.innerHTML = text),
    onclick: (handler) => element.addEventListener('click', handler)
  };
}

const div = wrapClickable(document.createElement('div'));

div.setText('This is different element'); // міняємо текст
div.onclick(() => { // додаємо прослуховувач кліків
  div.setText('Wow click works !!!');
});
div.mount(); // додаємо елемент на сторінку

