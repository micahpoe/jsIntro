const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

(async function main() {
  let answer;

  do {
    answer = await askQuestion("Do you want to do that again? ");
  } while (answer === "y");

  console.log(await askQuestion("Do you want to do that again? "));

  rl.close();
})();
