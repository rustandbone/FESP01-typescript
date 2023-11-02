//변수와 상수
(() => {
  function getSchedule(subject: string): string | undefined {
    if ('JavaScript' === subject)
      return 'JavaScript 수업 4일 교육, 2일 프로젝트';
    else if ('TypeScript' === subject)
      return 'TypeScript 수업은 3일 교육, 1일 프로젝트';
  }

  const jsSchedule = getSchedule('JavaScript');
  const tsSchedule = getSchedule('TypeScript');

  console.log(jsSchedule, tsSchedule);
})();
