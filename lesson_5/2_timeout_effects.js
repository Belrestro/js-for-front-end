let i = 0;

// const cycledTimeout = () => setTimeout(() => {
//   i++;
//   cycledTimeout();
//   alert('Ку ' + i);
// }, 1500);

// cycledTimeout();

while (i++ < 100) {
  if (i % 10) {
    setTimeout(() => {
      alert(1);
    }, 1000);
  }
}