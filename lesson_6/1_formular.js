/*
  question: {
    question: string,
    answer: string,
    options: [string]
  }
*/

const askQuestion = (question, callback) => {
  const wrapper = document.createElement('div');
  const questionH3 = document.createElement('h3');
  const inputsContainer = document.createElement('div');

  questionH3.innerHTML = question.question;

  const valueTracker = (id, checked) => {
    const key = id.split('-')[1];
    const answer = question.options[key];

    question.actualAnswer = answer
    question.isCorrectAnswer = question.answer === answer;

    callback(question);
  }

  for (let key in question.options) {
    const checkbox = createCheckbox(question.options[key], 'id-' + key, valueTracker);

    inputsContainer.appendChild(checkbox);
  }

  wrapper.appendChild(questionH3);
  wrapper.appendChild(inputsContainer);

  return wrapper;
}

// const q = askQuestion({
//   question: 'is you here ?',
//   answer: 'yis',
//   options: [
//     'yis',
//     'no',
//     'da'
//   ]
// }, console.log);

// document.body.appendChild(q);