(() => {
  type User = {
    id: string;
    name: string;
    address: string;
    phone: string;
  };

  type ArrayUser = {
    // [Prop in 'id' | 'name']: string[];
    [Prop in keyof User]: string[];
  };

  const kim: User = {
    id: 'kim',
    name: '김철수',
    address: '서울시',
    phone: '01022223333',
  };

  const lee: ArrayUser = {
    id: ['kim'],
    name: ['김철수'],
    address: ['서울시', '경기도'],
    phone: ['01022223333', '01033334444'],
  };

  console.log(kim, lee);
})();
