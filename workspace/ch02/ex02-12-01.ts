(() => {
  interface TodoInfoDetail {
    _id: number;
    title: string;
    content: string;
    done: boolean;
    createdAt: Date;
    updateAt: Date;
  }

  type TodoRegist = Pick<TodoInfoDetail, 'title' | 'content'>;
  type TodoInfo = Omit<TodoInfoDetail, 'createdAt' | 'updatedAt'>;
  type TodoList = Omit<TodoInfo, 'content'>;

  var todo1: TodoRegist = {
    title: '할 일1',
    content: '등록에 사용',
  };

  var todo2: TodoInfo = {
    _id: 2,
    title: '할 일2',
    content: '상세 조회에 사용',
    done: true,
  };

  var todo3: TodoList = {
    _id: 3,
    title: '할 일3',
    done: true,
  };

  console.log(todo1, todo2, todo3);
})();
