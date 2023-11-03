// ex03-13.ts 복사
(() => {
  //자바스크립트 => 타입스크립트 리팩토링
  //Type assertion 적용
  var todo1 = {} as Todo;
  todo1.title = '할 일';

  var todo2 = {
    title: '할 일2',
  } as Todo;
  todo2.content = '내용2';

  var todo3 = {
    title: '할 일3',
    content: '내용3',
  };
  todo3.content = '수정1';

  //타입스크립트로 만들었다면
  interface Todo {
    title: string;
    content: string;
  }

  const todo4: Todo = {
    title: '할 일4',
    content: '내용4',
  };

  console.log(todo1, todo2, todo3, todo4);
})();
