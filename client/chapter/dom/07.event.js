/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

// 1. HTML 속성 : onclick="handler()"
// 2. DOM 프로퍼티 : element.onclick = handler
// 3. 메서드 : element.addEventListener(event, handler[, phase])


/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener

const first = getNode('.first');

//요즘은 defer 쓰고 아래거 잘 안씀.
// window.addEventListener('DOMContentLoaded',()=>{
//   const first = document.querySelector('.first');

//   console.log( first );
// });

//first.onclick = handler;//함수의 본문을 먼저 올리기 때문에(hoisting)함수가 밑에 있어도 먼저 실행이 가능함.

 function handler(){
   console.log('DOM 프로퍼티에서 이벤트를 실행합니다.');
 }

//first.onclick = handler; //onclick은 함수를 하나만 실행시킬 수 있어 좋지 않음.

 function handleClick(){
   console.log('이벤트 메서드를 호출합니다.');
 }

//first.addEventListener('click',handleClick);
// first.addEventListener('mouseover',handleClick);
// first.addEventListener('mousedown',handleClick);
// first.addEventListener('mouseup',handleClick);
// first.addEventListener('mousemove',handleClick);
// first.addEventListener('mouseout',handleClick);

//bindEvent('.first','click',handler);
// const remove = bindEvent('.first','click',handler);

// setTimeout(() => {
//   //first.removeEventListener('click',handleClick);
//   remove();
// }, 3000);

//이벤트 객체(event object)
//이벤트가 발생하면 브라우저는 이벤트 객체라는 것을 만듭니다.
//객체에 이벤트에 관한 상세한 정보를 넣고, 핸들러의 인수로 형태를 전달한다.




const ground = getNode('.ground');
const ball = getNode('#ball');

function handleClick(e){//(e) : 이벤트 객체
  let x = e.offsetX;
  let y = e.offsetY;
  //console.log(e.offsetX, e.offsetY);//클릭한 지점의 좌표 반환

  ball.style.transform = `translate(${x - (ball.offsetWidth / 2)}px,${y - (ball.offsetHeight / 2)}px)`;
}

//ground.addEventListener('click',handleClick);


function debounce(callback, limit = 100) {
  let timeout
  return function(...args) {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
          callback.apply(this, args)
      }, limit)
  }
}


function throttle(callback, limit = 100) {
  let waiting = false
  return function() {
      if(!waiting) {
          callback.apply(this, arguments)
          waiting = true
          setTimeout(() => {
              waiting = false
          }, limit)
      }
  }
}
console.log(ground);

ground.addEventListener('click',handleClick);


// throttle debounce

ground.addEventListener('mousemove',debounce((e)=>{
  let x = e.offsetX;
  let y = e.offsetY;

  let template = `
    <div class="emotion" style="top:${y}px;left:${x}px">😍</div>
  `

  insertLast(ground,template)
}));




