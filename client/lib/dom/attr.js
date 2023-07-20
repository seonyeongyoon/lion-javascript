/* 쌤코드 */

// const attr = (function(){

// function getAttr(node,prop){

//   // 0. 넘어온 대상이 문자인지를 체크
//   // 1. 체크 후 element node 로 변경해 줘야함.!

//   // const node = '.first';
//   // const prop = 'id';
//   // '.first'.getAttribute('id');

//   if(typeof node === 'string'){
//     node = getNode(node);
//   }

//   return node.getAttribute(prop);

// }

// function setAttr(node,prop,value){

//   if(typeof node === 'string'){
//     node = getNode(node);
//   }

//   // 전달받은 prop의 타입이 string이 아니라면 Error!

//   if(typeof prop !== 'string'){
//     throw new TypeError('setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.')
//   }

//   if(!node[prop] && prop !== 'class' && prop !== 'title'){
//     node.dataset[prop] = value;
//     return;
//   }

//   node.setAttribute(prop,value);
// }

// // 작은 함수를 만들고 보다 큰 함수로

// const arrowAttr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value);

// function attr(node,prop,value){

//   // if(!value){
//   //   return getAttr(node,prop);
//   // }else{
//   //   setAttr(node,prop,value);
//   // }

//   return !value ? getAttr(node,prop) : setAttr(node,prop,value);

// }

//   return attr;

// // IIFE

// })()

// // getAttr()

// attr()

function getAttr(node, prop) {
  // 0. 넘어온 대상이 문자인지를 체크
  // 1. 체크 후 element node 로 변경해 줘야함.!

  // const node = '.first';
  // const prop = 'id';
  // '.first'.getAttribute('id');

  if (typeof node === 'string') {
    node = getNode(node);
  }

  return node.getAttribute(prop);
}

function setAttr(node, prop, value) {
  if (typeof node === 'string') {
    node = getNode(node);
  }

  // 전달받은 prop의 타입이 string이 아니라면 Error!

  if (typeof prop !== 'string') {
    throw new TypeError(
      'setAttr 함수의 두 번째 인수는 문자 타입 이어야 합니다.'
    );
  }

  if (!node[prop] && prop !== 'class' && prop !== 'title') {
    node.dataset[prop] = value;
    return;
  }

  node.setAttribute(prop, value);
}

// 작은 함수를 만들고 보다 큰 함수로

const arrowAttr = (node, prop, value) =>
  !value ? getAttr(node, prop) : setAttr(node, prop, value);

function attr(node, prop, value) {
  // if(!value){
  //   return getAttr(node,prop);
  // }else{
  //   setAttr(node,prop,value);
  // }

  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}



/* 내코드 */

// //getAttr 함수
// function getAttr(node,prop){

//   //0. 넘어온 대상이 문자인지를 체크
//   //1. 체크 후 element node로 변경해 줘야함

//   if(typeof node === 'string'){
//     node = getNode(node);
//   }
//   return node.getAttribute(prop);
// }
// console.log(getAttr('.first','id'));//message


// //setAttr 함수
// function setAttr(node,prop,value){
//   if(typeof node === 'string'){
//     node = getNode(node);
//   } 

//   if(typeof prop !== 'string'){
//     throw new Error('setAttr 함수의 두번째 인수는 문자타입이어야 합니다.')
//   }

//   if(!node[prop] && prop !== 'class'){//비표준 속성일 때 앞에 data-를 붙여줌
//     node.dataset[prop] = value;
//     return;//셋팅을 했기 때문에 아래애서 실행이 되면 안되므로 return 시켜주고 종료되어야함.
//   }

//   node.setAttribute(prop,value);//값을 내보낼 필요가 없고 세팅만하면 되므로 return 필요 x
// }
// //console.log(setAttr('.first','title','인사멘트'));
// console.log(setAttr('.first','animation','playing'));


// function attr(node,prop,value){

//   // if(!value){
//   //   return getAttr(node,prop);
//   // }else{
//   //   setAttr(node,prop,value);
//   // }

//   return !value ? getAttr(node,prop) : setAttr(node,prop,value);
// }

// const arrowAttr = (node,prop,value) => !value ? getAttr(node,prop) : setAttr(node,prop,value);








