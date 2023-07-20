/* -------------------------- */
/* DOM Manipulation           */
/* -------------------------- */


/* 노드 생성 메서드 --------------------------------------------------------- */

// - document.createElement(tagName) – 태그 이름을 사용해 새로운 요소 생성
// - document.createTextNode(value) – 새로운 텍스트 노드 생성
// - element.cloneNode(deep) – 요소 복제. deep==true일 경우 모든 자손 요소도 복제

let div = document.createElement('div');
div.className = 'box';
div.textContent = '상자';

/* 노드 삽입, 삭제 메서드 ---------------------------------------------------- */

getNode('h1').append(div);
// - node.append(노드나 문자열) – node 끝에 노드를 삽입
// - node.prepend(노드나 문자열) – node 맨 앞에 노드를 삽입
// - node.before(노드나 문자열) – node 이전에 노드를 삽입
// - node.after(노드나 문자열) – node 다음에 노드를 삽입
// - node.replaceWith(노드나 문자열) – node를 대체
// - node.remove() – node를 제거


/* '오래된' 메서드 ----------------------------------------------------------- */

// - parent.appendChild(node)
// - parent.insertBefore(node, nextSibling)
// - parent.removeChild(node)
// - parent.replaceChild(newElement, node)


/* 특정 위치에 삽입 --------------------------------------------------------- */

// - insertAdjacentHTML
// - insertAdjacentElement
// - insertAdjacentText

// - "beforebegin" – elem 바로 앞에 html을 삽입
// - "afterbegin" – elem의 첫 번째 자식 요소 바로 앞에 html을 삽입
// - "beforeend" – elem의 마지막 자식 요소 바로 다음에 html을 삽입
// - "afterend" – elem 바로 다음에 html을 삽입

const body = document.body;
const h1 = getNode('h1');
const template = /* html */
`<div class="box">${10 + 30}</div>`

h1.insertAdjacentHTML('beforebegin',template);
body.insertAdjacentHTML('beforeend','<div class="box">상자</div>');

const data = ['빨래하기','게임하기','유튜브 보기','산책하기'];

//filter => 배열을 반환
//map => 배열을 반환

//for문
const todo = getNode('.todo');

// 1. 태그 생성
`<li>${data[0]}</li>`
// 2. 태그 안에 아이템값 넣기

// 3. 생성된 태그를 배열로 내보내기
const todoList = data.map((item) => {
  return `<li>${item}</li>`
})
console.log(todoList);

// 4. 내보낸 배열 순환하기
// 5. 반복문에서 렌더링하기
//document.body.insertAdjacentHTML('beforeend',todoList);
todoList.forEach((item) => {
  //todo.insertAdjacentHTML('beforeend',item);
  //console.log(item);
  insertLast(todo,item);
})



insertLast('.todo','<li>문자</li>');
