// 인터페이스 다중 상속
(function () {
  interface Todo {
    title: string;
    content: string;
  }

  interface TodoList {
    _id: number;
    title: string;
    done: boolean;
  }

  interface TodoInfo extends Todo, TodoList {
    createdAt: Date;
    updatedAt: Date;
  }

  var todo1: Todo = {
    title: '할 일1',
    content: '등록할 때 사용',
  };

  var todo2 = {
    _id: 2,
    title: '할 일2',
    content: '상세 조회에 사용',
  };

  var todo3: TodoInfo = {
    _id: 2,
    title: '할 일2',
    content: '상세 조회에 사용',
    done: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  console.log(todo1, todo2, todo3);
})();
