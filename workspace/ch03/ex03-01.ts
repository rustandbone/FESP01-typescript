(() => {
  interface Todo {
    title: string;
    content: string;
  }

  //Readonly 적용 - 읽기 전용
  const todo1: Readonly<Todo> = {
    title: '할 일1',
    content: '내용1',
  };

  //수정 불가
  // todo1.title = '수정1';

  console.log(todo1);
})();
