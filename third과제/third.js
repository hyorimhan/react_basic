// 1
console.log('1번 콘솔');

const 사람들 = [
  { 이름: '철수', 성별: '남', 나이: 19 },
  { 이름: '짱구', 성별: '남', 나이: 20 },
  { 이름: '유리', 성별: '여', 나이: 21 },
];

console.log(사람들);

// 2.
const peopleContainer = document.querySelector('.container');

사람들.forEach((사람) => {
  let html템플릿 = `<div class="container">
  <h3 class="name">이름: ${사람.이름}</h3>
  <h3 class="gender">성별: ${사람.성별}</h3>
  <h3 class="age">나이: ${사람.나이}</h3>
</div>`;
  peopleContainer.insertAdjacentHTML('beforeend', html템플릿);
});

// 3.
console.log('3번 콘솔');

const 여자 = 사람들.find((사람) => {
  return 사람.성별 === '여';
});
console.log(여자);

// 4.
console.log('4번 콘솔');

const 남자 = 사람들.filter((사람) => {
  return 사람.성별 === '남';
});
console.log(남자);
// 5.
console.log('5번 콘솔');

const 나이먹음 = 사람들.map((사람) => {
  return { ...사람, 나이: 사람.나이 + 10 };
});
console.log(나이먹음);

// 6;
console.log('6번 콘솔');

const 나이정렬복사 = 사람들.map((사람) => ({ ...사람 }));

const 나이정렬 = 나이정렬복사.sort((a, b) => {
  return a.나이 - b.나이;
});
console.log(사람들); //기존
console.log(나이정렬);

// 7
const user = {
  이름: '병수',
  나이: 20,
  주소: '시골',
};

const { 이름, 나이, 주소 } = user;
console.log(이름);
console.log(나이);
console.log(주소);
