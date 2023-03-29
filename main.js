const fs = require("fs");
const readline = require("readline");

function processLargeFile(filepath) {
  const stream = fs.createReadStream(filepath);
  const rl = readline.createInterface({
    input: stream,
    crlfDelay: Infinity,
  });

  rl.on("line", (line) => {
    // Proses setiap baris di sini
    console.log(line);
  });

  rl.on("close", () => {
    console.log(`Finished processing file`);
  });
}

processLargeFile("file.csv");
