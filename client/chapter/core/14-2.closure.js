function earth(){
  
  let water = true;
  let apple = {
    founder:'Steve Jobs',
    ceo:'Tim Cook',
    product: ['iphone','macbook','macStudio','appleWatch']
  }
  let gravity = 10;

  return function (value) {
    gravity = value;
    console.log( gravity, water );
  }
}

const ufo = earth()

ufo(5)

//호랑이 본문이 저장된 ufo가 클로저
//가비지 컬렉터가 수집되지 않도록 그 공간을 폐쇄시킨다. 그것을 클로저라 부른다.
//클로저를 통해 earth() 안의 정보를 가져오고 싶을 때는 내부 function에 적어줘야만 가져올 수 있는 건가요
//ufo()를 실행시켜줘야만 earth() 안의 정보를 가져올 수 있다.
//외부 function에는 변수를 지정하고 내부 function에는 실행시킬 내용을 지정


const button = document.querySelector('button');


// let isClicked = true; // 전역 오염 ...

function handleClick(){
  
  let isClicked = true; 

  return function (){
    if(isClicked){
      document.body.style.backgroundColor = 'orange';
    }else{
      document.body.style.backgroundColor = 'transparent';
    }
  
    isClicked = !isClicked;
  }
 
}


button.addEventListener('click',handleClick())





function useState(initValue){
  
  let value = initValue

  function read(){
    return value
  }

  function write(overValue){
    value = overValue
  }

  return [read,write]
}


// setClick()
// const [click,setClick] = useState(true);
