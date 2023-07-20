function getNode(node){
  if(typeof node !== 'string'){//문자가 아닐 때
    throw new Error('getNode 함수의 인수는 문자타입이어야합니다.')
  }
  return document.querySelector(node);
}

//여러 요소를 잡을 경우
//getNodes
function getNodes(node){
  if(typeof node !== 'string'){
    throw new Error('getNodes 함수의 인수는 문자타입이어야 합니다.');
  }
  return document.querySelectorAll(node);
}