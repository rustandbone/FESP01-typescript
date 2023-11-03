// ex03-18.ts 복사
(() => {
  const kim: User = {
    name: '김철수',
    age: 30,
    nickname: '철수'
  };

  const lee: UnknownUser = {
    name: '이영희',
    age: '비공개',
  };

  const hong: AdminUser = {
    name: '홍길동',
  };

  function printUser(user: User | UnknownUser | AdminUser) {
    if (isUser(user)) {
      console.log(user.nickname);
    }
  }

  function isUser(user: User|UnknownUser |AdminUser): user is User {
    return typeof (user as User).age === 'number'
  }

  printUser(kim);
  printUser(lee);
  printUser(hong);
})();
