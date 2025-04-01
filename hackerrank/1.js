"use strict";

const fs = require("fs");

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

function diagonalDifference(arr) {
    let n = arr.length;
    let primarySum = 0;
    let secondarySum = 0;

    for (let i = 0; i < n; i++) {
        primarySum += arr[i][i];
        secondarySum += arr[i][n - 1 - i];
    }

    return Math.abs(primarySum - secondarySum);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().replace(/[^0-9]/g, ""), 10);
    let arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(
            readLine()
                .replace(/[^0-9 -]/g, "")
                .split(" ")
                .map(Number)
        );
    }

    const result = diagonalDifference(arr);
    ws.write(result.toString() + "\n");
    ws.end();
}
