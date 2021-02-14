// в javascript є спеціальна функція яка конкретно
// займається запитами 
// під собою вона ховає XMLHttpRequest набагато складніший
// але більш гнучкий інструмент

console.log(fetch); // fetch АPI

// як я казав нам треба щонайменше 2 речі
// але для прикладу згодиться і одна, бо стандартний
// метод - це 'GET'
// порт - це 80
// отже залишається лише URL

const url = 'https://jsonplaceholder.typicode.com'; // спеціальний тестовий апі
const method = 'GET';

const posts = 'posts';
const photos = 'photos';

const getPosts = () => {
  return fetch([url, posts].join('/'))
    .then(res => res.json())
};

const getPhotos = () => {
  return fetch([url, photos].join('/'))
    .then(res => res.json())
}

getPhotos().then((array) => {
  for (const post of array.slice(0, 15)) {
    const div = document.createElement('div');
    const title = document.createElement('h3');
    // const text = document.createElement('p');
    const image = document.createElement('img');
    title.innerText = post.title;
    // text.innerText = post.body;
    image.src = post.thumbnailUrl;

    div.appendChild(title);
    // div.appendChild(text);
    div.appendChild(image);
    document.body.appendChild(div);
  }
})

