"use strict";

function solveEquation(a, b, c) {
  let result = [];
  let D = Math.pow(b, 2) - 4 * a * c;

  if (D > 0) {
    result.push ((-b + Math.sqrt(D)) / (2 * a));
    result.push ((-b - Math.sqrt(D)) / (2 * a));
    return result;
  }

  if (D == 0) {
    result.push (-b / (2 * a));
    return result;
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
