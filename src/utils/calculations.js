const daysOfAYear = (year) => isLeapYear(year) ? 366 : 365;
const isLeapYear = (year) => year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);

export default function calculations(sumValue, rate, days) {
  const currentYear = new Date().getFullYear();
  const total = +sumValue + +(sumValue * (rate / 100) * days) / (daysOfAYear(currentYear));
  return Math.ceil(total).toLocaleString();
}