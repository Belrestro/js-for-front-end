// давайте створимо вкладену структуру

const div1 = document.createElement('div'); // контейнер
const div2 = document.createElement('div'); // контейнер
const div3 = document.createElement('div'); // контейнер
const div4 = document.createElement('div'); // контейнер
const p = document.createElement('p'); // текст

p.innerHTML = 'Неймовірно';

// поскладаємо їх усередину

div4.appendChild(p); // div4 <- p
div3.appendChild(div4); // div4 <- div3
div2.appendChild(div3); // div3 <- div2
div1.appendChild(div2); // div2 <- div1

document.body.appendChild(div1); // document.body <- div1

// це аналог HTML розмітки
/*
<div>
  <div>
    <div>
      <div>
        <p>Неймовірно</p>
      </div>
    </div>
  </div>
</div>
*/

// таке знущання потрібно щоб показати одну цікаву властивість подій
// вони спливають
// від найбільш конкретного, до найменш

div1.addEventListener('click', () => alert('div1 clicked'));
div2.addEventListener('click', () => alert('div2 clicked'));
div3.addEventListener('click', () => alert('div3 clicked'));
div4.addEventListener('click', () => alert('div4 clicked'));

p.addEventListener('click', (event) => {
  // event.stopPropagation();
  alert('p clicked');
});

// кожен з прослуховувачів буде викликаний, бо вони знаходятся одне в одному
// клацаючи на дитину ви клацаєте і на його батьків

// щоб запобігти таким еффектам потрібно використати метод stopPropagation()
// у події яка прийде вам у прослуховувач, там де буде використаний цей метод
// подія вже далі не піде

