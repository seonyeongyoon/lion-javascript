function bindEvent(node,type,handler){
  if(typeof node === 'string'){
    node = getNode(node);
  }

  //단어 경계 \b 를 사용하면 정확히 일치하는 값만 찾을 수 있어요.
  if(!(/mouseenter|click|mousemove|mouseout|mouseover\b/g).test(type)){
    throw new TypeError('bindEvent 함수의 두 번째 인수는 유효한 이벤트 타입 이어야 합니다.')
  }

  node.addEventListener(type,handler);

  //화살표함수
  //return () => node.removeEventListener(type,handler);//함수 안에 함수 -> 콜백함수
  
  //일반함수
  function tiger(){
    return node.removeEventListener(type,handler);
  }

  return tiger;
}

