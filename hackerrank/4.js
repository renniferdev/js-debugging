"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function miniMaxSum(arr) {
  const totalSum = arr.reduce((acc, num) => acc + num, 0);

  const min = Math.min(...arr);
  const max = Math.max(...arr);

  const minSum = totalSum - max;
  const maxSum = totalSum - min;

  console.log(minSum, maxSum);
}

function main() {
  const arr = readLine().split(" ").map(Number);
  miniMaxSum(arr);
}
 