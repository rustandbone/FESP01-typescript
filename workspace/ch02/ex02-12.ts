(() => {
  class Queue<T> {
    data: T[] = [];

    push(item: T): void {
      this.data.push(item);
    }

    pop(): T | undefined {
      return this.data.shift();
    }
  }

  var sq = new Queue<string>();
  sq.push('hello');
  sq.push('js');
  sq.push('world');
  var s1 = sq.pop();
  var s2 = sq.pop();
  var s3 = sq.pop();
  console.log(s1, s2, s3);

  var nq = new Queue<number>();
  nq.push(1);
  nq.push(2);
  nq.push(3);
  var n1 = nq.pop();
  var n2 = nq.pop();
  var n3 = nq.pop();
  console.log(n1, n2, n3);
})();
