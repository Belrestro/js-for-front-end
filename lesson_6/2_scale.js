const createScale = (questionsNumber) => {
  const scaleWrapper = document.createElement('div');
  const scale = document.createElement('div');
  let answeredNumber = 0;
  
  scale.id = 'scale';
  scale.style.background = '#8af98a';
  scale.style.height = '15px';

  const calculateAnsweredQuestionsPercentage = () => {
    if (answeredNumber >= questionsNumber) return 100;
    if (answeredNumber <= 0) return 0;
    return answeredNumber / questionsNumber * 100;
  };

  const setScale = () => {
    const percentage = calculateAnsweredQuestionsPercentage();
    scale.style.width = percentage + '%';
  }

  scaleWrapper.style.border = '1px solid';
  scaleWrapper.style.borderRadius = '4px';
  scaleWrapper.updateAnsweredNumber = (amount) => {
    answeredNumber = amount;
    setScale();
  }

  scaleWrapper.appendChild(scale);
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