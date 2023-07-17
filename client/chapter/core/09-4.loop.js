/* ---------------- */
/* For In Loop      */
/* ---------------- */



const javaScript = {
  creator: 'Brendan Eich',
  createAt: '1995.05',
  standardName: 'ECMAScript',
  currentVersion: 2023,
};

//in 문 : 객체 안에 내가 원하는 값(property)이(가) 있어?
const key = 'hasOwnProperty';//javaScript 객체 안에 valueOf가 없음에도 불구하고 true가 나옴. for..in문을 쓰면 조상의 조상까지도 다 찾아줌.
//console.log(key in javaScript);


// 객체의 속성(property) 포함 여부 확인 방법
// - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?
const key = 'tiger';
//Object.prototype.nickName = 'tiger';//이렇게 직접적으로 찐객체(본체)에 접근해서 건들면 안됨!!

// 객체 자신의 속성인지 확인하는 방법
// - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?

//console.log(javaScript.hasOwnProperty(key));//false

//Object.prototype : 찐객체
//Object.prototype.hasOwnProperty.call(javaScript.key);
//console.log(Object.prototype.hasOwnProperty.call(javaScript,key));//Object.prototype.hasOwnProperty에 접근해서 빌려쓰는 방식

// for ~ in 문 : 객체를 순환히는 용도
// - 객체 자신의 속성만 순환하려면?
for(let key in javaScript) {

  if(({}).hasOwnProperty.call(javaScript,key)) {//Object.prototype을 ({})로 대체
    
    console.log(key);
  }
}



// - 배열 객체 순환에 사용할 경우?
const tens = [10,100,1000,10000];

for(let key in tens) {
  console.log(tens[key]);
}

//배열에 for..in을 쓰는건 성능적으로 좋지 않음