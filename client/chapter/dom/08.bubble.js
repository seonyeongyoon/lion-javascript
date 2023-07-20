const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

//콘솔 문구에 색깔 넣기
section.addEventListener('click',()=>{
  console.log('%c section','color:orange');
},true)

article.addEventListener('click',(e)=>{
  //e.stopPropagation()
  console.log('%c article','color:dodgerblue');
},true)

p.addEventListener('click',(e)=>{
  //e.stopPropagation()
  console.log('%c p','color:hotpink');
},true)

//캡쳐링 : 거꾸로 올라가는것
//버블링 : 일반흐름대로 가는것
//버블링을 막기 위해서는 stopPropagation()이 필요하다.