(() => {
  interface Todo {
    _id: string;
    title: string;
    content?: string;
  }

  //Required 적용 - 옵셔널 제거
  const todo1: Required<Todo> = {
    _id: '1',
    title: '제목1',
    content: '내용1',
  };

  //인터페이스만 있으면 content에 옵셔널이 있어서 substring 쓰는데 오류 남
  //Required로 substring 사용 가능
  console.log(todo1.content.substring(1, 2));
})();
