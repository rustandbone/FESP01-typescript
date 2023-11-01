(() => {
  //string
  var str: string = 'hello';

  //number
  var age: number = 30;

  //boolean
  var done: boolean = true;

  //object
  var todo: object = { title: 'TypeScript 공부', done: false };

  //Array
  var items: Array<string> = ['JS 공부', 'TS 공부'];
  var todoList: string[] = ['JS 프로젝트', 'TS 프로젝트'];

  //tuple
  var users: [string, string] = ['김철수', '이영희'];
  var user: [string, number] = ['김철수', 30];

  //any
  var userName: any = '이일구';
  userName = 219;

  //null
  var nullVal: null = null;

  //undefined
  var undefinedVal: undefined;

  console.log(
    str,
    age,
    done,
    todo,
    items,
    todoList,
    users,
    user,
    userName,
    nullVal,
    undefinedVal
  );

  console.log(
    typeof str,
    typeof age,
    typeof done,
    typeof todo,
    typeof items,
    typeof todoList,
    typeof users,
    typeof user,
    typeof userName,
    typeof nullVal,
    typeof undefinedVal
  );
})();
