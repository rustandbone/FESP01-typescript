(() => {
  interface Todo {
    readonly _id: number;
    title: string;
    content: string;
    done?: boolean;
  }

  interface Toggle {
    (param: Todo): void;
  }

  var todo1: Todo = {
    _id: 1,
    title: '할 일1',
    content: '인터페이스 사용',
    done: false,
  };

  var todo2: Todo = {
    _id: 2,
    title: '할 일2',
    content: '인터페이스 사용2',
  };

  console.log(todo1);

  var toggleFn: Toggle = function (todo) {
    todo.done = !todo.done;
  };

  toggleFn(todo1);
  console.log(todo1, todo2);
})();
