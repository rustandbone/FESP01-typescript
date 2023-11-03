(() => {
  interface Todo {
    _id: number;
    title: string;
  }

  type OptionalTodo = {
    //유니언 방법
    // [P in '_id' | 'title']?: Todo[P];

    [P in keyof Todo]?: Todo[P];
  };

  type MyPartial<T> = {
    [P in keyof T]?: T[P];
  };

  const todo1: Todo = {
    _id: 1,
    title: '할 일1',
  };

  const todo2: OptionalTodo = {
    _id: 1,
  };

  const todo3: MyPartial<Todo> = {
    _id: 1,
  };

  console.log(todo1, todo2, todo3);
})();
