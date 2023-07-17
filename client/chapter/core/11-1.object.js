/* --------- */
/* Object    */
/* --------- */


//객체를 사용할 때는 컨사인스 메서드를 사용하는 것이 좋음. 함수가 내장되어있기 때문에.

/* Primitives vs. Object --------- */
// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
  position: 'fixed',
  zIndex: 10000,
  top: '50%',
  left: '50%',
  width: '60vw',
  maxWidth: '800px',
  height: '40vh',
  minHeight: '280px',
  transform: 'translate(-50%, -50%)'
};


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = null;
//authorization : 권한
//authentication : 인증

authUser = {
  uid: 'user-id-zQadkq%1231',
  name: 'tiger',
  email: 'tiger@naver.com',
  isSignIn: true,
  promission: 'paid' //free | paid
}


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser);
console.log(authUser.uid);
console.log(authUser.promission);
console.log(authUser.email);

// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.
console.log(authUser['uid']);
console.log(authUser['promission']);
console.log(authUser['email']);



// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel

//클래스로 객체만들기(객체지향)
//객체지향을 다룰 때는 this를 많이 씀.
class User{
  constructor(name, email){
    this.name = name;
    this.email = email;
  }
}
const user3 = new User('등록');


//함수로 객체만들기(함수지향)
// function createUser(){
//   return {
//     name: 'tiger',
//     email: 'tiger@naver.com',
//   }
// }
// const user = createUser();
// const user1 = createUser('user1','user1@naver.com');
// const user2 = createUser('user2','user2@naver.com');

//shorthand property (단축 프로퍼티)
function createUser(
  name,
  email,
  computedProp = 'phone',
  number = '010-0000-0000'
){
  return {
    name: name,
    email: email,
    [computedProp]: number
  }
}

const user1 = createUser(
  'user1',
  'user1@naver.com',
  'tel',
  '010-1234-5678'
);


//함수는 값을 내뱉을 수 있지만, 함수 안에 객체를 넣으면 객체를 리턴한다.
//함수를 이용해 객체를 계속 리턴받아 만들 수 있다.

// 프로퍼티 포함 여부 확인

//key in user1

Object.prototype.SIGN = true;

//자신(Own)의 속성(property)를 가지고(has) 있는지
for(let key in user1){
  if(Object.prototype.hasOwnProperty.call(user1,key)) {
    console.log(key);
  }
}

// 프로퍼티 나열

//key만 모아놓은 배열 만들어주세요 Object.key()

let keyArray = Object.keys(authUser);
let valueArray = Object.values(authUser);

function getProp(object) {
  if(typeof object !== 'object') {
    throw new Error('getProp함수의 매개변수는 객체 타입이어야 합니다.');
  }
  return Object.keys(object)
}

//위의 함수와 동일
function getP(object) {
  let result = [];

  for(let key in object){
    if(({}).hasOwnProperty.call(object,key)) {
      result.push(key)
    }
  }
  return result;
}



//getProp(object)
// console.log(getProp(authUser));
// ['uid','name','email','isSignIn','permission']
// console.log(valueArray);
  
// 프로퍼티 제거(remove) or 삭제(delete)
//제거 = 비워두는 것, 삭제 = 없애는 것

//authUser.name = null;
//delete.authUser.uid;
//console.log(authUser);

function removeProperty(object, key) {

  if(typeof object !== 'object') {
    throw new Error('....');
  }

  if(key === 'all') {
    for(let key of getProp(object)){
      object[key] = null;
    }
    return object;
  }
  object[key] = null;

  return object;
}
removeProperty(authUser, 'name');

function deleteProperty(object, key) {

  if(isEmptyObject(object)) {//비어있을 경우 함수 종료
    return;
  }

  delete object[key];

  return object;
}
deleteProperty(authUser, 'name');
console.log(authUser);

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

// const student = {
//   name: name,
//   email: email,
//   authorization: authorization,
//   isLogin, isLogin
// }

//위의 배열을 단축프로버티로 변환
const student = {name, email,authorization, isLogin}


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {

  //1. return !(Object.keys(object).length);

  //2. if(Object.keys(object).length === 0) {
  //   return true;
  // }
  // return false;

  //3. return Object.keys(object).length === 0 ? true : false;
}

isEmptyObject(authUser)//false




/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */

let color = ['#ff0000','#2b00ff','#00ff2f'];

//let red = color[0];
//let blue = color[1];
//let green = color[2];

//let [red, blue, green] = color;

let [,,green] = color; //red, blue 건너뛰기

for(let [key,value] of Object.entries(authUser)){
  // let key = keyValue[0];
  // let value = keyValue[1];

  console.log(key);
}

console.log(green);




/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

//배열의 구조분해할당 : 순서가 정해져있다.(순서중요!) 변수 이름을 바꿀 수 있다.
//객체의 구조분해할당 : 순서가 정해져있지 않다. 변수의 이름을 바꿀 수 있다.

const slaries = {
  권혜미: 50,
  이수연: 3000,
  강예나: 500,
  김태일: 700,
}

//const 권혜미 = salaries.권혜미
//const 이수연 = salaries.이수연
//const 강예나 = salaries.강예나
//const 김태일 = salaries.김태일

//const {권혜미,이수연,강예나,김태일} = slaries;
const {권혜미:미미 = "mimi",이수연,강예나,김태일} = slaries;//별칭 지정하고 기본값 지정 가넝. 별칭 지정하면 다음부터 별칭으로만 써야함
console.log(권혜미);

function setElementCss(options){
  
  //구조분해할당 : 객체가 가지고 있는 속성들을 뽑아내는 것.
  //함수에서 넘어온 값이 객체일 때 구조분해할당을 많이 씀.
  //구조분해 할당은 순서는 상관 없음.

  //const {width, height, overflow, color} = options; //구조분해할당 : 객체가 가지고 있는 속성들을 뽑아내는 것.
  //기본값 할당 가능
  const {
    width:w, 
    height:h = 10, 
    overflow, 
    color:c
  } = options; 

  console.log(w, c);

  //console.log(options.width, options.color);
  console.log(width, color);//구조 분해할당을 했으므로 options.을 쓸 필요가 없음
}

const defaults = {
  overflow: false,
  height: 200,
  width: 100,
  color: 'orange',
}

setElementCss({
  width: 50,
  height: 100,
  color: 'red',
  overflow: true,
})

