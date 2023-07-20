/* ------------------------------ */
/* Array's Methods                */
/* ------------------------------ */


// Array.isArray

//일반함수
function normalIsArray(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'array';
}
//화살표함수
const isArray = data => Object.pototype.torString.call(data).slice(8,-1).toLowerCase() === 'array';


//일반함수
function normalIsNull(data){
  return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';
}
//화살표함수
const isNull = data => Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'null';


const arr = [10,100,1000,10000];

const people = [
  {
    id:0,
    name:'김다연',
    profession:'프론트엔드 개발자',
    age:25,
    imageSrc:'MAksd23',
  },
  {
    id:1,
    name:'이현주',
    profession:'수영선수',
    age:40,
    imageSrc:'afdfakA',
  },
  {
    id:2,
    name:'김희소',
    profession:'물음표살인마',
    age:30,
    imageSrc:'fAKqi321',
  },
  {
    id:3,
    name:'김규민',
    profession:'래퍼',
    age:52,
    imageSrc:'AFGq3d23',
  },
  {
    id:4,
    name:'전진승',
    profession:'드라마평론가',
    age:18,
    imageSrc:'fQa15f3',
  },
]

/* 요소 순환 ---------------------------- */
//forEach : 값을 반환하지 않음. 일처리만 하고 끝냄.
arr.forEach((item, index) => {
  console.log(item, index);
})

people.forEach((item) => {
  console.log(item.name);//people은 객체이므로 .연산가능
})

const span = document.querySelectorAll('span');


//이벤트 처리할 때 이 방식이 제일 좋은가요? -> NO
//제일 좋은 방식은 이벤트 위임방식(event delegation)
span.forEach((item, index) => {

  item.addEventListener('click', function(){
    console.log(this, index);
  })

})


// forEach

/* 원형 파괴 ----------------------------- */

// push

// pop

// unshift

// shift

// reverse
//arr.reverse();//기존 배열의 순서 뒤집기
//console.log(arr);

// splice : 원하는 곳에 넣거나 추가, 제거가 모두 가능한 맥가이버 같은 메서드.
// arr.splice(1,2,'javascript','css');
arr.splice(1,0,5,13)
console.log(arr);

// sort : 유니코드식 정렬
//arr.sort();
//반환 값 < 0 : a가 b보다 앞에 있어야 한다.
//반환 값 == 0 : a와 b의 순서를 바꾸지 않는다.
//반환 값 > 0 : b가 a보다 앞에 있어야 한다.
arr.sort((a,b) => {//콜백(compare function). 값을 비교 후 내보냄
  return a - b;
})
console.log(arr);


/* 새로운 배열 반환(원본 파괴 x) ------------------------ */
const user = ['선범','효윤','준석'];


// concat
//const newArray = arr.concat(user);//concat: 배열합치기
const newArray = [...arr,...user,'javascript','css'];//spread syntax가 새로 추가도 할 수 있으므로 더 좋음.
console.log(newArray);

// slice
const slice = arr.slice(2,5);
console.log(slice);

// toSorted
const toSorted = arr.toSorted((a,b) => {
  return b - a;
})
console.log(toSorted);

// toReversed
const toReversed = arr.toReversed();
console.log(toReversed);

// toSpliced
const toSpliced = arr.toSpliced(2,0,'javascript','css','react');
console.log(toSpliced);

// map : 새로운 배열을 내보냄
//map이라는 메서드를 사용해서 태그를 담고 있는 배열을 만들고
//배열의 메서드인 foreach를 사용해서 각각의 아이템을 뽑아냄
// function render(){
  
//   return (
//     <div>
//       {
//         people.map((item,index)=>`<div>${item.profession}</div>`)
//       }
//     </div>
//   )
// }

const job = people.map((item,index)=>{
  return /* html */`
    <div class="userCard">
      <div class="imageField">
        <img src="${item.imageSrc}" alt="" />
      </div>
      <span>이름:${item.name}</span>
      <span>직업:${item.profession}</span>
      <span>나이:${item.age}</span>
    </div>
  `
})

job.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item);
})


console.log(job);

//피플 자료구조에서 나이만 모아놓은 배열이 필요하다 => 가공처리 -1 내보내고 싶다.
const newAge = people.map((item) => {
  return item.age - 1;
})
  
job.forEach((item)=>{
  document.body.insertAdjacentHTML('beforeend',item);
})


/* 요소 포함 여부 확인 ---------------------- */

// indexOf : 앞에서 몇번째 인지
console.log(arr.indexOf(10));

// lastIndexOf : 뒤에서 몇번째 인지
console.log(arr.lastIndexOf(10));

// includes : 포함하고 있는지
console.log(arr.includes(1000));

/* 요소 찾기 ------------------------------ */

// find : 반복문을 돌다가 true가 떨어지면 그 대상을 반환하고 더이상 실행하지 않음.
const find = people.find((item) => {
  //console.log(item);
  return item.name === '김희소';
})
console.log(find);

// findIndex
const findIndex = people.findIndex((item) => {
  return item.id === 3;
})

console.log(findIndex);

/* 요소 걸러내기 --------------------------- */

// filter : 배열을 반환
const filter = people.filter((item) => {
  return item.id > 2;
})
console.log(filter);

/* 요소별 리듀서(reducer) 실행 -------------- */
//숫자를 정확히 계산하려면 초기값을 넣어줘야함. 
// reduce
const totalAge = people.reduce((acc, cur) => {
  return acc = cur.age
},0)//초기값 = 0
//console.log(totalAge);

const template = people.reduce((htmlCode,cur)=> htmlCode + `<div>${cur.name}</div>` ,'');

document.body.insertAdjacentHTML('beforeend',template);
//console.log(template);
// reduceRight : 리듀스와 같지만 방향이 반대방향

/* string ←→ array 변환 ------------------ */
const str = '봉석 윤진 예나 시연 진만 정아';

// split : 문자 -> 배열
const stringToArray = str.split('');
console.log(stringToArray);

// join : 배열 -> 문자
const ArrayToString = stringToArray.join('');
console.log(ArrayToString);