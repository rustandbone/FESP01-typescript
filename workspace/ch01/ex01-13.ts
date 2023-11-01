// index signature, string
(() => {
  interface User {
    //필수 입력값 - 없으면 오류
    name: string;
    email: string;
    age?: number;
    // phone?: string;
    // address?: string;
    // hobby?: string;

    //index signature - 모든 요소에 적용
    [etc: string]: string | number | undefined;
    // ? 옵셔널 체이닝 쓰려면 undefined 추가
  }

  var kim: User = {
    name: '김철수',
    email: 'kim@gmail.com',
    age: 30,
    phone: '01099999999',
    address: '서울시',
    hobby: '독서',
  };

  var lee: User = {
    name: '이영희',
    email: 'lee@gmail.com',
    age: 30,
  };

  console.log(kim, lee);
})();
