let i = 0;

const cycledTimeout = () => setTimeout(() => {
  i++;
  cycledTimeout();
  alert('Ку ' + i);
}, 1500);

cycledTimeout();