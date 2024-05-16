// 문제2
document.querySelector('.btn').addEventListener('click', function () {
  document.querySelector('.title').innerHTML = '제목 아니다';
});

// 문제3
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(1, 2));

// 문제4
function isEvenOrOdd(num) {
  return num % 2 === 0 ? '짝수입니다' : '홀수입니다';
}
console.log(isEvenOrOdd(6));

// 문제5
const 이름 = '효림';
const 나이 = '24';
console.log(`이름: ${이름}`);
console.log(`나이: ${나이}`);
