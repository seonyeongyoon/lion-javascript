/* ------------------------ */
/* Event delegation         */
/* ------------------------ */

//이벤트 위임 :
//이벤트 리스너는 존재하는 것만으로도 리소스를 소모하기 때문에 부모에만 걸어서 리소스 소모를 줄이는 것.

/* 클래스를 사용한 위임 ---------------- */
const container = getNode('.container');

function handleDelegation(e){

  //console.log(this);//container
  //console.log(e.currentTarget);//이벤트에 걸린 대상 -> container

  let target = e.target;
  let li = target.closest('li');
  if(li) return;

  //let className = attr(target,'class');
  let className = attr(target,'class');
  //let dataName = target.dataset.name;
  let dataName = attr(target,'data-name');

  if(className === 'home'){
    console.log('홈 실행!');
  }

  //console.log(target.closest('li'));//내가 선택한 대상의 가장 인접한 부모를 찾아줘.


  // if(dataName === 'A'){
  //   console.log('A버튼 클릭');
  // }
  
  
  // if(target.getAttribute('class') === 'a'){
  //   console.log('A 버튼 클릭!');
  // }

  
  // if(target.getAttribute('class') === 'b'){
  //   console.log('B 버튼 클릭!');
  // }

  
  // if(target.getAttribute('class') === 'c'){
  //   console.log('C 버튼 클릭!');
  // }

  
  // if(target.getAttribute('class') === 'd'){
  //   console.log('D 버튼 클릭!');
  // }
}



container.addEventListener('click',handleDelegation);


/* 속성을 사용한 위임 ------------------ */


/* 노드를 사용한 위임 ------------------ */