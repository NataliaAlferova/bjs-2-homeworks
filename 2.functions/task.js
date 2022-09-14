"use strict";

// Задание 1

let numbers = [];

function getArrayParams(numbers){ 
  let result = {
    min: Infinity,
    max: -Infinity,
    avg: 0,
  }
  let sum = 0;

  for (let number of numbers) {
    if (number > result.max) {
      result.max = number;
    }
  }

  for (let number of numbers) {
    if (number < result.min) {
      result.min = number;
    }
  }

  for (let number of numbers) {
    sum = sum + number;
    }
  result.avg = sum / numbers.length;
  result.avg = Number((result.avg).toFixed(2));

  return result;
}


// Задание 2

let arrOfArr = [];

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  for (let array of arrOfArr) {
    if (func(array) > max) {
      max = func(array);
    }
  }
  return max;
}

function worker(array) {
  let sum = 0;
  for (let number of array) {
    sum = sum + number;
    }
  return sum;
}

makeWork(arrOfArr, worker);


// Задание 3

function worker2(array) {
  let min = Infinity;
  let max = -Infinity;
  for (let number of array) {
    if (number > max) {
      max = number;
    }
    if (number < min) {
      min = number
    }
  }
  let diff = Math.abs(max - min);

  return diff;
}

makeWork(arrOfArr, worker2);