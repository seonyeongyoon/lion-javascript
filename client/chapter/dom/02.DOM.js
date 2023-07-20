/* --------------------------------- */
/* DOM traversal                     */
/* --------------------------------- */

/* 모든 노드에서 사용 */
// - parentNode
// - childNodes
// - firstChild
// - lastChild
// - previousSibling
// - nextSibling

/* 요소 노드에서만 사용 가능 */
// - parentElement
// - children
// - firstElementChild
// - lastElementChild
// - previousElementSibling
// - nextElementSibling

/* 문서 대상 찾기 */
// - getElementById
// const message = document.getElementById('message');
// console.log(message);

// - getElementsByTagName
// - getElementsByClassName
// - querySelector

//el, els


getNode('.first');
const first = getNode('.first');
const span = getNodes('span');

console.log(span);

// const first = document.querySelector('.first');
// const [firstSpan, secondSpan] = document.querySelectorAll('span');//구조화할당

// console.log(firstSpan);
// console.log(secondSpan);

// - querySelectorAll
// - closest
console.log(first.closest('h1'));//event delegation

/* 문서 대상 확인 */
// - matches
console.log(first.matches('#message'));
// - contains