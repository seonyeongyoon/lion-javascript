/* -------------------- */
/* Do While Loop        */
/* -------------------- */


// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정

let first = document.querySelector('.first');
//let second = document.querySelector('.second');

//first = first.nextSibling.nextSibling.nextSibling.nextSibling; //text -> comment -> span = nodeType

// do {
//   first = first.nextSibling;
// } while (first.nodeType !== document.ELEMENT_NODE)


//반복문 멈추는 시점 => 무한루프

//console.log(first);


//이전 요소를 반환하는 prev 함수
function prev(node) {
  do {
    node = node.previousSibling;
  } while(node.nodeType !== 1)
  return node;
}


//다음 요소를 반환하는 next 함수
function next(node) {//재사용성을 위해 함수를 사용
  do {
    node = node.nextSibling;
  } while(node.nodeType !== 1)//ELEMENT_NODE는 숫자 1로도 표기할 수 있음.
  return node;
}

const second = next(first);

console.log(prev(second));


//const div = next(heading);
//console.log(div);

//로직 실행