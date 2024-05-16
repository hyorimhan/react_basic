// 3.
window.addEventListener('scroll', () => {
  if (scrollY > 100) {
    document.querySelector('div').textContent = `${scrollY}`;
  }
});

// 4.
let number = 0;
for (let i = 0; i < 10; i++) {
  number++;
}
console.log(number);

// 5.
let number2 = 0;
for (let i = 0; i < 20; i += 2) {
  if (i % 2 === 0) {
    number2++;
  }
  console.log(number2);
}

// 6.
setTimeout(() => {
  console.log(setTimeout);
}, 3000);
