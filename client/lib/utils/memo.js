import { getNode } from "../dom/getNode.js";

const cache = {};

export const memo = (key, callback) => {
  if (!callback) return cache[key]; //callback이 없을 때는 해당 key를 가지고 있는 value를 리턴해라.

  if (cache[key]) {
    //이미 key값이 존재할 때 경고메세지를 띄워줌.
    console.warn(`${key}는 이미 캐시된 값이 존재합니다.`);
    return cache[key]; //기존에 지정된 key값을 리턴해줌.
  }

  cache[key] = callback();

  console.log(cache);
};

memo("cube", () => getNode("#cube")); //setter

console.log(memo("cube")); //div#cube. getter

//객체를 만들어서 key:value 쌍으로 저장
