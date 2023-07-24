


const data = [
  {
    "id": 1,
    "src": "visual1.jpg",
    "alt": "모던한 테이블과 화분의 조화를 표현한 공간"
  },
  {
    "id": 2,
    "src": "visual2.jpg",
    "alt": "강렬한 의자의 색상과 따뜻한 느낌의 공간"
  },
  {
    "id": 3,
    "src": "visual3.jpg",
    "alt": "호텔 라운지 느낌의 편안한 의자가 있는 공간"
  },
  {
    "id": 4,
    "src": "visual4.jpg",
    "alt": "물방을 모양의 독특한 디자인의 의자들을 나열한 공간"
  }
]

//1. navigation을 선택 후 이벤트 위임 걸기.
//2. target은 li 요소가 잘 나와야 한다.

const navigation = getNode('.navigation');
//const list = getNodes('.navigation li');
const visualImg = getNode('.visual img');

function handleSlider(e){
  e.preventDefault();

  const target = e.target.closest('li');
  const anchor = e.target.closest('a');

  if(!target || !anchor) return;

  console.log(anchor);

  const list = [...navigation.children];
  const index = attr(target,'data-index');

  console.log(list);

  
  // 내가 선택하지 않은(모든 li) li에게 is-active 클래스 제거해주세요 
  list.forEach((li) => { removeClass(li,'is-active')});

  // 내가 선택한 li에게 is-active 클래스를 넣어주세요 
  addClass(target,'is-active');
   // 선택한 대상의 data-index값을 가져와주세요.

   // 비주얼 안에 있는 이미지를 가져온다. 
   // 이미지의 src 속성에 접근한다.
   // src의 값을 index로 바꾼다.
   // alt 값을 변경한다.
   //console.log(index);
   attr(visualImg,'src',`./assets/part01/${data[index -1].src}`)
   attr(visualImg,'alt',data[index -1].alt)
}

navigation.addEventListener('click',handleSlider);





// 비주얼 안에 있는 이미지를 가져온다. 
// 이미지의 src 속성에 접근한다.
// src의 값을 index로 바꾼다.
// alt 값을 변경한다.













