{
  /**
   * Enum -> 여러가지의 관련된 상수값
   */
  // JavaScript에서는 const로 사용
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wednesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, //6
  }
  
  console.log(Days.Monday);  // 0
  
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  day = 10;
  console.log(day);

  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';
}
