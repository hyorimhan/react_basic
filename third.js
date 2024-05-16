const counter = document.querySelector('#counter');

let timer = Number(counter.textContent);

const intervalid = setInterval(() => {
  if (timer < 5) {
    timer += 1;
    counter.textContent = timer;
  } else {
    console.log('종료');
    clearInterval(intervalid);
  }
}, 1000);
