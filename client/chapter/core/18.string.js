/* ---------------------------------------------------------------------- */
/* String Type                                                            */
/* ---------------------------------------------------------------------- */


let message = 'Less is more.';


// length 프로퍼티
let stringTotalLength = message.length;
console.log('stringTotalLength : ',stringTotalLength);


// 특정 인덱스의 글자 추출
let extractCharacter = message[10];
console.log('extractCharacter : ',extractCharacter);


// 문자열 중간 글자를 바꾸는 건 불가능 
// (기존 문자 변경 대신, 새로운 문자를 생성해야 함)
let immutableChangeCharacter;


// 부분 문자열 추출
let slice = message.slice(1,3);
//let slice = message.slice(8,-1); --> -1: 뒤에서부터 1번째까지
//let slice = message.slice(8); --> 숫자를 하나만 적으면 이 차례부터 끝까지 반환해줌.
console.log('slice : ',slice);

let subString = message.substring(1,3);
console.log('subString : ',subString);

//slice와 subString의 차이점
/*
1. start < end일 때는 위와 같이 동일한 문자열을 리턴하지만 start > end일 때는 결과가 다릅니다.
substring은 start > end일 때, start와 end의 위치를 바꿔서 결과를 계산합니다. 즉, substring(5, 0)은 substring(0, 5)으로 계산됩니다.
반면에 slice는 start > end일 때 빈 문자열('')을 리턴합니다.

2. start가 음수 일 때 substring과 slice의 계산 결과가 달라집니다.
substring은 start가 음수일 때 0으로 변경되고, slice는 음수일 때 문자열 끝에서 앞쪽으로 음수만큼 이동된 Index로 계산됩니다.
예를 들어 substring(-8, 10)는 substring(0, 10)로 계산되고, slice(-8, 10)는 slice(3, 10)로 계산됩니다.

3. substring은 end가 음수일 때 0으로 계산되며, slice는 문자열 끝에서 앞쪽으로 이동하여 위치를 찾습니다.
*/
let subStr = message.substr(1,3);
console.log('subStr : ',subStr);

//message.sub

// 문자열 포함 여부 확인
let indexOf = message.indexOf('a');
console.log('indexOf : ',indexOf);

let lastIndexOf = message.lastIndexOf('s');
console.log('lastIndexOf : ',lastIndexOf);

let includes = message.includes('less');
console.log('includes : ',includes);

let startsWith = message.startsWith('less');
console.log('startsWith : ',startsWith);

let endsWith = message.endsWith('.');
console.log('endsWith : ',endsWith);


// 공백 잘라내기
let trimLeft = message.trimLeft();

let trimRight = message.trimRight();

let str = '   asd    fas     df    '

//console.log(str.split(' ').join(''));//모든 공백 제거
console.log(str.replace(/\s*/g,''));//공백 한번에 찾아서 제거

//replace를 활용한 공백제거 해주는 유틸함수
function normalText(string){
  return string.replace(/\s*/g,'');
}
//normalText(string);

let trim = str.trim();//양쪽 공백만 제거해줌
console.log('trim : ',trim);

// 텍스트 반복
let repeat = message.repeat(3);
console.log('repeat : ',repeat);


// 대소문자 변환
let toLowerCase = message.toLowerCase();
console.log('toLowerCase : ',toLowerCase);

let toUpperCase = message.toUpperCase();
console.log('toUpperCase : ',toUpperCase);


// 텍스트 이름 변환 유틸리티 함수
function toCamelCase(string) {
  return string.replace(/(\s|-|_)+./g, ($1) => $1.trim().replace(/(-|_)+/, '').toUpperCase())
}

function toPascalCase(string) {
  let name = toCamelCase(string);
  return name[0].toUpperCase() + name.slice(1);
}