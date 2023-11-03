(() => {
  //기본 데이터 타입은 추론에 맡기면 됨
  var name = 'kim';
  var age = 30;

  //할당하지 않은 경우 타입은 any가 됨
  //비할당시 타입 지정해주는 게 좋음
  //선언과 할당을 함께 하면 타입 추론이 되기 때문에 타입 지정할 필요는 없음
  var address: string;
  address = '경기도';

  interface Todo {
    title: string;
    content: string;
  }

  //객체는 타입을 지정해야 안전하게 사용 가능
  var todo1: Todo = {
    title: '제목1',
    content: '내용1',
  };

  console.log(name, age, address, todo1);
})();
