/* ----------------------------- */
/* Classes                       */
/* ----------------------------- */

// 앞서 함수로 정의한 내용들을 class문법을 사용해 재정의 합니다.

//Animal => tiger => 호돌이

//객체지향 프로그래밍
class Animal{
  legs = 4;
  tail = true;
  stomach = [];

  constructor(name){//constructor는 최초 1회는 실행됨
    this.name = name;
    console.log('최초 1회 실행됩니다.');
  }

  set eat(food){
    this.stomach.push(food);
  }//객체가 아니므로 ,찍지 않음

  get eat(){
    return this.stomach
  }
}

//const tiger = new Animal('호돌이');

//타이거라는 클래스를 통해 새로운 호돌이들이 나올 수 있게 하기
class tiger extends Animal{//animal을 확장시켜서 타이거 만들기

  prey = '';
  //#prey = ''; --> 숨김처리. 밖에서(사용자입장에서) 접근이 불가능

  constructor(name, pattern){//constructor는 생략가능하지만 쓸거면 super를 같이 써줘야 원하는 결과값을 얻을 수 있따.
    super(name);
    this.pattern = pattern;
  }

  hunt(target){
    this.prey = target;
    return `${target}에게 조용히 접근한다.`
  }

  attack(){
    return `강력한 발톱 공격으로 ${this.prey}가 죽었습니다.`
  }

  static sleep(name){
    console.log(name + '이 잠을 잔다');
  }
  //beom.sleep('aa');//접근불가
  //Tiger.sleep('aa');//접근가능
}

const beom = new tiger('범','호랑이무늬');
//beom.hunt('여우') //'여우에게 조용히 접근한다.'

class Champion {
  q = '';
  w = '';
  d = '';
  f = '';

  constructor(options) {
    this.q = options.qValue;
    this.w = options.wValue;
    this.d = options.dValue;
    this.f = options.fValue;
  }
  pressD() {
    console.log(this.d + '발동!');
  }
  pressF() {
    console.log(this.f + '발동!');
  }
}

const yumi = new Champion({
  qValue: '사르르탄',
  wValue: '너랑유미랑',
  dValue: '점멸',
  fValue: '회복',
});