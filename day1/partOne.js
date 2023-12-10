import fs from "fs";

const input = fs.readFileSync("./input.txt", "utf-8").trim().split("\r\n");

let result = 0;
for (const line of input) {
  const word = line;
  const charArray = word.split("");
  const firstNumber = charArray.find((char) => !isNaN(parseInt(char)));
  const lastNumber = charArray.reverse().find((char) => !isNaN(parseInt(char)));

  result += parseInt(firstNumber + lastNumber);
}
