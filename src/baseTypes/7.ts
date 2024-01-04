
enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function isWeekend(day: WeekDay): boolean {
  return day === WeekDay.Saturday || day === WeekDay.Sunday;
}

console.log(isWeekend(WeekDay.Monday));    
console.log(isWeekend(WeekDay.Saturday));  
console.log(isWeekend(WeekDay.Sunday));    
