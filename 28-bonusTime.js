// function bonusTime(salary, bonus) {
//     return `£${bonus ? salary * 10 : salary}`;
//     }

// function bonusTime(salary, bonus) {
//     return bonus ? `£${10 * salary}` : `£${salary}`;
//   }

const bonusTime = (salary, bonus) => `£${bonus ? salary * 10 : salary}`;





console.log(bonusTime(10000, true), '£100000');