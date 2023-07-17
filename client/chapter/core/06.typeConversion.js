/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log( String(YEAR) );//명시적 형 변환
console.log( YEAR + '');//암시적 형 변환

// undefined, null
let days = null;
console.log(typeof String(null));
console.log(null + '');

let undef = undefined;
console.log(typeof String(undefined));
console.log(undefined + '');

// boolean
let isChecked = true;
console.log(String(isChecked));
console.log(isChecked + '');//암시적 형 변환

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));//친구가 정의된 적 없음

// null
let bankbook = null;
console.log(Number(bankbook));

// boolean
let cutie = true;
console.log(Number(cutie));

// string
let num = '250';
console.log(Number(num));
console.log(+num);//문자를 숫자로 변경
console.log(num * 1);
console.log(num / 1);

// numeric string
let width = '105.3px';
console.log(Number(width));

let w = window.parseFloat(width);//parseFloat: 뒤에 있는 문자 절삭 후 앞부분만 나옴.

console.log(w);


/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 
console.log(Boolean(friend));
console.log(Boolean(bankbook));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(1));
console.log(Boolean(0));

console.log('일시적 형 변환 : ' + !false);
console.log('일시적 형 변환 : ' + !!false);//부정 두번 = 긍정
