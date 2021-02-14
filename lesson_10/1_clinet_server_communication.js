// весь код який ми писали більше про клієнта
// пора познайомитись з іншою стороною медалі
// сервером
// код який ми писали відноситься до інтеракції користувача з браузером
// якщо потрібно записати якісь дані і дістати їх на
// іншому комп'ютері, девайсі, браузері - то це буде неможливо без серверів

// давайте по черзі розберемо деякі складові для того щоб можна було почати клієнт сервер спілкування

// URL - Universal Resource Locator по простому ссилка, точніше - адреса серверу
// http://google.com:80 http - протокол, google.com - домен, 80 - стандартний порт
// метод - це просто вид запиту який ми робимо спараведливо для http
// 

const serverUrl = 'http://google.com';
const method = 'GET';

// це примітивна схема АПІ (API) application programming interface для серверних запитів

const request = (url, parameters) => {
  const callbacks = [];
  // ... магія запиту
  let result = 'Okeydokey';
  setTimeout(() => {
    let handler;
    while (handler = callbacks.shift()) {
      result = handler(result);
    }
  }, 1500);
  return {
    onFinished(func) {
      callbacks.push(func)
      return this;
    },
  }
}

request('http://google.com')
  .onFinished((response) => {
    console.log(response);
    return 123;
  })
  .onFinished((response) => console.log(response));


// ми робимо запит на сервер, за конкретним документом, він відповідає нам чимось
// вся суть цього зв'язку - це коммунікація
// запит - відповідь
// цей вид комунікації організовується з допомогою http протоколу