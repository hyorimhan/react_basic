// 1. 로컬 스토리지에 저장
const user = {
  이름: '병수',
  나이: 20,
  주소: '시골',
};
localStorage.setItem('user', JSON.stringify(user));

// 2. (콘솔에 출력)
const user2 = JSON.parse(localStorage.getItem('user'));
console.log(user2);

// 3. (나이 변경)
let user3 = { ...user, 나이: 30 };

localStorage.setItem('user', JSON.stringify(user3));

// 4. (로컬 스토리지 삭제)
let user4 = localStorage.removeItem('user');

if (user4 === undefined) {
  user4 = null;
  console.log(`user4 => null`);
}

// 5. 게시물 목록 조회해서 콘솔에 출력
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));
