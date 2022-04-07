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

function worker(array) {
  let sum = 0;
  for (let number of array) {
    sum = sum + number;
    }
  return sum;
}

function makeWork(arrOfArr, worker) {
  let max = -Infinity;
  for (let array of arrOfArr) {
    if (worker(array) > max) {
      max = worker(array);
    }
  }
  return max;
}


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

function makeWork(arrOfArr, worker2) {
  let max = -Infinity;
  for (let array of arrOfArr) {
    if (worker2(array) > max) {
      max = worker2(array);
    }
  }
  return max;
}
