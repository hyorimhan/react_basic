// 1. 클릭된 div 태그에 clicked 클래스 추가
document.querySelector('#container').addEventListener('click', (event) => {
  if (event.target.classList.contains('box')) {
    event.target.classList.add('clicked');
  }
});

// 2. 함수 완성
// number의 제곱을 계산하여 반환하는 함수를 작성하세요.
function getSquare(number) {
  return number * number;
}

const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)
