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

//   // код для задачи №2 писать здесь

//   return totalAmount;
// }
