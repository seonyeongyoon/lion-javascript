// const response = await fetch("https://pokeapi.co/api/v2/pokemon/4");
// console.log(response);

// //response에 ok가 떨어졌다면 안의 코드를 실행해라. 안전한 코드.
// if (response.ok) {
//   const data = await response.json();
//   console.log(data);
// }

const URL = "http://localhost:3000/users";

const defaultOptions = {
  method: "GET",
  body: null,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
};

//비동기통신을 위한 함수
export const sunny = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  };

  const response = await fetch(url, options); //프라미스 객체

  if (response.ok) {
    response.data = await response.json();
    //console.log(response);
  }

  return response;
};

//떨어지는 값이 객체이기 때문에 await으로 까주기
const response = await sunny({
  url: URL,
});
const userData = await response.data;
//console.log(userData);

//const data = await sunny("https://jsonplaceholder.typicode.com/users");

//console.log(data.data);

// userData.forEach((item) => {
//   //console.log(item);
// });

sunny.get = (url, options) => {
  return sunny({
    url,
    ...options,
  });
};

sunny.post = (url, body, options) => {
  return sunny({
    method: "POST",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

sunny.delete = (url, options) => {
  return sunny({
    method: "DELETE",
    url,
    ...options,
  });
};

sunny.put = (url, body, options) => {
  return sunny({
    method: "PUT",
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

// const data = await sunny.get("https://jsonplaceholder.typicode.com/users");
// console.log(data);
