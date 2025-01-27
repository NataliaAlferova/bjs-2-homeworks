"use strict";

function solveEquation(a, b, c) {
  let result = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d > 0) {
    result.push((-b + Math.sqrt(d)) / (2 * a));
    result.push((-b - Math.sqrt(d)) / (2 * a));
  }

  if (d == 0) {
    result.push(-b / (2 * a));
  }

  return result;
}





// function calculateTotalMortgage(percent, contribution, amount, date) {
//   let totalAmount;

//   let credit = amount - contribution;
//   let monthPercent = percent/12;

//   let Data = new Date();
//   let jearsToEnd = (Number(date.slice(-4)) - Data.getFullYear());
//   let monthToEnd = jearsToEnd * 12 + ((Number(date.slice(3,5))) - (Data.getMonth() + 1));

//   let monthAmount = credit * (monthPercent + (monthPercent / (((1 + monthPercent)^monthToEnd) - 1)));

//   totalAmount = Number((monthAmount * monthToEnd).toFixed(2));



//   console.log(totalAmount);
//   return totalAmount;
// }
