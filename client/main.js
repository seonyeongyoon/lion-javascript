import { jujeobData } from './data/data.js';

import { 
  copy,
  shake,
  getNode, 
  addClass,
  showAlert,
  getRandom, 
  insertLast,
  removeClass,
  clearContents,
  isNumericString,
 } from './lib/index.js';


const submit = getNode('#submit');
const nameField = getNode('#nameField');
const resultArea = getNode('.result');

// [phase-1]
// 1. 주접 떨기 버튼을 클릭할 수 있는 핸들러를 연결해 주세요.
// 2. nameField에 있는 값을 가져와 주세요.
// 3. jujeob 데이터 가져오기 
// 4. jujeobData에서 랜덤한 주접 한개를 가져와야함.
// 5. pick 항목을 result에 랜더링해 주세요.


// [phase-1]
//1. 아무 값도 입력받지 못했을 때 예외처리.
//replace => regEXP


// [phase-3]
//1. 잘못된 정보를 입력받으면 사용자에게 알려주세요.
//2. 재사용 가능한 함수(showAlert)
//3. 


function handleSubmit(e){
  e.preventDefault();

  let name = nameField.value;
  const list = jujeobData(name);
  const pick = list[getRandom(list.length)];

  if(!name || name.replace(/\s*/g,'') === ''){//아무값도 받지 못했을 때, 공백문자를 받았을 때 예외처리
    showAlert('.alert-error','이름을 입력해주세요!',2000);
    
    shake.restart();
    
    return;
  }

  if(!isNumericString(name)){
    showAlert('.alert-error','제대로된 이름을 입력해주세요!',2000);

    shake.restart();

    return;
  }

  clearContents(resultArea);
  insertLast(resultArea,pick);
}

// (미니과제) 이름을 제대로 입력 했을 때 클립보드에 복사가 될 수 있도록.
// le state = false;

// state = true;

// if(state){  ...logic }

function handleCopy(){
  const text = resultArea.textContent;

  copy(text).then(() => {
    //통신이 실패하면 then이 실행이 안됨. 통신이 성공되면 then이 실행됨.(promise)
    showAlert('.alert-success','클립보드 복사 완료!');
  });
}


submit.addEventListener('click',handleSubmit);
resultArea.addEventListener('click',handleCopy);