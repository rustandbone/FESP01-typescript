// ex01-21.ts 복사
(() => {
  const enum ClassName {
    JS = 'JavaScript',
    TS = 'TypeScript',
    REACT = 'React',
  }

  function getSchedule(subject: ClassName): string | undefined {
    if (ClassName.JS === subject)
      return `${ClassName.JS} 수업 4일 교육, 2일 프로젝트`;
    else if (ClassName.TS === subject)
      return `${ClassName.TS} 수업은 3일 교육, 1일 프로젝트`;
  }

  const jsSchedule = getSchedule(ClassName.JS);
  const tsSchedule = getSchedule(ClassName.TS);

  console.log(jsSchedule, tsSchedule);
})();
