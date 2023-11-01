// 유니언 타입
((): void => {
  function log(msg: string | number): void {
    console.log(msg);
  }
  log('hello');
  log(30);

  var msg1: string | number = 'world';
  var msg2: number | string = 200;
  msg1 = 300;
  log(msg1);
  log(msg2);
})();
