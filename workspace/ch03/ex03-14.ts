(() => {
  var div = document.querySelector('div');

  //non null assertion - null이 없음을 단언
  // div!.innerHTML = 'hello';

  if (div !== null) {
    //타입 가드
    //정확한 타입 추론을 하도록 타입 힌트를 줌. 타입스크립트에 의미 있는 조건문
    div.innerHTML = 'hello';
  }
})();
