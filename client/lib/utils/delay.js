import { getNode } from "../dom/getNode.js";
import { insertLast } from "../dom/insert.js";
import { xhrPromise } from "./xhr.js";

function delay(callback, timeout = 1000) {
  setTimeout(callback, timeout);
}

const first = getNode(".first");
const second = getNode(".second");

// delay(() => {
//   console.log(1);
//   first.style.top = "-100px";
//   delay(() => {
//     console.log(2);
//     first.style.transform = "rotate(360deg)";
//     delay(() => {
//       console.log(3);
//       first.style.top = "0";
//       second.style.top = "0";
//     });
//     second.style.top = "100px";
//     console.log("b");
//   });
// });

//★★★★delayP 함수를 실행하면 리턴되는 값이 promise 객체입니다.★★★ -> then을 이어서 쓸수있음
//객체 합성 mixin

const defaultOptions = {
  shouldReject: false,
  timeout: 1000,
  data: "성공!",
  errorMessage: "알 수 없는 오류가 발생했습니다.",
};

export function delayP(options) {
  //options = 객체

  let config = { ...defaultOptions }; //객체에 의한 참조. 아래에서 재할당이 되므로 const 아닌 let 써야함./

  if (typeof options === "number") {
    config.timeout = options;
  }

  if (typeof options === "object") {
    config = { ...defaultOptions, ...options }; //options가 앞에오면 기본값을 덮어쓰므로 안됨.
  }

  const { shouldReject, data, errorMessage, timeout } = config; //구조분해할당
  console.log(config);

  return new Promise((resolve, reject) => {
    //resolve, reject 이름은 성공, 실패 등 다른 것으로 바꿔도 되지만 순서는 바꿀 수 없음. 무조건 성공, 실패 순서임.

    setTimeout(() => {
      if (!shouldReject) {
        resolve(data); //성공시
        //resolve("성공입니다!"); //성공시
        //resolve({name:'tiger', age:33}); //성공시
      } else {
        reject({ message: errorMessage }); //실패시
        //reject("실패입니다!"); //실패시
        //reject({ message: "알 수 없는 오류가 발생했습니다." }); //실패시
      }
    }, timeout);
  });
}

delayP({ shouldReject: false })
  .then((res) => {
    //강제로 오류발생시키괴 catch로 잡기
    //delayP(5000) : 5초 뒤 실행
    //delayP() 괄호 안에 아무것도 입력안하면 성공이라 봄. 실패면 false 입력.
    //console.log(res);
  })
  .catch(({ message }) => {
    alert(message);
  })
  .finally(() => {
    //finally는 성공해도 실행, 실패해도 실행.
    //console.log("어쨌든 실행됩니다.");
  });

// delayP().then((res) => {
//   //delayP() 괄호 안에 아무것도 입력안하면 성공이라 봄. 실패면 false 입력.
//   console.log(res);
// });

// delayP()
//   .then(({ name, age }) => {
//     console.log(name);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//console.log(delayP()); //성공을 반환

// console.log(2);
// console.log(3);

//쌤 보충설명
/*
function delayP(shouldReject){
  
  // 성공이야? (약속해 알려주기로) 그러고 나서(then) 이거 해 
  // 실패야? (약속해 알려주기로) 그러고 나서(then) 이거 해 

  return new Promise((성공,실패)=>{
  
    setTimeout(() => {
      if(shouldReject){
        성공('통신 성공');
      }else{
        실패('통신 실패!!')    
      }
    }, 5000);
  })
}

// promise object

delayP(true)
.then((결과)=>{
  console.log(결과);
})
*/

async function delayA() {
  return "성공!";
}

const data = await delayA();

//console.log(data);

// async - 함수가 promise 객체를 반환 하도록
//       - await 사용

// await - 코드의 실행 흐름 제어 (멈춰)
//       - result값 가져오기
async function 라면끓이기() {
  delayP({ data: "물넣기" }).then((res) => {
    console.log(res);
  });

  const 스프 = await delayP({ data: "스프넣기" }); //await: 코드를 만나게 되면 실행을 잠시 중단시킴.
  console.log(스프);

  const 면 = await delayP({ data: "면넣기" }); //await: 코드를 만나게 되면 실행을 잠시 중단시킴.
  console.log(면);

  const 계란 = await delayP({ data: "계란넣기" }); //await: 코드를 만나게 되면 실행을 잠시 중단시킴.
  console.log(계란);

  const 접시 = await delayP({ data: "접시" }); //await: 코드를 만나게 되면 실행을 잠시 중단시킴.
  console.log(접시);
}

//라면끓이기();

//1. then 결과 가져오기
// function getUserData() {
//   const data = xhrPromise.get("https://jsonplaceholder.typicode.com/users");

//   data.then((res) => {
//     console.log(res);
//   });
//   //console.log(data);
// }

//2. await 결과 가져오기
async function getData() {
  const data = xhrPromise.get("https://pokeapi.co/api/v2/pokemon/4");

  //const result = await data;

  const pokemon = await data;

  //console.log(pokemon.sprites["front_dafault"]);

  insertLast(
    document.body,
    `<img src="${pokemon.sprites["front_default"]}" alt="" />`
  );
}

//getData();
