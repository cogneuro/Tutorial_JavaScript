// 시행이라는 객체를 만들고, 두 가지 프로퍼티를 추가한다.
var 시행 = {
  일치여부: "일치",
  표적방향: "오른쪽"
};

// 프로퍼티 보기: 아래 두 명령의 결과는 같다.
console.log(시행["일치여부"]);
console.log(시행.일치여부);

// 메서드를 추가한다.
시행.조건출력 = function() {
  console.log("방해자극과 " + this.일치여부 + "하는 표적이 " + this.표적방향 + "에 출현합니다.");
};

// 메서드를 실행하자.
시행.조건출력();

// 객체를 만들 때 메서드를 추가하는 방법도 있다.
var 조건출력 = function() {
  console.log("방해자극과 " + this.일치여부 + "하는 표적이 " + this.표적방향 + "에 출현합니다.");
};

var 새시행 = {
  일치여부: "일치",
  표적방향: "오른쪽",
  조건출력: 조건출력
};

새시행.조건출력();
