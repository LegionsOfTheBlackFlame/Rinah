// export function createCalendar() {
//     const startDate = new Date();
// const thisMonth = startDate.getMonth();
// const thisYear = startDate.getFullYear();
// const lastDateofMonth = new Date(thisYear, thisMonth + 1, 0);
// const lastDateofMonthDate = lastDateofMonth.getDate();
// let datesofMonth = [];
// let daysofDatesofMonth = [];

// console.log(lastDateofMonthDate);


// for (let i = 1; i < lastDateofMonthDate+1; i++) {
//     let thisDate = new Date(thisYear, thisMonth, i);
//     datesofMonth.push(thisDate);

//     let thisDay = thisDate.getDay();
//     daysofDatesofMonth.push(thisDay);
// }

// let firstDateDay = datesofMonth[0].getDay();
// let j = 0;
// for (let i = 1; i !== firstDateDay; i++) {
  
//   let thisDate = new Date(thisYear, thisMonth, j);
//   j--;
//   datesofMonth.unshift(thisDate);
//   let thisDay = thisDate.getDay();
//   daysofDatesofMonth.unshift(thisDay);
// }
// console.log(datesofMonth);
// console.log(daysofDatesofMonth);

// return datesofMonth;
// }

export function generateCalendarBase(dateObject) {

  let thisDateObject;

  if(date) {
    thisDateObject = dateObject;
  } else {
    thisDateObject = new Date();
  }

  let thisBaseMonth = thisDateObject.getMonth();
  let thisBaseYear = thisDateObject.getFullYear();
  let thisBaseLastDateObject = new Date(thisBaseYear, thisBaseMonth+1, 0);
  let thisBaseLastDate = thisBaseLastDateObject.getDate();

  let thisCalendarBase = [];

  for (let i = 0; i < thisBaseLastDate; i++) {
    let thisDateObject = new Date(thisBaseYear, thisBaseMonth, 1 + i);
    thisCalendarBase.push(thisDateObject);
  }




}

export function generateMonthsList() {
  let thisList = [];
  let thisDate = new Date();
   for (let i = 0; i < 12; i++) {
     thisDate.setMonth(i);
 
     thisList.push(thisDate.toLocaleString('default', {month: 'long'}));
   }
 
   
   return thisList;
}

export function generateYearsList() {
  let thisList = [];
  let thisDate = new Date();
  let thisYear = thisDate.getFullYear();

  for (let i = thisYear; i < thisYear+10; i++) {
    thisList.push(i);
  }

  return thisList;

}

