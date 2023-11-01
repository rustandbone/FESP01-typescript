// 인터페이스
// ex01-07.ts 복사
((): void => {
  interface User {
    name: string;
    age: number;
  }

  var kim: User = {
    name: '김철수',
    age: 30,
  };
  console.log(kim);

  function printUser(user: User): void {
    console.log(user.name, user.age);
  }

  printUser(kim);
})();
