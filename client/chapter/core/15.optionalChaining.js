/* ---------------------------------------------------------------------- */
/* Optional Chaining                                                      */
/* ---------------------------------------------------------------------- */


const portableFan = {
  maker: 'fromB',
  brand: 'FD221',
  type: 'neckband',
  photo: {
    static: 'https://bit.ly/3OS50UD',
    animate: 'https://bit.ly/3P8646q'
  },
  getFullName() {
    return `${this.brand}, ${this.maker}`;
  },
};

// 아래 코드는 문제가 있어 런타임 중 오류가 발생합니다.
// 없는 것의 하위에 접근할 때만 에러가 뜸
//console.log(portableFan.photos.animate);
console.log(portableFan.photo?.image);

// 오류를 발생시키지 않으려면 아래와 같이 작성해야 합니다.
// if ('photos' in portableFan) {
//   if ('animate' in portableFan.photos) {
//     console.log(portableFan.photos.animate);
//   }
// }


// 위 구문을 논리곱 연산자를 사용한 방식으로 변경해봅니다.


// 위 구문을 옵셔널 체이닝을 사용한 구문으로 변경해봅니다.


// 메서드 사용 시, 옵셔널 체이닝을 사용해봅니다.


// 객체의 프로퍼티 접근 시, 옵셔널 체이닝을 사용해봅니다.

console.log('첫 번째 실행');
//setTimeout : 시간 딜레이
setTimeout(() => {
  console.log('두 번째 실행');//3초 딜레이
}, 3000);

console.log('세 번째 실행');

//setInterval : 일정 시간마다 코드 반복
setInterval(() => {
  console.log('반복 실행');
}, 1000);



const button = document.querySelector('button');

console.log(button);

//DOM의 요소를 선택할 때, 없으면 말고 있으면 넣어줘~
button?.addEventListener('click', function(){
  this.style.backgroundColor = 'orange';
})


// const timer = setTimeout(()=>{

//   const button = /* html */`
//     <button type="button">clickMe</button>
//   `

//   document.body.insertAdjacentHTML('beforeend',button);

// },5000)


// clearTimeout(timer)



// let count = 0;
// setInterval(() => {
  
//   console.log(++count);
//   document.querySelector('.first').style.transform = `translateY(${count}px) rotate(${count}deg)`

//   //setInterval 멈추기
//   if(count > 50){
//     clearInterval(interval);
//   }
// }, 10);