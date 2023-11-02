// ex01-18.ts 복사
//변수와 상수
(() => {
  const JS = 'JavaScript';
  const TS = 'TypeScript';
  const REACT = 'React';

  function getSchedule(subject: string): string | undefined {
    if (JS === subject) return 'JavaScript 수업 4일 교육, 2일 프로젝트';
    else if (TS === subject) return 'TypeScript 수업은 3일 교육, 1일 프로젝트';
  }

  const jsSchedule = getSchedule(JS);
  const tsSchedule = getSchedule(TS);

  console.log(jsSchedule, tsSchedule);
})();
