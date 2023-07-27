/* global gsap */

import {
  getNode as $,
  changeColor,
  delayP,
  attr,
  insertLast,
  renderEmptyCard,
  renderSpinner,
  renderUserCard,
  sunny,
  clearContents,
} from "./lib/index.js";

//Promise
// xhr.get("https://jsonplaceholder.typicode.com/users", (res) => {
//   console.log(res);
// });

// const data = await sunny.get("https://jsonplaceholder.typicode.com/users");
// console.log(data);

// const URL = "https://jsonplaceholder.typicode.com/users/1";

// const response = await fetch(URL);
// const data = await response.json();

// console.log(data);

// fetch(URL).then((result)=>{

//     result // response object
//     return result.json()
// })
// .then((result)=>{
//   console.log( result );
// })

//1. sunny 함수를 사용하여 user data 가져오기.
//2. 함수 안으로 넣기
//3. userData 렌더링
//    - html template을 만든다.
//    - 유저의 data를 넘겨주기.
//    - insertLast를 사용해 유저 정보를 렌더링.
//4. 함수 분리

//에러가 발생했을 때
//empty svg를 생성하고 렌더링해주세요.

// [phase-3]
// json-server 구성
// data 설계
// get, delete 통신 localhost
// delete => 리랜더링(clear,render)

const userCardInner = $(".user-card-inner");

async function renderUserList() {
  renderSpinner(userCardInner);
  try {
    await delayP();

    gsap.to(".loadingSpinner", {
      opacity: 0,
      onComplete() {
        $(".loadingSpinner").remove();
      },
    });
    const response = await sunny.get("http://localhost:3000/users");
    const userData = response.data;

    userData.forEach((item) => renderUserCard(userCardInner, item));

    changeColor(".user-card");

    gsap.to(".user-card", {
      x: 0,
      opacity: 1,
      stagger: 0.1,
    });
  } catch (err) {
    console.log(err);
    renderEmptyCard(userCardInner);
    // location.href = '404.html'
  }
}

renderUserList();

// 버튼을 클릭 했을 때 해당 article의 id 값을 가져옴.

// - 이벤트 위임 e.target
// - button 선택하기 -> 클릭한 대상의 가장 가까운... method
// - attr() ,  dataset

function handleDelete(e) {
  const button = e.target.closest("button");
  const article = e.target.closest("article");

  if (!article || !button) return;

  const id = attr(article, "data-index").slice(5);

  sunny.delete(`http://localhost:3000/users/${id}`).then(() => {
    // 컨텐츠 항목 전체 지우기
    clearContents(userCardInner);
    renderUserList();
  });
}

userCardInner.addEventListener("click", handleDelete);
