/* --------------- */
/* While Loop      */
/* --------------- */

let repeat = 0;
while(repeat < 10) {
  console.log(repeat);
  repeat++;// 이거 없으면 무한루프에 빠지게 됨
}

const frontEndDev = [
  'HTML',
  'CSS',
  'SVG',
  'JavaScript',
  'jQuery',
  'React',
  'Redux',
];

/* 프론트엔드 개발 집합 항목 출력 ---------------------------------------------- */

// console.log(frontEndDev[0]);
// console.log(frontEndDev[1]);
// console.log(frontEndDev[2]);
// console.log(frontEndDev[3]);
// console.log(frontEndDev[4]);
// console.log(frontEndDev[5]);
// console.log(frontEndDev[6]);


/* 프론트엔드 개발 집합을 순환해서 각 아이템을 Console 패널에 출력 -------------------- */

// while 문 (순환 : 순방향)

let z1 = performance.now();

let i = 0;
while (i < frontEndDev.length) {
  let value = frontEndDev[i];
  console.log(value);
  i++;
}

let z2 = performance.now();

console.log(z2 - z1);//첫번째 시간에서 두번째 시간까지 로직이 도는 시간 편차를 계산해줌.

// while 문 (역순환 : 역방향) : 성능을 고려하면 역방향을 쓰는게 좋긴 함.
let l = frontEndDev.length - 1;
while (l >= 0) {
  let value = frontEndDev[l];//frontEndDev의 갯수는 7인데 7번째 index는 없으므로 undefined 떠서 오류남.
  console.log(value);
  l--;
}

//그냥 pop()하면 원본 파괴
//배열의 깊은 복사

//배열을 통째로 복사
//let copyArray = frontEndDev.slice();//옛날방식
let copyArray = [...frontEndDev];//요즘방식 (spread syntax)

while(copyArray.length) {
  //console.log(copyArray.pop());//뒤에서 부터 값 제거
  console.log(copyArray.shift());//앞에서 부터 값 제거
}

// 성능 진단 : 순환 vs. 역순환
//성능을 고려하면 역순환이 더 좋음

/* -------------------- */
/* Do While Loop : 값이 참이던 거짓이던 무조건 한번은 실행시켜줌       */
/* -------------------- */

let n = 0;

do {
  
  if(i === 0) {
    console.log('최초실행');
  } else {
    console.log(`${n}번째 실행`);
  }
  
  i++;
} while(i < 10);


// do ~ while 문 (역순환)
// - prompt 창을 띄워 사용자로 하여금 순환 횟수를 요청
// - 사용자로부터 요청된 횟수 만큼 역방향으로 순환 출력
// - 사용자로부터 요청된 횟수가 0보다 작을 경우, 
//   '최초 실행된 메시지입니다. 이 메시지는 조건이 거짓이어도 볼 수 있습니다.' 출력
// - 순환 중단

let repeat = prompt('몇번 반복하시겠습니까?',0);

do {
  console.log(repeat);

  if (repeat < 0) {
    console.log('최초실행입니다.');
    break;
  }

  repeat--;
} while(repeat)



// do ~ while 문 (순환)
// - 위 do ~ while 문을 순방향으로 순환되도록 설정