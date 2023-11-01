(() => {
  //인수 타입 지정, return 타입 지정
  function hello(name: string): string {
    return 'Hi ' + name;
  }

  console.log(hello('TypeScript'));
  //js로 컴파일 : tsc ex01-01.ts
  //지정한 타입과 다를 시 컴파일 오류 발생
})();
