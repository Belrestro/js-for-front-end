// раніше ми говорили про контекст в ООП
// але ми цього не говорили прямо
// контекст - це той об'єкт до якого відношення має викликана функція

// якщо просто - це this, і змінні які зараз в видимості

console.log('Загальний контекст:', this);

// до цього this означало - екземпляр, і це вірно і зараз
// функція також не запускається в "ізольованому вакуумі"
// будь яка функція запущена відноситься до якогось об'єкта - це і є КОНТЕКСТ

// якщо функція запущена "просто", то ви можете що "загальний" її контекст - це window
// window - це глобальний об'єкт

const hasPropertyInContext = function(key) { 
  return this[key] !== undefined;
}
a = 1; // буде в глобальному об'єкті

console.log('hasPropertyInContext in "general" context', hasPropertyInContext('a')); // перевірка саме у глобальному об'єкті

// контекст існує всюди є "загальний" контекст і внутрійшній контекст
// можна прив'язати конекст якщо просто з'єднати екземпляр і метод

// !
// !!
// !!! способи зміни контексту працюють тільки зі старими функціями
// !!
// !

const obj = { b: 1 };

obj.hasPropertyInContext = hasPropertyInContext;

console.log('hasPropertyInContext in "obj" context', obj.hasPropertyInContext('a'));
obj.a = 1;
console.log('hasPropertyInContext in "obj" context', obj.hasPropertyInContext('a'));

// це був спосіб де намір був зі сторони об'єкту

// у кожної функції є два методи 'call' і 'bind'

// їхна імітація буде приблизно така

// функція call
const call = function(func, ctx, arg1, arg2, arg3, arg4, arg5) {
  ctx.____call____ = func;
  

  const result = newOne.____call____(arg1, arg2, arg3, arg4, arg5); // є кращі способи передавати аргументи (але про це згодом)

  delete ctx.____call____;

  return result;
}

console.log('hasPropertyInContext with "call" 1:', call(hasPropertyInContext, { a: 1}, 'a'));
console.log('hasPropertyInContext with "call" 2:', call(hasPropertyInContext, { b: 1}, 'b'));
console.log('hasPropertyInContext with "call" 3:', call(hasPropertyInContext, { b: 1}, 'a'));

const bind = (func, ctx, arg1, arg2, arg3) => () => // робить все те ж саме
  call(func, ctx, arg1, arg2, arg3); // але не викликає одразу а повертає нову функцію (агрументи зафіксовані)

const binded1 = bind(hasPropertyInContext, { a: 1 }, 'a');
const binded2 = bind(hasPropertyInContext, { b: 1 }, 'b');
const binded3 = bind(hasPropertyInContext, { b: 1 }, 'a');

console.log('hasPropertyInContext with "bind 1:', binded1());
console.log('hasPropertyInContext with "bind 2:', binded2());
console.log('hasPropertyInContext with "bind 3:', binded3());

// ці обидві функції вбудовані в прототип конструктора

console.log('default "call":', hasPropertyInContext.call({ a: 1 }, 'a'));
console.log('default "bind":', hasPropertyInContext.bind({ a: 1 }, 'a')()); // викли функції ключовий
