(() => {
  class HighSchool {
    constructor(kor, eng) {
      this.kor = kor;
      this.eng = eng;
    }

    sum() {
      return this.kor + this.eng;
    }

    avg() {
      return Math.round((this.kor + this.eng) / 2);
    }
  }

  var s1 = new HighSchool(100, 91);
  console.log('평균 : ', s1.avg());
})();
