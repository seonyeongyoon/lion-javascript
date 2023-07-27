/* 
import { xhr } from './xhr';

[readystate]

0: uninitialized
1: loading
2: loaded
3: interactive
4: complete

*/

import "../error/refError.js";

/* callback --------------------------------------------- */

// 객체 구조 분해 할당

export function xhr({
  method = "GET",
  url = "",
  onSuccess = null,
  onFail = null,
  body = null,
  headers = {
    "Content-Type": "application.json",
    "Access-Control-Allow-Origin": "*",
  },
} = {}) {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.addEventListener("readystatechange", () => {
    const { status, readyState, response } = xhr;
    if (readyState === 4) {
      if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
      } else {
        onFail("실패");
      }
    }
  });

  xhr.send(JSON.stringify(body));
}

// method, url, onSuccess, onFail, body, headers

// xhr({
//   method:'PUT',
//   url:'https://jsonplaceholder.typicode.com/users',
//   onSuccess(result){
//     console.log( result );
//   },
//   onFail(err){
//     console.log( err );
//   },
//   body:{
//     name:'tiger'
//   },
// });

// 1. 자바스크립트의 함수는 객체다.
// 2. 사용자(협업개발자) 입장 : 쉽게 쓰자
// 3. 설계자 -> 함수 안에 메서드(객체)를 넣어 버리자 !!

/**
 *
 * @param {string} url 서버와 통신할 주소
 * @param {function} onSuccess 서버와 통신 성공시 실행될 콜백 함수
 * @param {function} onFail 서버와의 통신 실패시 실행될 콜백 함수
 * @return server data
 */
xhr.get = (url, onSuccess, onFail) => {
  xhr({
    url,
    onSuccess,
    onFail,
  });
};

xhr.post = (url, body, onSuccess, onFail) => {
  xhr({
    method: "POST",
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.put = (url, body, onSuccess, onFail) => {
  xhr({
    method: "PUT",
    url,
    body,
    onSuccess,
    onFail,
  });
};

xhr.delete = (url, onSuccess, onFail) => {
  xhr({
    method: "DELETE",
    url,
    onSuccess,
    onFail,
  });
};

/* promise API ------------------------ */

const defaultOptions = {
  method: "GET",
  url: "",
  body: null,
  errorMessage: "서버와의 통신이 원활하지 않습니다.",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

export function xhrPromise(options) {
  //mixin(객체 합성) 덮어쓰기 용도
  //const config = { ...defaultOptions, ...options };
  //const config = Object.assign({}, defaultOptions, options);
  const { method, url, body, errorMessage, headers } = Object.assign(
    {},
    defaultOptions,
    options
  );

  if (!url) refError("서버와 통신할 url은 필수값입니다."); //url 없으면 에러야!

  const xhr = new XMLHttpRequest();

  xhr.open(method, url);

  Object.entries(headers).forEach(([key, value]) => {
    xhr.setRequestHeader(key, value);
  });

  xhr.send(JSON.stringify(body)); //send는 라인넘버 상관 x

  return new Promise((resolve, reject) => {
    xhr.addEventListener("readystatechange", () => {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject({ message: errorMessage });
        }
      }
      //console.log(xhr.readyState);
    });
  });
}

// xhrPromise({
//   url: "https://jsonplaceholder.typicode.com/users",
//   errorMessage: "알 수 없는 오류",
// }).then((res) => {
//   console.log(res);
//   res.forEach((item) => {
//     console.log(item);
//   });
// });

xhrPromise.get = (url) => {
  return xhrPromise({
    url,
  });
};

xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method: "POST",
  });
};

xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method: "DELETE",
  });
};

xhrPromise.put = (url, body) => {
  //put도 수정을 해주는 것이므로 body 필요
  return xhrPromise({
    url,
    body,
    method: "PUT",
  });
};

// xhrPromise.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//   console.log(res);
// }); //undefined 나옴
//위에서 return된 프로미스 객체를 반환해줌..!?
