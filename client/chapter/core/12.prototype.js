/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


const animal = {
  legs: 4,
  tail: true,
  stomach: [],
  set eat(food){//eat메서드 = setter. 세팅해주기 때문
    this.stomach.push(food);
  },
  get eat(){//getEat메서드 = getter. 가져오는 거라서
    return this.stomach;
  }
}

const tiger = {
  pattern: '호랑이무늬',
  prey:'',
  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  },
  //__proto__ = animal //밖에 써도 되고 안에 써도 됨
}

const fox = {
  prey:'',//여우는 hunt가 없으므로 사냥은 하지 못함
  //__proto__ = animal
}

tiger.__proto__ = animal;
fox.__proto__ = animal;

//함수는 두가지 일을 할 수 있다. (양면의 얼굴을 가지고 있다.)
function Button(name){//일반함수
  this.name = name;
  console.log(this);
}

function User (name, age, email) {
  this.name = name;
  this.age = age;
  this.email = email;
}

// 생성자 함수 
//생성자 함수는 대부분 이름이 대문자임
const b = new Button('버튼');//생성자 함수 : 객체를 만들어줌

const person1 = new User('선영',29,'sun940204@naver.com');


//실습
function Animal() {
  this.stomach = [];
  this.legs = 4;
  this.tail = true;
  this.eat = function (food){
    this.stomach.push(food);
  }
  this.printEat = function(food){
    return this.stomach;
  }
}

const tiger2 = new Animal();//animal이라는 생성자함수가 객체를 만들어줌

tiger2.pattern = '호랑이 무늬';

tiger2.hunt = function(tiger){
  this.prey = target,
  console.log(`${target}에게 슬금슬금 접근합니다.`);
}

const cat = new Animal();

cat.say = () => '냐아아아아옹';

const cow = new Animal();
const wolf = new Animal();
const dog = new Animal();

// const str = new String('a');
// const num = new number(1);








