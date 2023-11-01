// 유니언 타입
(() => {
  function print(msg: string | number | boolean): void {
    // 타입 가드
    if (typeof msg === 'string') {
      console.log(`${msg} 글자 수 : ${msg.length}`);
    } else if (typeof msg === 'number') {
      console.log(`${msg} + 10 = ${msg + 10}`);
    } else {
      console.log(`${msg} : ${msg ? '참' : '거짓'}`);
    }
  }
  print('world');
  print(200);
  print(false);
})();
