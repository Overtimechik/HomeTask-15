import { format } from "date-fns";
import { ru } from "date-fns/locale";
const currentDate = new Date();
let min = 1
let max = 12
let mounth = Math.floor(Math.random() * (max - min) + min);
console.log(mounth)
const randomDate = new Date(`2023-${mounth}-25`);

function dateDiffInDays(date1: Date, date2: Date): number {
  const oneDay = 1000 * 60 * 60 * 24;
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(timeDiff / oneDay);
}

const date1 = new Date('2023-12-20');
const date2 = new Date('2024-02-13');
const differenceInDays = dateDiffInDays(date1, date2);

console.log(differenceInDays);//1

console.log(
  format(randomDate, "d/MMMM/yyyy ", { locale: ru }) +//3 task
    "\n" +
    format(currentDate, "d MMMM p", { locale: ru })//2 task
);
