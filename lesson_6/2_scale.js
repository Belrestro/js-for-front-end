const createScale = (questionsNumber) => {
  const scaleWrapper = document.createElement('div');
  let answeredNumber = 0;
  let scale;
  
  const calculateAnsweredQuestionsPercentage = () => {
    if (answeredNumber >= questionsNumber) return 100;
    if (answeredNumber <= 0) return 0;
    return answeredNumber / questionsNumber * 100;
  };

  const setScale = () => {
    if (scale) scaleWrapper.removeChild(scale);
    scale = document.createElement('div');
    const percentage = calculateAnsweredQuestionsPercentage();

    scale.style.background = 'green';
    scale.style.height = '15px';
    scale.style.width = percentage + '%';

    scaleWrapper.appendChild(scale);
  }

  scaleWrapper.style.border = '1px solid';
  scaleWrapper.updateAnsweredNumber = (amount) => {
    answeredNumber = amount;
    setScale();
  }

  return scaleWrapper;
};

// const scale = createScale(10);

// document.body.appendChild(scale);

// setTimeout(() => scale.updateAnsweredNumber(1), 1000);
// setTimeout(() => scale.updateAnsweredNumber(3), 2000);
// setTimeout(() => scale.updateAnsweredNumber(5), 3000);
// setTimeout(() => scale.updateAnsweredNumber(6), 4000);
// setTimeout(() => scale.updateAnsweredNumber(5), 5000);
// setTimeout(() => scale.updateAnsweredNumber(9), 6000);