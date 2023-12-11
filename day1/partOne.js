import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8").trim().split("\r\n");

let result = 0;
for (const line of input) {
  const numberArray = line.split('').filter((char) => /\d/.test(char)); // Match digits with \d and filter out non-digits. This is faster that during something like !isNaN(parseInt(char))
  result += parseInt(numberArray[0] + numberArray[numberArray.length - 1]);
}