(() => {
  function echo<T extends string | number | object>(msg: T): T {
    return msg;
  }

  console.log(echo('hello'));
  console.log(echo(100));
  console.log(echo(new Date()));
})();
