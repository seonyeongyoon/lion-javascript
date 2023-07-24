const contents = getNode('.contents');
const textField = getNode('#comment37');
const commentContainer = getNode('.comment_container');

//클릭한 대상을 찾기
//클릭한 대상의 data-name 값 찾기

function createComment(user,value){
  const template = /* html */`
    <div class="id" data-comment-id="${Date.now()}">
      <div class="profile_img border_over"><img src="./assets/part03/draw.png" alt=""></div>
        <div class="comment_field">
            <div class="text_container">
                <div class="name"><a href="#">${user}</a></div>
                <div class="text_field">${value}</div>
            </div>
        </div>
    </div>`
    
  return template;
}

function endScroll(target){
  target.srcollTop = target.scrollHeight;
  return target.scrollHeight;
}

function clearContents(target){
  if(target.nodeName === 'INPUT' || target.nodeName === 'TEXTAREA'){
    target.value = '';
    return;
  }
  target.textContent = '';
}

const handleArticle = (e) => {
  //console.log('target: ',e.target);//target : 마우스가 제일 처음 만나는 대상
  //console.log('curretTarget: ',e.curretTarget);//curretTarget : 이벤트가 걸린 대상. 하나만 수집이 됨.

  let target = e.target;
  let name = target.dataset.name;

  while(!name){
    target = target.parentNode;//parentElement도 가능
    name = target.dataset.name; //기존의 name값이 undefined가 뜰 시 while문 순환, 값을 새로 선택한 타겟의 값으로 다시 수집해서 넣어주어야함(재할당).

    if(target.nodeName === 'BODY'){//클릭했는데 부모를 찾다가 혹시 BODY를 만나게 되면 더이상 찾지말고 반복문 종료해
      target = null;//값을 명시적으로 비워두기 위해
      return;
    }
  }
  console.log(name);//data-name이 없으면 undefined가 뜨므로 부모의 것을 가져와야함.

  //좋아요 버튼 클릭시 클래스 추가
  if(name === 'like'){
    //target.classList.add('active');
    //target.classList.toggle('active');
    toggleClass(target,'active');
  }

  if(name === 'more'){
    toggleClass(target,'active');
  }

  if(name === 'comment'){
    textField.focus();
  }

  if(name === 'send'){
    e.preventDefault();
    let value = textField.value;//textField에 입력한 문자값이 value에 담김.
    if(value === '') return;

    

    //send 버튼을 눌렀을때 ".comment_container 에 template 을 넣어주기
    insertLast(commentContainer,createComment('윤선영',value));
    //textField.value = '';//send버튼 누르면 등록되고 안에 내용이 지워지도록 하기
    //commentContainer.srcollTop = commentContainer.scrollHeight;
    endScroll(commentContainer);
    clearContents(textField);
  }
}

contents.addEventListener('click',handleArticle);

//parentNode와 parentElement의 차이
//모든 노드 탐색(주석도 노드에 포함) vs 요소 노트 탐색