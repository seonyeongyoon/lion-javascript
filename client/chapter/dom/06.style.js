/* -------------------- */
/* DOM Styling          */
/* -------------------- */


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */
const first = getNode('.first');
// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
console.log(first.className);
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용


first.classList.add('hello');
first.classList.remove('hello');
first.classList.toggle('is-active');
console.log(first.classList.contains('is-active'));


addClass('.first','hello');
/* 스타일 변경 방법 --------------------------------------------------------- */
first.style.backgroundColor = 'yellow'; //setter
//console.log(first.style.backgroundColor); //getter x (윗줄처럼 js로 스타일을 넣어주는 것이 아닌 css로 스타일을 적용하면 값이 조회가 안됨)

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장


/* 계산된 스타일 읽기 ------------------------------------------------------- */

// - getComputedStyle(element, [pseudoElement]) `읽기 전용`

console.log(getComputedStyle(first).color);//getter
console.log(getComputedStyle(first).fontSize);//getter
console.log(getComputedStyle(first).getPropertyValue('font-size'));//getter

//setCss('.first','color','pink');
console.log(css('.first','background-color','red'));