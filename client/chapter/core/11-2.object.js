/* ------------------------- */
/* Copy object by reference  */
/* ------------------------- */


// 복사(copy) vs. 참조(reference)

let message = '문자 값은 프리미티브 데이터 타입으로 값이 복사됩니다.';
let messenger = {
  name: 'kakao talk',
  manufacture: 'kakao'
};

let text = message;

text = '멋쟁이 사자처럼 6기';

let conversationTool = messenger;

//conversationTool.name = 'line';
delete conversationTool.name;
console.log(conversationTool);

// 비교 (복사 vs. 참조)
console.log(message == text);
console.log(message === text);
console.log(messenger == conversationTool);
console.log(messenger === conversationTool);


// 객체 복사
// 1. for ~ in 문을 사용한 복사

//얕은복사
const cloneObject = {}

for(const key in messenger){
  cloneObject[key] = messenger[key];
}

// 2. Object.assign()을 사용한 복사
const copyObject = Object.assign({},messenger)
console.log(copyObject);//객체가 복사된것을 확인

// 3. 전개 연산자(...)를 사용한 복사 : 개꿀
const spreadObject = {...messenger};
console.log(spreadObject);

// 4. 객체를 복사해주는 유틸 함수 
// function copyedObject(object){
//   return Object.assign({},object);
// }

//화살표함수로 변환
const copyedObject = object => Object.assign({}.object);//return을 생략할거면 중괄호 빼야함.
//copyedObject 함수는 오브젝트를 매개변수로 받고 오브젝트의 assign을 통해 전달받은 오브젝트를 복사해서 값을 반환하는 함수이다.

const newObject = copyedObject(messenger);

// 객체 병합(합성)
const cssMapA = {
  color: '#4b004b',
  margin: '0 auto',
};

const cssMapB = {
  display: 'flex',
  flexFlow: 'column',
  justifyContent: 'center',
  padding: '0.4em 0.62em',
  color: '#3f9e97',
};

//let combinedCssMap = {...cssMapA, ...cssMapB};
let combinedCssMap = Object.assign({})


// 중첩된 프로퍼티에 객체를 포함하는 객체 복사
// 얕은 복사 vs. 깊은 복사
const containerStyles = {
  'min-height': '100vh',
  'max-width': {
    sm: '90%',
    md: 640,
    lg: 960,
    xl: 1120,
    xxl: 1140
  },
};

let copyedContainerStyles = {...containerStyles};//얕은복사(껍데기만 복사)
let copyedContainerStyles = cloneDeep(containerStyles)//깊은복사. 복사본 수정해도 원본은 변경이 안됨.


// 1. 깊은 복사 유틸리티 함수
function cloneDeep(object) {
  return Object.fromEntries(
    Object.entries(object).map(([key, value]) => {
      let type = typeof value;
      if (value && type === 'object') {
        value = cloneDeep(value);
      }
      return [key, value];
    })
  );
}


// 2. Lodash 라이브러리 활용
// _.cloneDeep(value)
// 참고: https://lodash.com/docs/4.17.15#cloneDeep
// CDN : https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
